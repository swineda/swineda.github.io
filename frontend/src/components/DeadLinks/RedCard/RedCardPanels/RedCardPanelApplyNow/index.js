/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// local files
import "./RedCardPanelApplyNow.css"
import mascot from "../../../../../images/branding/mascot/mascot-1.png"
import squareLogo from "../../../../../images/Square/square-logo.png"
import cardStack from "../../../../../images/RedCard/RedCard-full-stack.png"

/******************************* COMPONENT *******************************/
function RedCardPanelApplyNow() {


    /**************** render component *****************/
    return (
        <div className="RedCardPanelApplyNow-component">

            <div className="RedCardPanelApplyNow-card"
            id="RedCardPanelApplyNow-card-left"
            >
                <div className="RedCardPanelApplyNow-card-header">
                    <img src={mascot} alt="mascot" id="RedCard-mascot"></img>
                    <img src={squareLogo} alt="Square logo" id="RedCard-Square-logo"></img>
                </div>

                <div className="RedCardPanelApplyNow-card-body-container">
                    <h2>Get even more ways to save.</h2>
                    <p>Market Square offers can help you save 5-50% on your favorite items.</p>
                    <div className="RedCard-Square-link-container">
                        <NavLink
                            exaxt to={'/square'}
                            id="RedCard-Square-link"
                            onClick={(e) => window.scrollTo(0,0)}
                        >
                            Start saving today<i class="fa-solid fa-chevron-right" id="right-chevron-icon"></i>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="RedCardPanelApplyNow-card"
            id="RedCardPanelApplyNow-card-right"
            >
                <div className="RedCardPanelApplyNow-card-header">
                    <div id="RedCardPanelApplyNow-card-stack-image-container">
                        <img src={cardStack} alt="RedCards" id="RedCardPanelApplyNow-card-stack-image"></img>
                    </div>
                    <h3>Apply now.</h3>
                </div>

                <div className="RedCardPanelApplyNow-card-body-container"
                id="RedCardPanelApplyNow-card-body-container-right">
                    <p>Start getting more at Market and Market.com</p>
                    <div className="RedCardPanelApplyNow-buttons-container">
                        <button id="RedCard-CTA-button-white">
                            <NavLink exact to="/" onClick={(e) => window.scrollTo(0,0)}>Apply for Credit</NavLink>
                        </button>
                        <button id="RedCard-CTA-button-white">
                            <NavLink exact to="/" onClick={(e) => window.scrollTo(0,0)}>Apply for Debit</NavLink>
                        </button>
                        <button id="RedCard-CTA-button-white">
                            <NavLink exact to="/" onClick={(e) => window.scrollTo(0,0)}>Open a Reloadable</NavLink>
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
}


/******************************** EXPORTS ********************************/
export default RedCardPanelApplyNow
