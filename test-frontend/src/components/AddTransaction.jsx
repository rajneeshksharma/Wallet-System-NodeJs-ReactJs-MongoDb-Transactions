import React, { useEffect, useState } from 'react';
import { Form, Button, ButtonGroup, ToggleButton } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import API from '../helper/Api';
import LocalStorage from '../helper/LocalStorage';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddTransaction() {
  const history = useHistory();
  const [typeValue, setTypeValue] = useState('CREDIT');
  const [walletID, setWalletID] = useState(null);
  const transactionType = [
    { name: 'Debit', value: 'DEBIT' },
    { name: 'Credit', value: 'CREDIT' },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const walletID = LocalStorage.getWalletId();
    if (!walletID) {
      history.push('/setup');
    } else {
        setWalletID(walletID);
    }
  }, [history]);
  const onSubmit = async (data) => {
    try {
        let apiData = {amount: data.amount, type: typeValue };
        if(data.description){
            apiData.description = data.description;
        }
      const apiRes = await API.post(`/transact/${walletID}`, apiData);
      if (apiRes?.data?._id) {
        LocalStorage.setWalletId(apiRes.data._id);
        history.push('/');
      }else {
        toast.error('Internal Server');
      }
    } catch (error) {
      toast.error('Internal Server, Please try again');
    }
  };
  return (
    <div className="center">
      <h3 className="text-center">Add New Debit/Credit Transaction </h3>
      <p>Wallet ID : {walletID}</p>
      <Form>
        <Form.Group className="mb-3" controlId="amount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            size="lg"
            type="number"
            placeholder="Enter amount"
            name="amount"
            {...register('amount', { required: true, min: 1 })}
          />
          {errors?.amount && (
            <Form.Text className="text-danger">{`* Amount is required and need to be more than 0.`}</Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            name="description"
            placeholder="Enter description"
            {...register('description')}
          />{' '}
        </Form.Group>
        <Form.Group className="mb-3" controlId="type">
        <ButtonGroup>
          {transactionType.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? 'outline-success' : 'outline-danger'}
              name="radio"
              value={radio.value}
              checked={typeValue === radio.value}
              onChange={(e) => setTypeValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        </Form.Group>
        <Button variant="primary" size="lg" onClick={handleSubmit(onSubmit)} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddTransaction;
