/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useParams } from "react-router-dom";
import { convertExactDate, normalizeArray } from "../../../component-resources";
// local files
import "./UserOrders.css"
import { thunkReadAllUserOrders } from "../../../store/ordersReducer";
import noOrdersIcon from "../../../images/Account/account-no-orders.png";


/******************************* COMPONENT *******************************/
function UserOrders() {

  /****************** access store *******************/
  const user = useSelector(state => state.session.user);
  const ordersState = useSelector(state => state.orders)

  /************ key into pertinent values ************/
  const orders = Object.values(ordersState.allOrdersByUser)

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadAllUserOrders());
  }, [dispatch])

  /************* conditional components **************/
  let ordersCard;

  if (orders && orders.length) {
    ordersCard = (
      <>
        {orders && orders.map((order) => {
          return (
            <div className='UserOrders-card-container'>
              <div className='UserOrders-card-title-container'>

                <div>{order && convertExactDate(order.createdAt)}</div>
                  <NavLink
                    exact
                    to={`/orders/${order.id}`}
                    id='UserOrders-card-title-redirect'
                    onClick={(e) => window.scrollTo(0,0)}
                  >
                    View order
                  </NavLink>
                </div>

                <div className='UserOrders-card-details-container'>
                  <p>${order.total}</p>
                  <p>Order: {order.id}</p>
                  <div>
                    <i class="fa-solid fa-check"></i>
                    {order.status}
                  </div>
                </div>

              <div className="UserOrders-card-thumbnail-container">
                {order && Object.values(order.Products).map(product => {
                  return (
                  <NavLink
                    exact to={`/departments/${product.departmentId}/products/${product.id}`}
                    onClick={(e) => window.scrollTo(0,0)}
                  >
                      <img src={product.previewImage} className="UserOrders-card-thumbnail"></img>
                  </NavLink>
                  )
                })}
              </div>
          </div>
          )
        })}
      </>
    )

  } else {
    ordersCard = (
      <>
        <div className='AccountPage-empty-card'>

          <div className='AccountPage-empty-card-image-container'>
            <img src={noOrdersIcon} alt="No orders icon" className='AccountPage-empty-card-image'></img>
          </div>

          <h2>No orders found</h2>

          <p>Orders will appear here after you’ve made a purchase.</p>
        </div>
      </>
    )
  }


  /**************** render component *****************/
  if (user && !user.id) return <Redirect to="/"></Redirect>

  return (
    <div className="page-wrapper-container">

      <div id="UserOrders-component">
          {/* <NavBarAccount user={user} /> */}

          <div className="UserOrders-directory-container">
              <NavLink
                exact to={'/account'}
                id="UserOrders-Account-redirect-button"
                onClick={(e) => window.scrollTo(0,0)}
                >
                  <i class="fa-solid fa-chevron-left"></i>
                  Account
              </NavLink>
          </div>

          <div className="UserOrders-title-container">
            <div className="UserOrders-title">Order history</div>
            <div className="UserOrders-title-location">Online</div>
          </div>

          <div className="UserOrders-cards-list-container">
            {ordersCard}
          </div>
      </div>
    </div>
  )
}


/******************************** EXPORTS ********************************/
export default UserOrders
