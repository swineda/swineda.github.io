/******************************** IMPORTS ********************************/
// libraries
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// local files
import ProfileButton from '../ProfileButton';
import CategoriesButton from '../CategoriesButton';
import logo from "../../../images/branding/logo/market-logo.png";
import './NavBarSecondary.css';
import { thunkReadAllDepartments } from '../../../store/departmentsReducer';
import SearchBar from '../../Search/SearchBar';


/******************************* COMPONENT *******************************/
function NavBarSecondary({ isLoaded }){

  /****************** access store *******************/
  const sessionUser = useSelector(state => state.session.user);
  // const departmentsState = useSelector(state => state.departments)

  // /************ reducer/API communication ************/
  // const dispatch = useDispatch();

  // useEffect(()=>{
  //     dispatch(thunkReadAllDepartments())
  // }, [dispatch, departmentsState])


  /**************** render component *****************/
  return (

    <div className="NavBarAccount-wrapper-container">
      <div id='NavBarAccount-component'>


        <div className='NavBarAccount-left'>
            <NavLink exact to="/" onClick={(e) => window.scrollTo(0,0)}><img src={logo} id="navbar-logo"></img></NavLink>
            <CategoriesButton />
            {/* <CategoriesButton allDepartments={Object.values(departmentsState.allDepartments)} /> */}
        </div>

        <div  className='NavBarAccount-middle'>
          <SearchBar />
        </div>


        <div className='NavBarAccount-right'>
          <ProfileButton user={sessionUser} />
          {/* <ProfileButton /> */}


          <NavLink exact to="/cart" onClick={(e) => window.scrollTo(0,0)}>
            <div id="NavBarAccount-cart-button-container">
              <i class="fa-solid fa-cart-shopping" id='NavBarAccount-cart-button'></i>
            </div>
          </NavLink>
        </div>

        {/* {isLoaded && sessionLinks} */}

      </div>
    </div>
  );
}


/******************************** EXPORTS ********************************/
export default NavBarSecondary;
