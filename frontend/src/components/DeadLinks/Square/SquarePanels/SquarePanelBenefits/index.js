/******************************** IMPORTS ********************************/
// local files
import "./SquarePanelBenefits.css"
import benefitsIcon1 from "../../../../../images/Square/square-benefits-1.png";
import benefitsIcon2 from "../../../../../images/Square/square-benefits-2.png";
import benefitsIcon3 from "../../../../../images/Square/square-benefits-3.png";
import benefitsIcon4 from "../../../../../images/Square/square-benefits-4.png";
import benefitsIcon5 from "../../../../../images/Square/square-benefits-5.png";

/******************************* COMPONENT *******************************/
function SquarePanelBenefits() {


    /**************** render component *****************/
    return (
        <div className="SquarePanelBenefits-component">
            <div className="SquarePanelBenefits-content-component">


            <div className="SquarePanelBenefits-header-container">
                <h2>Benefits you'll love</h2>
                <p>Use them in store or online too. <u>See Market Square program rules.</u></p>
            </div>

            <div className="SquarePanelBenefits-cards-container">
                <div className="SquarePanelBenefits-cards-container-line-1">

                    <div className="SquarePanelBenefits-card">
                        <div id="Square-benefits-icon-container">
                            <img src={benefitsIcon1} alt="Square benefits icon" id="Square-benefits-icon"></img>
                        </div>
                        <h3>1% earnings</h3>
                        <p className="line-1A-text-body">Earn 1% <sup id="SquarePanelBenefits-superscript">1</sup> when you shop to redeem at Market later or continue saving 5% <sup id="SquarePanelBenefits-superscript">2</sup> with RedCard™.</p>
                    </div>

                    <div className="SquarePanelBenefits-card">
                        <div id="Square-benefits-icon-container">
                            <img src={benefitsIcon2} alt="Square benefits icon" id="Square-benefits-icon"></img>
                        </div>
                        <h3>Hundreds of deals</h3>
                        <p className="line-1B-text-body">Get access to offers just for you on items & brands you love.</p>
                        <span>Browse offers</span>
                    </div>

                </div>

                <div className="SquarePanelBenefits-cards-container-line-2">

                    <div className="SquarePanelBenefits-card">
                        <div id="Square-benefits-icon-container">
                            <img src={benefitsIcon3} alt="Square benefits icon" id="Square-benefits-icon"></img>
                        </div>
                        <h3 className="line-2-header">Birthday gift</h3>
                        <p>Get a 5% off a single purchase for your birthday. Valid for 30 days from your birthday <sup id="SquarePanelBenefits-superscript">3</sup></p>
                    </div>

                    <div className="SquarePanelBenefits-card">
                        <div id="Square-benefits-icon-container">
                            <img src={benefitsIcon4} alt="Square benefits icon" id="Square-benefits-icon"></img>
                        </div>
                        <h3 className="line-2-header">Community support votes</h3>
                        <p>Earn a community support vote with every trip & use them to help direct where Market gives. <sup id="SquarePanelBenefits-superscript">3</sup></p>
                        <span>View nonprofits</span>
                    </div>

                    <div className="SquarePanelBenefits-card" id="SquarePanelBenefits-card-2C">
                        <div id="Square-benefits-icon-container">
                            <img src={benefitsIcon5} alt="Square benefits icon" id="Square-benefits-icon"></img>
                        </div>
                        <h3 className="line-2-header">Market Square Partnerships</h3>
                        <p className="line-2C-text-body">We’ve teamed up with some of your favorite brands to bring you even more fantastic deals.</p>
                        <span>View partners</span>
                    </div>

                </div>
            </div>

            </div>
        </div>
    )
}


/******************************** EXPORTS ********************************/
export default SquarePanelBenefits
