import * as TransactionAPIUtil from '../util/transactions_api_util';

export const RECEIVE_SINGLE_TRANSACTION = "RECEIVE_SINGLE_TRANSACTION";
export const RECEIVE_ALL_TRANSACTIONS = "RECEIVE_ALL_TRANSACTIONS";
export const RECEIVE_TRANSACTION_ERRORS = "RECEIVE_TRANSACTION_ERRORS";

const receiveAllTransactions = payload => ({
  type: RECEIVE_ALL_TRANSACTIONS,
  payload
});

const receiveSingleTransaction = payload => ({
  type: RECEIVE_SINGLE_TRANSACTION,
  payload
});

const receiveTransactionErrors = ({ responseJSON }) => ({
  type: RECEIVE_TRANSACTION_ERRORS,
  messages: responseJSON
});

export const fetchAllTransactions = () => dispatch => {
  return TransactionAPIUtil.fetchAllTransactions()
    .then(
      payload => dispatch(receiveAllTransactions(payload)),
    );
};

export const createTransaction = transaction => dispatch => {
  return TransactionAPIUtil.createTransaction(transaction)
    .then(
      payload => dispatch(receiveSingleTransaction(payload)),
      errors => {
        dispatch(receiveTransactionErrors(errors));
      });
};