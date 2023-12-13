/******************************** IMPORTS ********************************/
// local files
import "./RedCardPanelAnnualSavings.css"


/******************************* COMPONENT *******************************/
function RedCardPanelAnnualSavings() {


    /**************** render component *****************/
    return (
        <div className="RedCardPanelAnnualSavings-component">

            <div className="RedCardPanelAnnualSavings-card">
                <h2>You could save up to $675 per year on groceries with RedCard.</h2>
                <span><u>Offer details below.</u></span>
            </div>

            <div className="RedCardPanelAnnualSavings-card">
                <h2>You could save nearly $500 in baby's first year with your RedCard.</h2>
                <span><u>Offer details below.</u></span>
            </div>

        </div>
    )
}


/******************************** EXPORTS ********************************/
export default RedCardPanelAnnualSavings
