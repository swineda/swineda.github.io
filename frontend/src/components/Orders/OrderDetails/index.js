/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useParams } from "react-router-dom";
import { convertDate, convertExactDate, convertInformalDate, normalizeArray } from "../../../component-resources";
// local files
import { thunkReadAllUserOrders } from "../../../store/ordersReducer";
import "./OrderDetails.css"

/******************************* COMPONENT *******************************/
function OrderDetails() {

  // use get all orders API route and filter using orderId param no.

  /****************** access store *******************/
  const user = useSelector(state => state.session.user);
  const ordersState = useSelector(state => state.orders)

  /************ key into pertinent values ************/
  const { orderId } = useParams()
  const order = ordersState.allOrdersByUser[parseInt(orderId)]


  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadAllUserOrders());
  }, [dispatch])


  /**************** render component *****************/
  if (user && user.id == null) return <Redirect to="/"></Redirect>

  return (
    <div className="OrderDetails-page-wrapper-container">

      <div id="OrderDetails-component">

      <div className="OrderDetails-head-container">

        <div className="OrderDetails-directory-container">
          <NavLink
            exact to={'/account/orders'}
            id="OrderDetails-Account-redirect-button"
            onClick={(e) => window.scrollTo(0,0)}
          >
            Orders
          </NavLink>
          <p>/</p>
          <p>{order && order.id}</p>
        </div>

        <div className="OrderDetails-title-container">
          <div className="OrderDetails-title">Order Details</div>
        </div>

        <div className="OrderDetails-info-container">
          <div className="OrderDetails-info-order-number">{order && order.id}</div>
          <div className="OrderDetails-info-order-date">Placed on {order && convertExactDate(order.createdAt)}</div>
        </div>

      </div>

      <div className="OrderDetails-body-container">

        <div className='OrderDetails-card-container'>

              <div className='OrderDetails-card-title-container'>

                <div className="OrderDetails-card-status-container">
                  <i class="fa-solid fa-check"></i>
                </div>

                <div className="OrderDetails-card-delivery-log-container">
                  <div>{order && order.status} {order && convertInformalDate(order.createdAt)}</div>
                  <p>Originally scheduled for {order && convertInformalDate(order.createdAt)}</p>
                </div>

              </div>


              {order && Object.values(order.Products).map(product => (
                <div className='OrderDetails-product-purchase-list-container'>

                  <NavLink
                    exact
                    to={`/departments/${product.departmentId}/products/${product.id}`}
                    className='OrderDetails-product-purchase-list-item-container'
                    onClick={(e) => window.scrollTo(0,0)}
                    >

                      <div  className="OrderDetails-product-purchase-list-thumbnail-container">
                        <img src={product.previewImage} className="OrderDetails-product-purchase-list-thumbnail"></img>
                      </div>

                      <div className="OrderDetails-product-list-itemization-container">
                        <div className="OrderDetails-product-list-itemization-name">{product.name}</div>
                        <div className="OrderDetails-product-list-itemization-qty">Qty 1</div>
                        <div className="OrderDetails-product-list-itemization-price">${product.price}</div>
                      </div>

                  </NavLink>
                </div>
              ))}
        </div>


        <div className="OrderDetails-total-container">

          <div className="OrderDetails-total-at-a-glance">
            <div>${order && order.total}</div>
          </div>

          <div className="OrderDetails-subtotal-breakdown">
            <div className="OrderDetails-subtotal-item">
              <div>Subtotal</div>
              <div id="OrderDetails-subtotal-amount">${order && order.total}</div>
            </div>

            <div className="OrderDetails-subtotal-item">
              <div>Shipping</div>
              <div>Free</div>
            </div>

            <div className="OrderDetails-subtotal-item" id="OrderDetails-subtotal-tax-item">
              <div>Tax</div>
              <div>$0.00</div>
            </div>

            <div className="OrderDetails-total-grandtotal">
              <div>Total</div>
              <div>${order && order.total}</div>
            </div>
          </div>

        </div>

      </div>

      </div>
    </div>
  )
}


/******************************** EXPORTS ********************************/
export default OrderDetails
