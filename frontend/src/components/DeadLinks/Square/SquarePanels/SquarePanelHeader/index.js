/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// local files
import "./SquarePanelHeader.css"
import squareLogo from "../../../../../images/Square/square-logo.png"
import squareMascot from "../../../../../images/Square/square-mascot.png"

/******************************* COMPONENT *******************************/
function SquarePanelHeader() {


    /****************** access store *******************/
    const user = useSelector(state => state.session.user)

    let buttons
    if (user && user.id) {
        buttons = (
            <></>
            )
    } else {
        buttons = (
            <>
                <button id="Square-session-button">
                    <NavLink exact to="/login" onClick={(e) => window.scrollTo(0,0)}>Sign in</NavLink>
                </button>
                <button id="Square-session-button">
                    <NavLink exact to="/signup" onClick={(e) => window.scrollTo(0,0)}>Create account</NavLink>
                </button>
            </>
        )
    }

  /**************** render component *****************/
  return (
      <div id="SquarePanelHeader-component">

        <div className="SquarePanelHeader-navbar-container">
            <div>
                <img src={squareLogo} alt="Square logo" id="SquarePanelHeader-logo"></img>
            </div>
            <div className="SquarePanelHeader-navbar-buttons-container">
                <div>About Square</div>
            </div>
        </div>

        <div className="SquarePanelHeader-CTA-container">
            <div className="SquarePanelHeader-CTA-container" style={{maxWidth:'1250px'}}>

                <div className="SquarePanelHeader-CTA-container-left">
                    <span>Meet Market's rewards program</span>
                    <h1>Join Market Square™ to get perks, deals & a whole lot more every time you shop</h1>
                    <div className="SquarePanelHeader-CTA-buttons-container">
                        {buttons}
                    </div>
                </div>

                <div className="SquarePanelHeader-CTA-container-right">
                    <img src={squareMascot} alt="Square Mascot" id="square-mascot"></img>
                </div>

            </div>
        </div>

      </div>
  )
}


/******************************** EXPORTS ********************************/
export default SquarePanelHeader
