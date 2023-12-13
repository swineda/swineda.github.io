/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// local files
import './LandingAdvertPanelSubLeft.css'
import airpods from '../../../../images/Landing/airpods-pro.png'


/******************************* COMPONENT *******************************/
function LandingAdvertPanelSubLeft() {


  /**************** render component *****************/
  return (

      <div id="LandingAdvertPanelSubLeft-component">

        <div className="promo-text-container">
            <div id='up-to'>Up to</div>

            <div className="promo-text-sub-container">
                <div>50</div>
                <div id="promo-text-sub-sub-container">
                    <div>%</div>
                    <div>off</div>
                </div>
            </div>

        </div>

        <div className="promo-image-container">
            <NavLink
                exact to="/departments/5/products/51"
                onClick={(e) => window.scrollTo(0,0)}
            >
                <img
                    src={airpods}
                    id="promo-image"
                >
                </img>
            </NavLink>
        </div>


      </div>
  )
}


/******************************** EXPORTS ********************************/
export default LandingAdvertPanelSubLeft
