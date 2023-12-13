/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// local files
import "./RedCardPanelTable.css"
import cardStack from "../../../../../images/RedCard/RedCard-full-stack.png"
import credit from "../../../../../images/RedCard/RedCard-credit.png";
import debit from "../../../../../images/RedCard/RedCard-debit.png";
import reloadable from "../../../../../images/RedCard/RedCard-reloadable.png";
import { CTACreditButton, CTADebitButton, CTAReloadableButton } from "../../abstracted-buttons";


/******************************* COMPONENT *******************************/
function RedCardPanelTable() {

    const check = (
        <td>
            <div className="check-mark-container">
                <i
                    class="fa-solid fa-check"
                    id="RedCardPanelTable-check-mark-icon"
                >
                </i>
            </div>
        </td>
    )

    const dash = (
        <td>
            <i
                class="fa-solid fa-minus"
                id="RedCardPanelTable-dash-icon"
                >
            </i>
        </td>
    )

    /**************** render component *****************/
    return (
        <div className="RedCardPanelTable-component">

            <div className="RedCardPanelTable-table-container">
                <table className="RedCardPanelTable-table">
                    <thead>
                        <tr id="card-images-row">
                            <th>
                                <div>
                                Find the RedCard that's right for you.
                                </div>
                            </th>
                            <td>
                                <div className="card-container"
                                id="credit-card-container"
                                >
                                    <img
                                    src={credit} alt="RedCard credit"
                                    className="RedCard-table-card-image"
                                    id="RedCard-table-stack-image"
                                    ></img>
                                </div>
                            </td>
                            <td>
                                <div className="card-container">
                                    <img src={debit} alt="RedCard debit"
                                    className="RedCard-table-card-image"
                                    id="RedCard-table-single-image"
                                    ></img>
                                </div>
                            </td>
                            <td>
                                <div className="card-container">
                                    <img src={reloadable} alt="reloadable"
                                    className="RedCard-table-card-image"
                                    id="RedCard-table-single-image"
                                    ></img>
                                </div>
                            </td>
                        </tr>
                        <tr className="RedCardPanelTable-head-row">
                            <th id="RedCardPanelTable-heading-column">Benefits</th>
                            <td>Credit Card</td>
                            <td>Debit Card</td>
                            <td>Reloadable Account</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <p>
                                    <span id="RedCard-every-day-discount">
                                        5% off
                                        <sup id="table-superscript">1 </sup>
                                        every day
                                    </span> at Market and Market.com
                                </p>
                            </th>
                            {check}
                            {check}
                            {check}
                        </tr>
                        <tr className="RedCardPanelTable-even-row">
                            <th>
                                <p>No annual or monthly fees<sup id="table-superscript">2</sup>
                                </p>
                            </th>
                            {check}
                            {check}
                            {check}
                        </tr>
                        <tr>
                            <th>
                                <p>Free 2-day shipping
                                    <sup id="table-superscript">1 </sup>
                                on hundreds of thousands of items at Market.com
                                </p>
                            </th>
                            {check}
                            {check}
                            {check}
                        </tr>
                        <tr className="RedCardPanelTable-even-row">
                            <th>
                                <p>RedCard Exclusives including special items and offers
                                    <sup id="table-superscript">1</sup>
                                </p>
                            </th>
                            {check}
                            {check}
                            {check}
                        </tr>
                        <tr>
                            <th>
                                <p>More return time at Market — get an additional 30 days for returns and exchanges
                                    <sup id="table-superscript">1 </sup>
                                </p>
                            </th>
                            {check}
                            {check}
                            {check}
                        </tr>
                        <tr className="RedCardPanelTable-even-row">
                            <th><p>Pay for your Market purchases directly from your existing checking account (purchases generally take 1-3 days to process)</p>
                            </th>
                            {dash}
                            {check}
                            {dash}
                        </tr>
                        <tr>
                            <th><p>Add cash for free at Market and spend anywhere Visa® debit cards are accepted</p>
                            </th>
                            {dash}
                            {dash}
                            {check}

                        </tr>
                        <tr className="RedCardPanelTable-even-row">
                            <th>
                                <p>Earn 2% on dining and gas purchases
                                    <sup id="table-superscript">3 </sup>
                                    and 1% everywhere else outside of Market
                                    <sup id="table-superscript">3</sup>
                                    : Market Mastercard exclusive
                                </p>
                            </th>
                            {check}
                            {dash}
                            {dash}
                        </tr>
                        <tr>
                            <th><p>Cash withdrawal of up to $40 at checkout</p>
                            </th>
                            {dash}
                            {check}
                            {check}
                        </tr>
                        <tr id="table-disclaimer-row">
                            <th>
                                <p>1 Some restrictions apply. <span id="see-below">See below</span> for RedCard benefits and program rules.</p>
                                <p>2 <span id="see-below">See below</span> for credit card rates and fees. <span id="see-below">See below</span> for debit card agreement and fees. <span id="see-below">See below</span> for Reloadable Account rates and fees.</p>
                                <p>3 Only for guests approved for a Market Mastercard. Restrictions apply. <span id="see-below">Learn more.</span></p>
                            </th>
                            <td>{CTACreditButton}</td>
                            <td>{CTADebitButton}</td>
                            <td>{CTAReloadableButton}</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    )
}


/******************************** EXPORTS ********************************/
export default RedCardPanelTable
