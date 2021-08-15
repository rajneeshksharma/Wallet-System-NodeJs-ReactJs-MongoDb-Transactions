import React, { useState, useEffect } from 'react';
import LocalStorage from '../helper/LocalStorage';
import { useHistory } from 'react-router-dom';
import API from '../helper/Api';
import { Card, ListGroup, ListGroupItem, Button, Row, Col } from 'react-bootstrap';
import Constant from '../helper/Constant';
import { toast } from 'react-toastify';

function Wallet() {
  const history = useHistory();
  const [walletDetails, setWalletDetails] = useState(null);
  useEffect(() => {
    const walletID = LocalStorage.getWalletId();
    async function fetchWalletData() {
      try {
      const walletDetails = await API.get(`/wallet/${walletID}`);
      setWalletDetails(walletDetails.data);
      } catch (error){
        toast.error('Internal Server, Please try again');
        console.error(error);
      }
    }
    if (walletID) {
      fetchWalletData();
    } else {
      history.push('/setup');
    }
  }, [history]);

  const newTransaction = () => {
    history.push('/add');
  };

  return (
    <div className="center">
      <h3 className="text-center mb-5">Wallet Details</h3>
      {walletDetails && (
        <Card body>
          <Row sm={8} md={8}>
            <Col>
              <Card.Title>
                Wallet ID: <span>{walletDetails._id}</span>
              </Card.Title>
            </Col>
            <Col sm={4} md={4}>
              <Button style={{float: 'right'}} onClick={newTransaction}>Add New Transaction</Button>
            </Col>
          </Row>
          <hr />
          <Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <b>Username</b>: {walletDetails.name}
              </ListGroupItem>
              <ListGroupItem>
                <b>Current Balance</b>: {Constant.currencyFormat(walletDetails.balance)}
              </ListGroupItem>
              <ListGroupItem>
                <b>Created Date</b>: {new Date(walletDetails.date).toLocaleString()}
              </ListGroupItem>
            </ListGroup>
          </Card.Text>
        </Card>
      )}
    </div>
  );
}

export default Wallet;
