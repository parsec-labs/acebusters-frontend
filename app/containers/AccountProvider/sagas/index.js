import { takeLatest, fork, takeEvery } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { WEB3_CONNECT, WEB3_METHOD_CALL, CONTRACT_METHOD_CALL, SET_AUTH, ACCOUNT_LOADED } from '../actions';

import { injectedWeb3ListenerSaga } from './injectedWeb3ListenerSaga';
import { accountLoginSaga } from './accountLoginSaga';
import { websocketSaga } from './websocketSaga';
import { web3ConnectSaga } from './web3ConnectSaga';
import { unsupportedNetworkDetectSaga } from './unsupportedNetworkDetectSaga';
import { updateLoggedInStatusSaga } from './updateLoggedInStatusSaga';
import { web3MethodCallSaga, contractMethodCallSaga } from './web3CallsSagas';
import { transferETHSaga, contractTransactionSendSaga } from './txSagas';
import { restartIntercomOnLogout, updateIntercomOnLocationChange, updateIntercomUser } from './intercomSagas';

export { getWeb3 } from '../utils';

// The root saga is what is sent to Redux's middleware.
export function* accountSaga() {
  yield takeLatest(WEB3_CONNECT, web3ConnectSaga);
  yield takeEvery(WEB3_METHOD_CALL, web3MethodCallSaga);
  yield takeEvery(CONTRACT_METHOD_CALL, contractMethodCallSaga);
  yield takeEvery(SET_AUTH, updateLoggedInStatusSaga);
  yield takeEvery(SET_AUTH, restartIntercomOnLogout);
  yield takeEvery(LOCATION_CHANGE, updateIntercomOnLocationChange);
  yield takeEvery(ACCOUNT_LOADED, updateIntercomUser);
  yield fork(websocketSaga);
  yield fork(transferETHSaga);
  yield fork(accountLoginSaga);
  yield fork(contractTransactionSendSaga);
  yield fork(injectedWeb3ListenerSaga);
  yield fork(unsupportedNetworkDetectSaga);
}

export default [
  accountSaga,
];
