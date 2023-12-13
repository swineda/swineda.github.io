/******************************** IMPORTS ********************************/
// local files
import "./GrandTotal.css"
import { calculateGrandTotal, calculateRedCardDiscount } from "../../component-resources";

/******************************* COMPONENT *******************************/
function GrandTotal({products, subtotal}) {

  /************ key into pertinent values ************/
  const discount = calculateRedCardDiscount(subtotal)
  const total = calculateGrandTotal(subtotal, discount)

  /**************** render component *****************/

    return (
            <>
                <div className="GrandTotal-total-at-a-glance">
                    <div>Order summary</div>
                </div>

                <div className="GrandTotal-subtotal-breakdown">
                    <div className="GrandTotal-subtotal-item">
                        <div>Subtotal ({products.length} item{products.length === 1 ? '' : 's'})</div>
                        <div>${subtotal}</div>
                    </div>

                    <div className="GrandTotal-subtotal-item">
                        <div>Discounts</div>
                        <div className="redCard-discount">-${discount}</div>
                    </div>
                    <p id="redCard-discount-subtext">RedCard 5% Discount</p>

                    <div className="GrandTotal-subtotal-item">
                        <div>Delivery</div>
                        <div className="redCard-discount">Free</div>
                    </div>

                    <div className="GrandTotal-subtotal-item" id="last-GrandTotal-subtotal-item">
                        <div>Estimated tax</div>
                        <div>$0.00</div>
                    </div>

                    <div className="GrandTotal-grandtotal">
                        <div>Total</div>
                        <div>${total}</div>
                    </div>
                </div>
            </>
        )
}

/******************************** EXPORTS ********************************/
export default GrandTotal
