import React, { useEffect, useState, useCallback } from 'react';
import { Table, Pagination, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import LocalStorage from '../helper/LocalStorage';
import Constant from '../helper/Constant';
import API from '../helper/Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { Parser } from 'json2csv';
import FileSaver from 'file-saver';

function Transaction() {
  const history = useHistory();
  const [transactions, setTransactions] = useState([]);
  const [reqCall, setReqCall] = useState({ page: 1, limit: 5, walletID: null, sortBy : 'createdAt:desc' });
  const [pagination, setPagination] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  async function fetchTransactionData(data) {
    try {
      const walletDetails = await API.get(`/transactions?walletId=${data.walletID}&page=${data.page}&limit=${data.limit}&sortBy=${data.sortBy}`);
      setTransactions(walletDetails.data.results);
      setTotal(walletDetails.data.totalResults);
      return walletDetails.data.results;
    } catch (error) {
      toast.error('Internal Server, Please try again');
    }
  }
  useEffect(() => {
    const walletID = LocalStorage.getWalletId();
    if (walletID) {
      setReqCall({ ...reqCall, walletID });
      fetchTransactionData({ ...reqCall, walletID });
    } else {
      history.push('/setup');
    }
  }, []);

  const changePage = useCallback(
    (data) => {
      setPage(data);
      setReqCall({ ...reqCall, page: data });
      fetchTransactionData({ ...reqCall, page: data });
    },
    [reqCall]
  );

  useEffect(() => {
    const items = [];
    for (let number = 1; number <= Math.round(total / 5); number++) {
      items.push(
        <Pagination.Item key={number} active={number === page} onClick={() => changePage(number)}>
          {number}
        </Pagination.Item>
      );
    }
    setPagination(items);
  }, [total, page, changePage]);
  
  const newTransaction = () => {
    history.push('/add');
  };
  const sortTransaction = (data) => {
    let sort = 'desc'
    if(`${reqCall.sortBy}`.split(':')[1] === 'desc'){
      sort = 'asc'
    }
    setPage(1);
    setReqCall({ ...reqCall,page : 1, sortBy: `${data}:${sort}` });
    fetchTransactionData({ ...reqCall,page : 1, sortBy: `${data}:${sort}` });
  };

  const downloadTransactions = async() => {  
    const fields = [{
      label: 'Transaction ID',
      value: '_id'
    },
    {
      label: 'Type',
      value: 'type'
    },
    {
      label: 'Description',
      value: 'description'
    },
    {
      label: 'Amount',
      value: 'amount'
    },
    {
      label: 'Balance',
      value: 'balance'
    },
    {
      label: 'Wallet ID',
      value: 'walletId'
    },
    {
      label: 'Created Date',
      value: 'createdAt'
    }];
    const transactions = await fetchTransactionData({ ...reqCall, page : 1,limit: total });
    const transactionData = transactions.map(transaction => {
      transaction.createdAt = new Date(transaction.date).toLocaleString();
      return transaction;
    })
    const json2csv = new Parser({fields});
    const csv = json2csv.parse(transactionData);
    const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    FileSaver.saveAs(csvData, 'transactions.csv');
  }
  return (
    <div className="center">
      <h3 className="text-center mb-5">Wallet Transactions</h3>
        <Button onClick={newTransaction}>Add New Transaction</Button>
        {Array.isArray(transactions) && transactions.length && <Button style={{float: 'right'}} onClick={downloadTransactions}>Download Transactions</Button>}
      {Array.isArray(transactions) && transactions.length ? (
        <div>
          <Table responsive>
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th onClick={() => sortTransaction('amount')}>Amount <FontAwesomeIcon icon={faSort} /></th>
                <th>Type</th>
                <th>Balance</th>
                <th>Description</th>
                <th onClick={() => sortTransaction('date')}>Created Date <FontAwesomeIcon icon={faSort} /></th>
              </tr>
            </thead>
            <tbody>
              {transactions &&
                transactions.length &&
                transactions.map((transaction) => (
                  <tr key={transaction._id}>
                    <td>{transaction._id}</td>
                    <td>{Constant.currencyFormat(transaction.amount)}</td>
                    <td>
                      {transaction.type === 'CREDIT' ? (
                        <span className="text-success">{transaction.type}</span>
                      ) : (
                        <span className="text-danger">{transaction.type}</span>
                      )}
                    </td>
                    <td>{Constant.currencyFormat(transaction.balance)}</td>
                    <td>{transaction.description ? transaction.description : '-'}</td>
                    <td>{new Date(transaction.date).toLocaleString()}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <div className="float-right">
            <Pagination>{pagination}</Pagination>
          </div>
        </div>
      ) : (
        <div> No Transaction Found.</div>
      )}
    </div>
  );
}

export default Transaction;
