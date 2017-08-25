/*
 * Dashboard Messages
 *
 * This contains all the text for the Dashboard component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  amountRequired: {
    id: 'app.containers.Dashboard.amountRequired',
    defaultMessage: 'The amount field cannot be empty',
  },
  amountTooLow: {
    id: 'app.containers.Dashboard.amountTooLow',
    defaultMessage: 'The amount must be greater than {minAmount}',
  },
  amountTooHigh: {
    id: 'app.containers.Dashboard.amountTooHigh',
    defaultMessage: 'The amount must be less than {maxAmount}',
  },
  amountZero: {
    id: 'app.containers.Dashboard.amountZero',
    defaultMessage: 'The amount must be greater than 0',
  },
  send: {
    id: 'app.containers.Dashboard.send',
    defaultMessage: 'Send',
  },
  receive: {
    id: 'app.containers.Dashboard.receive',
    defaultMessage: 'Receive',
  },
  ethereum: {
    id: 'app.containers.Dashboard.ethereum',
    defaultMessage: 'Ethereum',
  },
  nutz: {
    id: 'app.containers.Dashboard.nutz',
    defaultMessage: 'Nutz',
  },
  ok: {
    id: 'app.containers.Dashboard.ok',
    defaultMessage: 'Ok',
  },
  overview: {
    id: 'app.containers.Dashboard.overview',
    defaultMessage: 'Overview',
  },
  wallet: {
    id: 'app.containers.Dashboard.wallet',
    defaultMessage: 'Wallet',
  },
  exchange: {
    id: 'app.containers.Dashboard.exchange',
    defaultMessage: 'Exchange',
  },
  invest: {
    id: 'app.containers.Dashboard.invest',
    defaultMessage: 'Invest',
  },
  header: {
    id: 'app.containers.Dashboard.header',
    defaultMessage: 'Account Dashboard',
  },
  included: {
    id: 'app.containers.Dashboard.included',
    defaultMessage: 'Transaction History',
  },
  powerDownRequests: {
    id: 'app.containers.Dashboard.powerDownRequests',
    defaultMessage: 'Power Down Requests',
  },
  transactionErrorTitle: {
    id: 'app.containers.Dashboard.transactionErrorTitle',
    defaultMessage: 'Transaction error',
  },
  retryTransaction: {
    id: 'app.containers.Dashboard.retryTransaction',
    defaultMessage: 'Retry',
  },
  ethAlert: {
    id: 'app.containers.Dashboard.ethAlert',
    defaultMessage: 'Never send real ether to this address. It is a Rinkeby Testnet Address. Only send Rinkeby TestEther to this Address. Otherwise your Ether will be lost',
  },
  ntzTransferTitle: {
    id: 'app.containers.Dashboard.ntzTransferTitle',
    defaultMessage: 'Transfer NTZ',
  },
  ethTransferTitle: {
    id: 'app.containers.Dashboard.ethTransferTitle',
    defaultMessage: 'Transfer ETH',
  },
  powerUpTitle: {
    id: 'app.containers.Dashboard.powerUpTitle',
    defaultMessage: 'Power Up',
  },
  powerUpDescr: {
    id: 'app.containers.Dashboard.powerUpDescr',
    defaultMessage: 'Power Up will convert NTZ to ABP immediately so you can invest in the Acebuster\'s economy.',
  },
  powerDownTitle: {
    id: 'app.containers.Dashboard.powerDownTitle',
    defaultMessage: 'Power Down',
  },
  powerDownDescr: {
    id: 'app.containers.Dashboard.powerDownDescr',
    defaultMessage: 'Power Down will convert ABP back to NTZ over a period of 3 months.<br />Minimum Power Down amount: {min} ABP',
  },
  powerDownPrereq: {
    id: 'app.containers.Dashboard.powerDownPrereq',
    defaultMessage: 'To Power Down, first Power Up and purchase ABP',
  },
  sellTitle: {
    id: 'app.containers.Dashboard.sellTitle',
    defaultMessage: 'Exchange NTZ for ETH',
  },
  purchaseTitle: {
    id: 'app.containers.Dashboard.purchaseTitle',
    defaultMessage: 'Exchange ETH for NTZ',
  },
  tableJoin: {
    id: 'app.containers.Dashboard.tableJoin',
    defaultMessage: 'Table join',
  },
  tableLeave: {
    id: 'app.containers.Dashboard.tableLeave',
    defaultMessage: 'Table leave',
  },
  sellStart: {
    id: 'app.containers.Dashboard.sellStart',
    defaultMessage: 'Sell start',
  },
  sellEnd: {
    id: 'app.containers.Dashboard.sellEnd',
    defaultMessage: 'Sell end',
  },
  purchaseStart: {
    id: 'app.containers.Dashboard.purchaseStart',
    defaultMessage: 'Purchase start',
  },
  purchaseEnd: {
    id: 'app.containers.Dashboard.purchaseEnd',
    defaultMessage: 'Purchase end',
  },
  nutzContract: {
    id: 'app.containers.Dashboard.nutzContract',
    defaultMessage: 'Nutz contract',
  },
  powerContract: {
    id: 'app.containers.Dashboard.powerContract',
    defaultMessage: 'Power contract',
  },
  me: {
    id: 'app.containers.Dashboard.me',
    defaultMessage: 'Nutz contract',
  },
  tableAddress: {
    id: 'app.containers.Dashboard.tableAddress',
    defaultMessage: 'Table {address}',
  },
  transferStatus: {
    id: 'app.containers.Dashboard.transferStatus',
    defaultMessage: 'Transfer',
  },
  powerUpStatus: {
    id: 'app.containers.Dashboard.powerUpStatus',
    defaultMessage: 'Power Up',
  },
  powerDownPayoutStatus: {
    id: 'app.containers.Dashboard.powerDownPayoutStatus',
    defaultMessage: 'Power Down Payout',
  },
  upgradeAccount: {
    id: 'app.containers.Dashboard.upgradeAccount',
    defaultMessage: 'Upgrade to Shark account',
  },
});
