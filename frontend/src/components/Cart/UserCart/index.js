/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Redirect, useParams, useHistory } from "react-router-dom";
// local files
import cartReducer, { thunkReadCart, thunkRemoveSingleProductFromCart } from "../../../store/cartReducer";
import RemoveFromCart from "../RemoveFromCart";
import emptyCartImage from "../../../images/branding/market-empty-cart.png";
import "./UserCart.css"
import CartFavorites from "../../Favorites/CartFavorites";
import GrandTotal from "../../../abstracted-structures/GrandTotal";

/******************************* COMPONENT *******************************/
function UserCart() {

    // When updating qty:
    // - check if delta is > or <
    // - dispatch add or remove (respectively)
    //   - by however many delta

  /****************** access store *******************/
  const user = useSelector(state => state.session.user);
  const cart = useSelector(state => state.cart.allProductsByUser)
  const products = Object.values(cart.Products)
  const subtotal = cart.subtotal

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadCart());
  }, [dispatch, cart])

  useEffect(() => {
    dispatch(thunkReadCart());
}, [user])

  /***************** handle events *******************/
  const history = useHistory();

  /************* conditional components **************/
  let displayCart

  if (products.length > 0) {

    displayCart = (
      <>
          <div className="Cart-head-container">
            <div className="Cart-title">Cart</div>
            <div className="Cart-details-container">
              <div>${cart && cart.subtotal} subtotal</div>
              <div>●</div>
              <div>{products.length} item{products.length === 1 ? '' : 's'}</div>
            </div>
          </div>



          <div className='Cart-card-container'>

            <div className='Cart-card-title-container'>
                <div id="Cart-title-shipping">Shipping</div>
                <div id="Cart-title-total">{products.length} item{products.length === 1 ? '' : 's'}</div>
            </div>

            <div className="Cart-list-container">
              {products && products.map(product => (
                <div className='Cart-list-item-container'>

                  <div className='Cart-list-item-container-left'>

                    <div className='Cart-list-item-thumbnail-container'>
                      <NavLink exact to={`/departments/${product.departmentId}/products/${product.productId}`}>
                          <img src={product.previewImage} className="Cart-list-item-thumbnail"></img>
                      </NavLink>
                    </div>

                    <div className="Cart-list-item-itemization-container">
                      <div>
                        <NavLink exact to={`/departments/${product.departmentId}/products/${product.productId}`} id="Cart-product-list-itemization-name">
                          <div id="Cart-product-list-itemization-name">{product.name}</div>
                        </NavLink>
                      </div>

                      <div className="Cart-product-list-item-qty">Qty 1</div>
                    </div>

                  </div>

                  <div className='Cart-list-item-container-right'>
                    <div className="Cart-product-list-price">${(product.price).toFixed(2)}</div>
                    <div className="Cart-product-remove-item-button-container">
                      <RemoveFromCart
                        cartId={product.cartId}
                        text={<i class="fa-solid fa-xmark"></i>}
                        cssSelector={'UserCart-RemoveFromCart-button'}
                      />
                      </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
    </>
    )

  } else {
    displayCart = (
      <div className="empty-cart-page-container">
        <div className='Cart-card-container'>
          <div className="empty-cart-container">

          <div id="empty-cart-title">Your cart is empty</div>

          <div id="empty-cart-subtitle">Check out what we're featuring now!</div>
          <div>
            <button
              onClick={() => history.push('/')}
              id="empty-cart-continue-shopping-button"
              >
                Go to homepage
            </button>
            </div>
          <img src={emptyCartImage} id="empty-cart-image"></img>

          </div>
        </div>
      </div>
    )
  }



  /**************** render component *****************/
  // if (user == null) return <Redirect to="/"></Redirect>

  return (
    <div className="page-wrapper-container">
      <div id="Cart-component">


        <div className="Cart-left-panel">
          <div className="cart-container">
            {displayCart}
          </div>
          <CartFavorites />
        </div>


        <div className={products.length > 0 ? "Cart-right-panel": "Cart-right-panel-hidden"}>
          <div className="Cart-total-container">
              <GrandTotal products={products} subtotal={subtotal} />
          </div>

          <div className="Cart-checkout-button-container">
            <NavLink exact to={`/checkout`}>
              <button
              className='Cart-checkout-button'
              id='Cart-checkout-button'
              >
                Check out
              </button>
            </NavLink>
          </div>
        </div>


      </div>
    </div>
  )
}


/******************************** EXPORTS ********************************/
export default UserCart
