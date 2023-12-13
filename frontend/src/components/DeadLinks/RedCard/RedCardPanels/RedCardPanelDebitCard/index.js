/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// local files
import "./RedCardPanelDebitCard.css"
import { CTADebitButton } from "../../abstracted-buttons"
import debitCheck from "../../../../../images/RedCard/RedCard-debit-check.png"

/******************************* COMPONENT *******************************/
function RedCardPanelDebitCard() {


    /**************** render component *****************/
    return (
        <div className="RedCardPanelDebitCard-component">

            <div className="RedCardPanelDebitCard-left">
                <h2>Save 5% with a Debit RedCard.<sup id="RedCardPanelDebitCard-title-superscript"><u >1</u></sup></h2>
                <h3>Pay for your Market purchases directly from your existing checking account.</h3>
                <p><sup id="RedCardPanelDebitCard-footnote-superscript"><u>1</u></sup>Some restrictions apply. <u>See below</u> for RedCard benefits & program rules.</p>
                <button id="RedCard-CTA-button-black">
                    <NavLink exact to="/" onClick={(e) => window.scrollTo(0,0)}>Apply for Debit</NavLink>
                </button>
            </div>

            <div className="RedCardPanelDebitCard-right">
                <img src={debitCheck} alt="debit and check" id="debit-check-image"></img>
            </div>

        </div>
    )
}


/******************************** EXPORTS ********************************/
export default RedCardPanelDebitCard
