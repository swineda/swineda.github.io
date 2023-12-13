/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
// local files
import { thunkDeleteSingleReview } from "../../../store/reviewsReducer";
import "./DeleteReview.css"

/******************************* COMPONENT *******************************/
function DeleteReview({reviewId, className}) {

    /************ reducer/API communication ************/
    const dispatch = useDispatch();

    /***************** handle events *******************/
    const handleDelete = (reviewId) => {
        dispatch(thunkDeleteSingleReview(reviewId))
    }

    /**************** render component *****************/
    return (
        <button className={className} type="submit" onClick={(e) => handleDelete(reviewId)}>Delete</button>
    )
}


/******************************** EXPORTS ********************************/
export default DeleteReview
