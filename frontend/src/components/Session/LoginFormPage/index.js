/******************************** IMPORTS ********************************/
// libraries
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Redirect, useHistory } from 'react-router-dom';
// local files
import * as sessionActions from '../../../store/sessionReducer';
import logo from "../../../images/branding/logo/market-logo.png";
import './LoginFormPage.css';


/******************************* COMPONENT *******************************/
function LoginFormPage() {

  /****************** access store *******************/
  const sessionUser = useSelector(state => state.session.user);

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  /****************** manage state *******************/
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);


  /***************** handle events *******************/
  const history = useHistory();

  const handleSubmit = (e) => {

    e.preventDefault();

    let validationErrors = [];
    setErrors([]);

    return dispatch(sessionActions.login({ credential, password })).catch(

      async (res) => {
      const data = await res.json();

      if (data && data.message) {
        validationErrors.push(data.message)
        setErrors(validationErrors); // double check key is .errors vs .message
      }
    });

    // history.push('/');
  }

  const handleSubmitDemoUser = (e) => {

    e.preventDefault();

    dispatch(sessionActions.login({ credential: 'demo@email.com', password: 'demoPassword' }))

    // history.push('/');
  };

  /**************** render component *****************/
  if (sessionUser) return <Redirect exact to="/" />;

  return (
    <div className="page-wrapper-container">
        <div id="LoginFormPage-component">

          <div className='login-or-signup-form-title'>
            <div><img src={logo} id="session-form-logo"></img></div>
            <div>Sign into your Market account</div>
          </div>

            <form onSubmit={handleSubmit} className='login-or-signup-form'>

                <input
                  type="text"
                  placeholder='Email or username'
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                  required
                  minLength={3}
                  className='login-or-signup-form-input-field'
                  >
                </input>

                <input
                  type="password"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={3}
                  className='login-or-signup-form-input-field'
                  >
                </input>

              {errors.map((error, idx) => <p key={idx} className='form-validation-errors'>{error}</p>)}

              <button
              type="submit"
              className='login-or-signup-form-button'
              id='login-or-signup-form-confirm-button'
              >
                Sign In
              </button>

            </form>

          <div id='login-form-DemoUser-button-container'>
            <span onClick={handleSubmitDemoUser} id='login-form-DemoUser-button'>
              Continue as Demo User
            </span>
          </div>

          <div>
            <NavLink exact to={`/signup`}>
              <button
              className='login-or-signup-form-button'
              id='login-or-signup-form-proceed-button'
              onClick={(e) => window.scrollTo(0,0)}
              >
                Create your Market account
              </button>
            </NavLink>
          </div>

          <div className='login-or-signup-form-disclaimer'>
            <div>By signing in, you agree to the following:</div>

            <div>
              <Link
              href='https://www.target.com/c/terms-conditions/-/N-4sr7l'
              id='login-form-disclaimer-link'
              >
              Market terms and conditions
              </Link>
            </div>

            <div>
              <Link
              href='https://www.target.com/c/target-privacy-policy/-/N-4sr7p'
              id='login-form-disclaimer-link'
              >
              Market privacy policy
              </Link>
              </div>
          </div>

          <div className="login-or-signup-form-disclaimer-promotions-container">
            <Link
              href='https://help.target.com/help/subcategoryarticle?childcat=Current+promotions&parentcat=Promotions+%26+Coupons&searchQuery=search+help'
              className='login-or-signup-form-disclaimer'
              id='login-or-signup-form-disclaimer-promotions'
              >
              <span>*See offer details. </span>
              Restrictions apply. Pricing, promotions and availability may vary by location and at Market.com
            </Link>
          </div>

      </div>
    </div>
  );
}


/******************************** EXPORTS ********************************/
export default LoginFormPage;
