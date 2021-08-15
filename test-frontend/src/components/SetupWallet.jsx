import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import API from '../helper/Api';
import LocalStorage from '../helper/LocalStorage';
function SetupWallet() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try{
        const apiRes = await API.post('/setup',{name : data.username, balance: data.balance ? data.balance : 0})
        if(apiRes?.data?._id){
            LocalStorage.setWalletId(apiRes.data._id);
            history.push("/");
        } else {
          toast.error('Internal Server Error');
        }
    }
    catch(error){
      toast.error('Internal Server Error');
    }
  };

  return (
    <div className="center">
    <h3 className="text-center">Setup New Wallet</h3>
    <Form>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Enter username"
          name="username"
          {...register('username', { required: true, maxLength: 20, minLength: 3 })}
        />
        {errors?.username && (
          <Form.Text className="text-danger">{`* Username is required and need to be 3-20 characters long.`}</Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="balance">
        <Form.Label>Initial Balance</Form.Label>
        <Form.Control
          type="number"
          size="lg"
          name="balance"
          placeholder="Enter initial balance"
          {...register('balance')}
        />{' '}
      </Form.Group>
      <Button variant="primary" size="lg" onClick={handleSubmit(onSubmit)} type="submit">
        Submit
      </Button>
    </Form>
  </div>
  );
}

export default SetupWallet;
