import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../assets/css/style.css';
import '../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useForm } from 'react-hook-form';
import { Spinner } from 'reactstrap';
import { auth } from '../utils/api-method';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCurrency } from '../redux-store/features/currency/currencySlice';
import { isSuccess,isError } from '../redux-store/features/notification/notificationSlice';
import { hideNotificationBar } from '../utils/helper-method';
import { currencies } from '../utils/api-method';
import Loader from './Loader';
function SignUpModal({ handleClose }) {
  const [show, setShow] = useState(true); // State to control the sign-up modal
  const [login, setLogin] = useState(false); // State to handle login process
  const [isLoader, setLoader] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { items, isLoading } = useSelector(state => state.currency);
  const dispatch = useDispatch();

  
  const onSubmit = async (data) => {
    setLoader(true);
    try
    {
        const response=await auth.signUp({body:data})
        if(response){
            console.log("Data Added")
            dispatch(isSuccess({message:"Data Added"}))
          }
    }
    catch(e){
      dispatch(
        isError({ message: e.response?.data?.error?.messages[0] })
      );
    }
    
    finally {
      setLoader(false);
      hideNotificationBar(dispatch);
    }


    try {
      // Registration logic here
      // Example: await axios.post('/api/register', data);
    } catch (error) {
      console.error(error);
      setLoader(false);
      // Handle registration error (e.g., show an error message)
    }
  };

  const handleLogin = () => {
    setLogin(true); // Set login state to true
    setShow(false); // Close the sign-up modal
  };

  const closeLogin = () => {
    setLogin(false); // Reset login state
    setShow(false); // Close the sign-up modal
  };

  return (
    <>
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to Evelr</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                id="FullName"
                placeholder="Full Name"
                {...register("full_name", { required: true })}
              />
              {errors.fullName && <span className="text-danger">Full Name is required</span>}
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="form-control"
                id="Email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-danger">Email is required</span>}
            </div>
            <div className="mb-3">
              <div className="col-12 mt-4">
                <div className="select-wrapper">
                  <select
                    id="currencySelect"
                    className="form-select select-input"
                    {...register("currency_id", { required: true })}
                  >
                    <option selected disabled>Currency</option>
                    {isLoading?(<Loader isLoading={isLoading}/>):
                    (items.currencies.length > 0 &&
                      items.currencies.map((data) => (
                        <option key={data.id} value={data.id}>{data.name}</option>
                      ))
                    )
                  }
                  </select>
                  <span className="custom-arrow"></span>
                </div>
              </div>
              {errors.currency && <span className="text-danger">Currency is required</span>}
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control"
                id="Password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-danger">Password is required</span>}
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control"
                id="ReEnterPassword"
                placeholder="Re-Enter Password"
                {...register("reEnterPassword", { required: true })}
              />
              {errors.reEnterPassword && <span className="text-danger">Re-enter Password is required</span>}
            </div>
            <div className="mb-4">
              <div className="d-flex flex-row">
                <button
                  type="button"
                  className="btns-signup host-btn active"
                  onClick={() => console.log("Be a Host clicked")}
                >
                  Be a Host
                </button>
                <button
                  type="button"
                  className="btns-signup guest-btn"
                  onClick={() => console.log("Be a Guest clicked")}
                >
                  Be a Guest
                </button>
              </div>
            </div>
            <div className="mb-3">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoader}
              >
                {isLoader ? (
                  <Spinner
                    style={{ height: "1.2rem", width: "1.2rem" }}
                  />
                ) : "Sign Up"}
              </button>
            </div>
            <div className="d-flex justify-content-center text-center mb-2">
              <span className="privacy-policy">
                By continuing I accept the
                <a href="#"> Terms & Conditions</a><br />
                and <a href="#">Privacy Policy</a>
              </span>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      

      {/* Conditionally render Login_TwoStepModal based on login state */}
      {/* {login && <Login_TwoStepModal handleClose={handleClose} />} */}
    </>
  );
}

export default SignUpModal;
