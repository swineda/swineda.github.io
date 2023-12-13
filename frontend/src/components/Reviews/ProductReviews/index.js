/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import  StarRatings from 'react-star-ratings';
// local files
import { convertDate } from "../../../component-resources";
import { thunkReadAllProductReviews } from "../../../store/reviewsReducer";
import "./ProductReviews.css"

/******************************* COMPONENT *******************************/
function ProductReviews({product, reviewsState}) {

  /****************** access store *******************/
  // const reviewsState = useSelector(state => state.reviews)

  /************ key into pertinent values ************/
  const reviews = Object.values(reviewsState.singleProductReviews)

  /************ reducer/API communication ************/
  // const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(thunkReadAllProductReviews(product.id));
  // }, [dispatch, reviewsState])

  /**************** render component *****************/

    return (

        <div id="Reviews-component">

          <div className="Reviews-ratings-blurb-container">
            <h2>Guest Ratings & Reviews</h2>
            <div id="ProductReviews-avgRatingFixed">{product && parseInt(product.avgRating).toFixed(1)}</div>
            <StarRatings
                rating={product.avgRating}
                starRatedColor="#ffd700"
                numberOfStars={5}
                name='rating'
                starDimension='30px'
                starSpacing='0'
                id='StarRatings'
              />
            <p>{product.numReviews} star ratings</p>
          </div>


        <div className="Reviews-ratings-count-container">
          We found {product.numReviews}  matching reviews
        </div>

        <div className="Reviews-list-container">

            {reviews && reviews.map((review) => (
              <div className="Reviews-list-item-container">
                <div id="Reviews-list-item-title">{review.title}</div>

                <p id="Reviews-list-item-rating">
                <StarRatings
                rating={review.rating}
                starRatedColor="#ffd700"
                numberOfStars={5}
                name='rating'
                starDimension='16px'
                starSpacing='0'
                id='StarRatings'
              />
                </p>

                <div id="Reviews-list-item-user-info">
                  <a href={review.User.url} id='user-link'>
                    <span>{review.User.firstName} {review.User.lastName}</span>
                  </a>
                  <p> - {review.createdAt && convertDate(review.createdAt)}</p>
                </div>

                <p id="Reviews-list-item-user-description">{review.description}</p>
            </div>
          ))}
          </div>

        </div>

    )
}


/******************************** EXPORTS ********************************/
export default ProductReviews
