/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Redirect, useHistory, useParams } from "react-router-dom";
// local files
import { thunkReadCart } from "../../store/cartReducer";
import { thunkCreateSingleOrder, thunkReadAllUserOrders } from "../../store/ordersReducer";
import boxImage from "../../images/branding/market-village/market-village-box.png"
import redCardImage from "../../images/branding/market-village/market-village-redcard.png"
import "./Checkout.css"
import { calculateGrandTotal, calculateRedCardDiscount } from "../../component-resources";
import GrandTotal from "../../abstracted-structures/GrandTotal";
import UpdateFavorite from "../Favorites/UpdateFavorite";
import { thunkReadFavorites } from "../../store/favoritesReducer";

/******************************* COMPONENT *******************************/
function Checkout() {

  /****************** access store *******************/
  const cartState = useSelector(state => state.cart.allProductsByUser)
  const user = useSelector(state => state.session.user)
  console.log("user", user)


  /************ key into pertinent values ************/
  const products = Object.values(cartState.Products)
  const subtotal = cartState.subtotal
  const discount = calculateRedCardDiscount(cartState.subtotal)
  const total = calculateGrandTotal(subtotal, discount)


  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadCart());
  }, [dispatch])


  /***************** handle events *******************/
  const history = useHistory()
  const placeOrder = async (e) => {

    e.preventDefault();

    let errors = [];

    let orderData = {
      total: total,
      products: products,
    }

    const newOrder = await dispatch(thunkCreateSingleOrder(orderData)).catch(
      async (res) => {

          const data = await res.json();

          if (data && data.errors) {
              data.errors.forEach(message => errors.push(message));
              // setValidationErrors(errors);
          }
      }
    )

    if (newOrder) {
        history.push(`/order-confirmation/${newOrder.id}`)
    }
  }


  /**************** render component *****************/
  // if (user && user.id == null) return <Redirect to='/cart'></Redirect>
  if (products && products.length < 1) return <Redirect to='/cart'></Redirect>

  return (
      <div className="Checkout-page-wrapper-container">
        <div id="Checkout-component">

          <div className="Checkout-left">
            <div className="Checkout-product-list-card">

              <div className="Checkout-product-list-header-container">
                <div className="Checkout-product-list-text-container">
                  <i class="fa-solid fa-cart-shopping" id="Checkout-cart-icon"></i>
                  <div>
                    <div className="Checkout-product-list-header">Cart</div>
                    <div className="Checkout-details-container">
                      <div>${cartState && cartState.subtotal} subtotal</div>
                      <div>●</div>
                      <div>{products.length} item{products.length === 1 ? '' : 's'}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <NavLink exact to={`/cart`} id="Checkout-edit-button">Edit</NavLink>
                </div>
              </div>

              {/* <div className="shipping-ETA-container">
                Arrives by Date
              </div> */}

              <div className="product-list-thumbnail-container">
                {products && products.map((product) => (
                  <>
                    <img src={product.previewImage} className="product-list-thumbnail"></img>
                    {/* <UpdateFavorite productId={product.productId}/> */}
                  </>
                ))}
              </div>
            </div>


            <div className="Checkout-product-list-card">
                <div className="Checkout-product-list-header-container">
                  <div className="Checkout-product-list-text-container" id="shipping-address-card-header">
                    <img src={boxImage} className="card-icon"></img>
                    <div className="Checkout-product-list-header">Shipping address</div>
                  </div>
                </div>

                <div className="product-list-thumbnail-container">
                  <div className="shipping-address">
                    <p>{user.firstName} {user.lastName}</p>
                    <p>180 Geary Street</p>
                    <p>San Francisco, CA 94108</p>
                  </div>
                  <div className="default-address-container">
                    Default address
                  </div>
                </div>
              </div>


              <div className="Checkout-product-list-card">
                <div className="Checkout-product-list-header-container">
                  <div className="Checkout-product-list-text-container" id="shipping-address-card-header">
                    <div className="Checkout-product-list-header">Payment</div>
                  </div>
                </div>

                <div className="product-list-thumbnail-container">
                  <div className="payment-information">
                    <img src={redCardImage} className="redCard-icon"></img>
                    <p>RedCard *5678</p>
                  </div>
                </div>
              </div>

          </div>


          <div className="Checkout-right">
            <div className="Checkout-total-container">

              <div className="Checkout-subtotal-breakdown">

                <GrandTotal products={products} subtotal={subtotal} />

                <div className="payment-confirmation-container">
                  <div>
                    <img src={redCardImage} className="redCard-icon"></img>
                  </div>
                  <div>
                    <p id="payment-confirmation-total">${total}</p>
                    <p id="payment-confirmation-method"> RedCard *5678</p>
                  </div>
                </div>

              </div>

              <div className="Checkout-disclaimer-wrapper">
                <div className="Checkout-disclaimer">
                  <div>
                    By placing an order, you agree to Market's{' '}
                    <span><a href="https://www.target.com/c/terms-conditions/-/N-4sr7l">terms</a></span>
                    {' '}and{' '}
                    <span><a href="https://www.target.com/c/target-privacy-policy/-/N-4sr7p">privacy policy</a></span>
                  </div>
                </div>
              </div>

              <div className="Checkout-checkout-button-container">
                <button
                  onClick={placeOrder}
                  className='Checkout-checkout-button'
                  id='Checkout-checkout-button'
                  >Place your order</button>
              </div>

              <div className="Checkout-disclaimer-wrapper">
                <div className="Checkout-disclaimer">
                  <div>Order confirmation and updates will be emailed to {user && user.email}
                </div>
              </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    )
}


/******************************** EXPORTS ********************************/
export default Checkout
