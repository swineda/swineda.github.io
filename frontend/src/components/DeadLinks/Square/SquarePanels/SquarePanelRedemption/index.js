/******************************** IMPORTS ********************************/
// local files
import "./SquarePanelRedemption.css"
import icon1 from "../../../../../images/Square/square-redemption-1.png";
import icon2 from "../../../../../images/Square/square-redemption-2.png";
import icon3 from "../../../../../images/Square/square-redemption-3.png";
import icon4 from "../../../../../images/Square/square-redemption-4.png";
import icon5 from "../../../../../images/Square/square-redemption-5.png";
import icon6 from "../../../../../images/Square/square-redemption-6.png";
import icon7 from "../../../../../images/Square/square-redemption-7.png";
import icon8 from "../../../../../images/Square/square-redemption-8.png";



/******************************* COMPONENT *******************************/
function SquarePanelRedemption() {


    /**************** render component *****************/
    return (
        <div className="SquarePanelRedemption-component">
        <div className="SquarePanelRedemption-content-container">


            <div className="SquarePanelRedemption-section-container">
                <div className="SquarePanelRedemption-section-header-container">
                    <h2>How to earn</h2>
                    <div>Every time you shop is a chance to earn.</div>
                </div>

                <div className="SquarePanelRedemption-section-cards-container">
                    <div className="SquarePanelRedemption-section-card">
                        <div id="redemption-icon-container">
                            <img src={icon1} alt="Square redemption icon" id="redemption-icon-image"></img>
                        </div>
                        <h3>In store</h3>
                        <p>Enter your mobile number or scan Wallet.</p>
                    </div>

                    <div className="SquarePanelRedemption-section-card">
                        <div id="redemption-icon-container">
                            <img src={icon2} alt="Square redemption icon" id="redemption-icon-image"></img>
                        </div>
                        <h3>Online</h3>
                        <p>Shop with your Market.com account.</p>
                    </div>

                    <div className="SquarePanelRedemption-section-card">
                        <div id="redemption-icon-container">
                            <img src={icon3} alt="Square redemption icon" id="redemption-icon-image"></img>
                        </div>
                        <h3>RedCard</h3>
                        <p>Link your RedCard to easily earn votes.</p>
                    </div>

                    <div className="SquarePanelRedemption-section-card">
                        <div id="redemption-icon-container">
                            <img src={icon4} alt="Square redemption icon" id="redemption-icon-image"></img>
                        </div>
                        <h3>Forget to scan?</h3>
                        <p>Enter your receipt on the dashboard.</p>
                    </div>

                </div>
            </div>

            <div className="SquarePanelRedemption-section-container">
                <div className="SquarePanelRedemption-section-header-container">
                    <h2>How it works</h2>
                    <div>When you pay with a RedCard™, you’ll earn one vote to help direct where Market gives for every eligible purchase and continue to save 5% right away. Enter your mobile number or scan your Market Square barcode to redeem saved offers at the same time.<sup id="redemption-superscript"><u>2</u></sup></div>
                    <p>Not using your RedCard? You’ll earn 1% to redeem at Market later instead of saving 5% right away.</p>
                </div>

                <div className="SquarePanelRedemption-section-cards-container">
                    <div
                        className="SquarePanelRedemption-section-card"
                        id="SquarePanelRedemption-section-card-wide"
                    >
                        <div id="redemption-icon-container-wide">
                            <div id="redemption-icon-container">
                                <img src={icon5} alt="Square redemption icon" id="redemption-icon-image"></img>
                            </div>
                            <div id="redemption-icon-container">
                                <img src={icon6} alt="Square redemption icon" id="redemption-icon-image"></img>
                            </div>
                        </div>
                        <h3 id="redemption-card2-title">When you’re in store</h3>
                        <p>
                            <span>Enter your mobile number on the keypad or self-checkout screen.</span>
                            <span>Scan your Market Square barcode, which you can find in your account or Wallet in the Market app.</span>
                        </p>
                    </div>

                    <div className="SquarePanelRedemption-section-card">
                        <div id="redemption-icon-container">
                            <img src={icon7} alt="Square redemption icon" id="redemption-icon-image"></img>
                        </div>
                        <h3 id="redemption-card2-title">When you’re online</h3>
                        <p>Sign into your connected Market account on Market.com or in the Market app.</p>
                    </div>

                    <div className="SquarePanelRedemption-section-card">
                        <div id="redemption-icon-container">
                            <img src={icon8} alt="Square redemption icon" id="redemption-icon-image"></img>
                        </div>
                        <h3 id="redemption-card2-title">After a purchase</h3>
                        <p>Enter receipt numbers within 7 days to collect earnings from eligible in-store purchases.</p>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}


/******************************** EXPORTS ********************************/
export default SquarePanelRedemption
