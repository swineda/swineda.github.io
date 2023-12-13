/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// local files
import whiteLogo from "../../../../images/branding/logo/market-logo-white.png";
import { thunkReadSingleDepartmentDetails } from "../../../../store/departmentsReducer";
import './LandingAdvertPanelMain.css'


/******************************* COMPONENT *******************************/
function LandingAdvertPanelMain() {

  /****************** access store *******************/
  const departmentsState = useSelector(state => state.departments)
  const department = useSelector(state => state.departments.singleDepartmentDetails)

  /************ key into pertinent values ************/
  //   const department = departmentsState.singleDepartmentDetails;
  const products = Object.values(department.Products)


  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadSingleDepartmentDetails(5));
  }, [dispatch])


  /**************** render component *****************/
  return (

      <div id="LandingAdvertPanelMain-component">

        <div className="LandingAdvertPanelMain-title-container">
            <div className="LandingAdvertPanelMain-title">Holiday <span style={{color:'#fff'}}><img src={whiteLogo} id="landing-logo"></img>deals</span></div>
            <div className="LandingAdvertPanelMain-subtitle">Score incredible deals on holiday must-haves</div>
            {/* <div><button>Get the deals now</button></div> */}
        </div>

        <div className="LandingAdvertPanelMain-panel">
            <div className="main-panel-scroll-title">
                <p>Holiday</p>
                <p>Top Picks</p>
            </div>

            <div className="main-panel-list">
            {products && products.map((product) => (

                <div className="main-panel-list-item-container">
                    <NavLink
                    exact
                    to={`/departments/5/products/${product.id}`}
                    onClick={(e) => window.scrollTo(0,0)}
                    >
                        <img
                            src={product.previewImage}
                            id="LandingAdvertPanelMain-thumbnail">
                        </img>
                        <div id="main-panel-list-item-price">${product.price}</div>
                        <div id="main-panel-list-item-name-container">
                            <div id="main-panel-list-item-name">{product.name}</div>
                        </div>
                    </NavLink>
                </div>
            ))}
            </div>

        </div>



      </div>
  )
}


/******************************** EXPORTS ********************************/
export default LandingAdvertPanelMain
