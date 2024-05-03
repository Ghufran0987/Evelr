// import React, { useState } from 'react';
// import { Modal, Button } from 'react-bootstrap';
// import '../assets/css/style.css';
// import '../assets/css/global.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Login_TwoStepModal from './Login_TwoStepModal';

// function LoginModal({ handleClose }) {
//   const [show, setShow] = useState(true); // State to control the login modal
//   const [login, setLogin] = useState(false); // State to handle login process

//   const handleLogin = () => {
//     setLogin(true); // Set login state to true
//     setShow(false); // Close the login modal
//   };

//   const closeLogin = () => {
//     setLogin(false); // Reset login state
//     setShow(false); // Close the login modal
//   };

//   return (
//     <>
//       <Modal show={show} onHide={handleClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Welcome Back</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form>
//             <div className="mb-4">
//               <input type="email" className="form-control" id="Email" placeholder="Email/Phone Number" />
//             </div>
//             <div className="mb-3">
//               <input type="password" className="form-control" id="Password" placeholder="Password" />
//             </div>
//             <div className="mb-4">
//               <a className="forget-pass" href="#">Forget Password?</a>
//             </div>
//             <div className="mb-3">
//               <button type="button" className="btn btn-primary" onClick={handleLogin}>
//                 Log In
//               </button>
//             </div>
//             <div className="d-flex justify-content-center text-center">
//               <span className="create-account">Don’t Have an Account? <a href="">Create Now</a></span>
//             </div>
//           </form>
//         </Modal.Body>
//       </Modal>

//       {/* Conditionally render Login_TwoStepModal based on login state */}
//       {login && <Login_TwoStepModal handleClose={handleClose} />}
//     </>
//   );
// }

// export default LoginModal;



import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Login_TwoStepModal from './Login_TwoStepModal';
import { useForm } from 'react-hook-form';
import { auth } from '../utils/api-method';
import {useDispatch,useSelector} from  'react-redux'
import { logIn } from '../redux-store/features/authSlice';
import {Spinner} from 'reactstrap'
import { isError } from '../redux-store/features/notification/notificationSlice';
import { hideNotificationBar } from '../utils/helper-method';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/style.css';
import '../assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function LoginModal({ handleClose, handleLogin }) {
  const [show, setShow] = useState(true); // State to control the login modal
  const [isLoader,setLoader]=useState(false)
  const [login, setLogin] = useState(false); // State to handle login process
  const {register,handleSubmit,formState:{errors}}=useForm();
  const dispatch=useDispatch();
  
  const onSubmit=async (data)=>{
    try{
      setLoader(true)
      const response=await auth.logIn({body:data})
      if(response){
        const data=response.data.response.data.user
        dispatch(logIn(data))
        setShow(false)
        handleLogin();
      }
    }
    catch(e){
      dispatch(
        isError({ message:e.response?.data?.error?.messages[0]})
      )
      
    }
    finally{
      setLoader(false)
      hideNotificationBar(dispatch)
    }
    
  }
  
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Welcome Back</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}> 
            <div className="mb-4">
              <input type="email" className="form-control"  placeholder="Email/Phone Number" {...register("email",{required:true})}/>
              {errors.email &&<div className="alert alert-danger" role="alert">Email is required</div>}
            </div>
            <div className="mb-3">
              <input type="password" className="form-control"  placeholder="Password" {...register("password",{required:true})} />
              {errors.password && <div className="alert alert-danger" role="alert">Password is required</div>}
            </div>
            <div className="mb-4">
              <a className="forget-pass" href="#">Forget Password?</a>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary" >
                {isLoader?(
                  <Spinner
                  style={{
                    height: "1.2rem",
                    width: "1.2rem"
                  }}
                />

                ):"Log In"}
              </button>
            </div>
            <div className="d-flex justify-content-center text-center">
              <span className="create-account">Don’t Have an Account? <a href="">Create Now</a></span>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      {/* Conditionally render Login_TwoStepModal based on login state */}
      {login && <Login_TwoStepModal handleClose={handleClose} />}
    </>
  );
}

export default LoginModal;




