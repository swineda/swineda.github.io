/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// local files
import "./RedCardPanelHeader.css"
import cardStack from "../../../../../images/RedCard/RedCard-full-stack.png"
import { CTACreditButton, CTADebitButton, CTAReloadableButton } from "../../abstracted-buttons";

/******************************* COMPONENT *******************************/
function RedCardPanelHeader() {


    /**************** render component *****************/
    return (
        <div className="RedCardPanelHeader-component">

            <div className="RedCardPanelHeader-left">
                <span>Save 5%<sup id="RedCardPanelHeader-superscript">1</sup></span>
                <span>today &</span>
                <span>every day.</span>

                <div className="RedCardPanelHeader-left-subheader-container">
                    <p>Market RedCard™ saves</p>
                    <p>you more, in store & online.</p>
                </div>

                <div className="RedCardPanelHeader-left-disclaimer">
                    <span><sup id="RedCardPanelHeader-left-disclaimer-footnote">1</sup> Some restrictions apply. <span id="RedCardPanelHeader-see-below-text">See below</span> for RedCard benefits & program rules</span>
                </div>
                <div className="RedCardPanelHeader-buttons-container">
                    {CTACreditButton}
                    {CTADebitButton}
                    {CTAReloadableButton}
                </div>
            </div>

            <div className="RedCardPanelHeader-right">
                <img src={cardStack} alt="RedCard stack" id="card-stack-image"></img>
            </div>


        </div>
    )
}


/******************************** EXPORTS ********************************/
export default RedCardPanelHeader
