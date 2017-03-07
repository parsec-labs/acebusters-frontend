import React, { PropTypes } from 'react';
import QRCode from 'qrcode.react';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import { makeSelectAccountData } from '../AccountProvider/selectors';
import messages from './messages';
import { modalAdd } from '../App/actions';
import web3Connect from '../AccountProvider/web3Connect';
import { ABI_TOKEN_CONTRACT, tokenContractAddress } from '../../app.config';

import List from '../../components/List';
import Label from '../../components/Label';
import TransferDialog from '../TransferDialog';
import Container from '../../components/Container';
import Button from '../../components/Button';
import FormGroup from '../../components/Form/FormGroup';

export class Dashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.handleGetBlockNumber = this.handleGetBlockNumber.bind(this);
    this.handleGetBalance = this.handleGetBalance.bind(this);
    this.handleTransfer = this.handleTransfer.bind(this);
    this.web3 = props.web3Redux.web3;
    this.token = this.web3.eth.contract(ABI_TOKEN_CONTRACT).at(tokenContractAddress);
  }

  handleGetBlockNumber() {
    this.props.web3Redux.web3.eth.getBlockNumber();
  }

  handleGetBalance() {
    this.token.balanceOf.call(this.props.account.proxy);
  }

  handleTransfer(to, amount) {
    console.log(to, amount);
    this.token.transfer.sendTransaction(to, amount);
    return true;
  }

  render() {
    const qrUrl = `ether:${this.props.account.proxy}`;
    let balance = this.token.balanceOf(this.props.account.proxy);
    if (balance) {
      balance = balance.toString();
    }
    let listPending = [];
    let listTxns = [];
    if (this.props.account[tokenContractAddress]) {
      listPending = pendingToList(this.props.account[tokenContractAddress].pending);
      listTxns = txnsToList(this.props.account[tokenContractAddress].transactions);
    }
    return (
      <Container>
        <h1><FormattedMessage {...messages.header} /></h1>
        <Label>Last Block {this.web3.eth.blockNumber()}</Label>
        <FormGroup>
          <Button size="small" onClick={this.handleGetBlockNumber}>Get Block #</Button>
        </FormGroup>
        <h3> Your address:</h3>
        <p> { this.props.account.proxy } </p>
        <QRCode value={qrUrl} size={120} />
        <p>Balance: {balance}</p>
        <FormGroup>
          <Button onClick={this.handleGetBalance} size="small">Refresh Balance</Button>
          <Button
            onClick={() => {
              this.props.modalAdd((
                <TransferDialog handleTransfer={this.handleTransfer} />
            ));
            }} size="small"
          >Transfer</Button>
        </FormGroup>
        <hr />
        <h2><FormattedMessage {...messages.pending} /></h2>
        <List items={listPending} headers={['#', 'data', 'txHash']} />
        <h2><FormattedMessage {...messages.included} /></h2>
        <List items={listTxns} headers={['txHash', 'from', 'to', 'amount']} />

      </Container>
    );
  }
}

const pendingToList = (pending) => {
  let list = [];
  if (pending) {
    list = Object.keys(pending).map((key) => [key, pending[key].call, pending[key].txHash]);
  }
  return list;
};

const txnsToList = (txns) => {
  let list = [];
  if (txns) {
    list = Object.keys(txns).map((key) => [key, txns[key].from, txns[key].to, txns[key].value]);
  }
  return list;
};

Dashboard.propTypes = {
  modalAdd: PropTypes.func,
  web3Redux: PropTypes.any,
  account: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  account: makeSelectAccountData(),
});


function mapDispatchToProps() {
  return {
    modalAdd: (node) => (modalAdd(node)),
  };
}

export default web3Connect(mapStateToProps, mapDispatchToProps)(Dashboard);
