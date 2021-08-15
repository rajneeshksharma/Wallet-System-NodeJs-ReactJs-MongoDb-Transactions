import React, { useEffect, useState, useCallback } from 'react';
import { Table, Pagination, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import LocalStorage from '../helper/LocalStorage';
import Constant from '../helper/Constant';
import API from '../helper/Api';

function Transaction() {
  const history = useHistory();
  const [transactions, setTransactions] = useState([]);
  const [reqCall, setReqCall] = useState({ page: 1, limit: 5, walletID: null });
  const [pagination, setPagination] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  async function fetchTransactionData(data) {
    try {
      const walletDetails = await API.get(`/transactions?walletId=${data.walletID}&page=${data.page}&limit=${data.limit}&sortBy=${"createdAt:desc"}`);
      setTransactions(walletDetails.data.results);
      setTotal(walletDetails.data.totalResults);
    } catch (error) {
      toast.error('Internal Server Error');
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

  return (
    <div className="center">
      <h3 className="text-center mb-5">Wallet Transactions</h3>
      <div>  <Button onClick={newTransaction}>Add New Transaction</Button> </div>
      {Array.isArray(transactions) && transactions.length ? (
        <div>
          <Table responsive>
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Balance</th>
                <th>Description</th>
                <th>Created Date</th>
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
