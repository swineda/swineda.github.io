/******************************** IMPORTS ********************************/
// libraries
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { thunkReadAllDepartments } from "../../../store/departmentsReducer";
// local files
import * as sessionActions from '../../../store/sessionReducer';
import './CategoriesButton.css'

/******************************* COMPONENT *******************************/
function CategoriesButton() {

    /****************** access store *******************/
    const departmentsState = useSelector(state => state.departments)

    /************ key into pertinent values ************/
    const allDepartments = Object.values(departmentsState.allDepartments);

    /************ reducer/API communication ************/
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(thunkReadAllDepartments())
    }, [dispatch])

    /****************** manage state *******************/
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    /***************** handle events *******************/
    // toggle menu
    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
        setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

  /************* conditional components **************/
  let menuOptions = (
    <>
        <div className="categories-menu-side-panel-title">
            <p>All Categories</p>
        </div>

        {/* <div className="categories-menu-side-panel-list-container"> */}
        {allDepartments && allDepartments.map((department) => (
          <div className="categories-menu-side-panel-list-item-container">
              <NavLink
                exact
                to={`/departments/${department.id}`}
                className="categories-menu-side-panel-list-item"
                onClick={(e) => window.scrollTo(0,0)}
                >
                <div>{department.name}</div>
              </NavLink>
            </div>
        ))}
        {/* </div> */}
    </>
  )


  /***************** handle events *******************/




  /**************** render component *****************/
  return (
    <>
      <button onClick={openMenu} className='CategoriesButton-container'>
        Categories
      </button>

      {showMenu && (
        <div className="categories-menu-side-panel-container">
          {menuOptions}
        </div>
      )}
    </>
  );
}


/******************************** EXPORTS ********************************/
export default CategoriesButton;
