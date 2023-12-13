/******************************** IMPORTS ********************************/
// libraries
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { thunkReadSingleProductDetails } from "../../../store/productsReducer";
// local files
import './CartConfirmationModal.css'


/******************************* COMPONENT *******************************/
function CartConfirmationModal({productId, modalFunc}) {

    /****************** access store *******************/
    const user = useSelector(state => state.session.user)
    const product = useSelector(state => state.products.singleProductDetails)

    /************ key into pertinent values ************/
    const images = product.ProductImages

    /************ reducer/API communication ************/
    const dispatch = useDispatch({productId});

    useEffect(() => {
      dispatch(thunkReadSingleProductDetails(productId));
    }, [dispatch])

    /***************** handle events *******************/
    const history = useHistory();

    /************* conditional components **************/
    let displayConfirmationMessage;

    if (user == null) {
      displayConfirmationMessage = (
        <div className="CartConfirm-modal-container">

        <div className="CartConfirm-modal-title-container-no-session">
          <div onClick={(e) => modalFunc(false)}>
              <i class="fa-solid fa-xmark"></i>
          </div>
        </div>

        <div className="CartConfirm-modal-body-container">

          <div className="CartConfirm-modal-no-session-title">
              <p>You must be logged in to shop</p>
          </div>


          <div className="CartConfirm-modal-buttons">

            <div>
              <NavLink exact to={`/login`}>
                  <button
                  className='CartConfirm-button'
                  id='CartConfirm-shopping-button'
                  onClick={(e) => window.scrollTo(0,0)}
                  >
                    Log in
                  </button>
              </NavLink>
          </div>


          <div>
              <NavLink exact to={`/signup`}>
                  <button
                  className='CartConfirm-button'
                  id='CartConfirm-checkout-button'
                  onClick={(e) => window.scrollTo(0,0)}
                  >
                      Create account
                  </button>
              </NavLink>
          </div>

          </div>

        </div>
      </div>
      )
    } else {
      displayConfirmationMessage = (
        <>
          <div className="CartConfirm-modal-container">
            <div className="CartConfirm-modal-title-container" onClick={(e) => modalFunc(false)}>
              <p>Added to Cart</p>
              <div>
                  <i class="fa-solid fa-xmark"></i>
              </div>
            </div>

            <div className="CartConfirm-modal-body-container">

              <div className="CartConfirm-modal-product-details">
                  {images && (
                      <img src={images[0].url} id="CartConfirm-modal-product-thumbnail"></img>
                  )}
                  <p id="CartConfirm-modal-product-name">{product.name}</p>
              </div>

              <div className="CartConfirm-modal-buttons">


              <button
                type="submit"
                className='CartConfirm-button'
                id='CartConfirm-shopping-button'
                onClick={(e) => modalFunc(false)}
                >
                  Continue shopping
                </button>

              <div>
                  <NavLink exact to={`/cart`}>
                      <button
                      className='CartConfirm-button'
                      id='CartConfirm-checkout-button'
                      onClick={(e) => window.scrollTo(0,0)}
                      >
                          View cart & check out
                      </button>
                  </NavLink>
              </div>

              </div>

            </div>
          </div>
        </>
      )
    }


    /**************** render component *****************/
    return (
    <>
    {displayConfirmationMessage}
    </>
  );
}


/******************************** EXPORTS ********************************/
export default CartConfirmationModal;


// ✨
// can also be reused in lieu of NavBarAccount
// this component would require receiving an object of classNames/css selectors
// via props
// to render different styling depending on which component is wrapping it
// IE: if this component appears a modal or inline/same z-index
