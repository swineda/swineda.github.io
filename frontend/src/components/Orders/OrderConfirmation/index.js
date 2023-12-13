/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink, Redirect, useParams } from "react-router-dom";
import { normalizeArray } from "../../../component-resources";
import { thunkReadAllUserOrders } from "../../../store/ordersReducer";
// local files
import "./OrderConfirmation.css"
import thanksImage from "../../../images/Orders/market-order-confirmation-image.png";
import truckImage from "../../../images/branding/market-village/market-village-delivery-truck-2.png";


/******************************* COMPONENT *******************************/
function OrderConfirmation() {

  /****************** access store *******************/
  const user = useSelector(state => state.session.user)
  const allOrders = useSelector(state => state.orders.allOrdersByUser)

  /************ key into pertinent values ************/
  const { orderId } = useParams();
  const newOrder = allOrders[orderId]

  /************ reducer/API communication ************/
  const dispatch = useDispatch();


    useEffect(() => {
      dispatch(thunkReadAllUserOrders());
    }, [dispatch])


  /**************** render component *****************/
    if (user.id != newOrder.userId) return <Redirect to="/"></Redirect>


    return (
      <div className="OrderConfirmation-page-wrapper-container">

        <div id="OrderConfirmation-component">

            <div className="OrderConfirmation-title">
              <img  src={thanksImage} id="thanksImage"></img>
              <h1>Thanks for your order!</h1>
              <p>We’ll send confirma=tions and order updates to <span>{user && user.email}</span></p>
            </div>

            <div className="OrderConfirmation-edit-section">
              <p>Need to make changes? Act fast!</p>
              <span>
                We process orders quickly, so you’ll want to visit your order details page as soon as possible.
              </span>
            </div>

            <div className="OrderConfirmation-new-order-details-section">
              <p>Order# {orderId}</p>
              <div className="product-thumbnail-list-container">
                {newOrder && newOrder.Products.map((product) => (
                  <img src={product.previewImage} id="product-thumbnail"></img>
                ))}
              </div>
            </div>


        </div>

        <div className="OrderConfirmation-redirect-section">

            <div>
              <img src={truckImage} id="village-image"></img>
            </div>

            <div className="OrderConfirmation-redirect-section-title">
              Shipping Details
            </div>

            <div className="OrderConfirmation-redirect-section-recipient-info-container">
              <p>{user.firstName} {user.LastName}</p>
              <p>180 Geary Street</p>
              <p>San Francisco, CA 94108</p>
            </div>

            <button
              className='OrderConfirmation-redirect-button'
              id='OrderConfirmation-redirect-button'
              >
            <NavLink
              exact
              to={'/account/orders'}
              id='OrderConfirmation-redirect-link'
              onClick={(e) => window.scrollTo(0,0)}
              >
              Visit order history
            </NavLink>
            </button>

        </div>

      </div>
    )
}


/******************************** EXPORTS ********************************/
export default OrderConfirmation
