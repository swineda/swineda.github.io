/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Redirect, useParams } from "react-router-dom";
import  StarRatings from 'react-star-ratings';
// local files
import "./UserReviews.css"
import NavBarAccount from "../../Navigation/NavBarAccount";
import DeleteReview from "../DeleteReview"
import { thunkReadAllUserReviews } from "../../../store/reviewsReducer";
import noReviewsIcon from "../../../images/Account/account-no-reviews.png";

/******************************* COMPONENT *******************************/
function UserReviews() {

  /****************** access store *******************/
  const user = useSelector(state => state.session.user);
  const reviewsState = useSelector(state => state.reviews.allReviewsByUser)

  /************ key into pertinent values ************/
  const reviews = Object.values(reviewsState)

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadAllUserReviews());
  }, [dispatch])

  /************* conditional components **************/
  let reviewsCard;

  if (reviews && reviews.length) {
    reviewsCard =  (
        <>
        {reviews && reviews.map((review) => (
          <>
            <div className="review-card-container">

              <div className="review-card-container-left">
                {review && <NavLink exact to={`/departments/${review.Product.departmentId}/products/${review.Product.id}`} onClick={(e) => window.scrollTo(0,0)}>
                  <img
                    src={review.Product.previewImage}
                    id='review-card-thumbnail'
                    >
                  </img>
                </NavLink>}
              </div>

              <div className="review-card-container-right">
                <p className="review-card-product-name">{review.Product.name}</p>
                <p id="review-card-product-details">{review.title}</p>
                <p id="review-card-product-details">
                <StarRatings
                  isSelectable={false}
                  rating={review.rating}
                  starRatedColor="#ffd700"
                  numberOfStars={5}
                  name='rating'
                  starDimension='12px'
                  starSpacing='0'
                  />
                </p>
                <p className="review-card-product-description">{review.description}</p>

                <div className="modify-review-options-container">
                  <NavLink
                    exact to={`/reviews/${review.id}/edit`}
                    className="UserReviews-modify-review-button"
                    onClick={(e) => window.scrollTo(0,0)}
                    >
                    Edit review
                  </NavLink>

                  <DeleteReview reviewId={review.id} className={'UserReviews-modify-review-button'}/>
                </div>
              </div>

            </div>
          </>
        ))}
      </>
    )
  } else {
    reviewsCard = (
      <>
        <div className='AccountPage-empty-card'>

          <div className='AccountPage-empty-card-image-container'>
            <img src={noReviewsIcon} alt="No orders icon" className='AccountPage-empty-card-image'></img>
          </div>

          <h2>No reviews found</h2>

          <p>Reviews will appear here after you’ve made a post.</p>
        </div>
      </>
    )
  }


  /**************** render component *****************/
  if (user && user.id == null) return <Redirect to="/"></Redirect>

    return (
      <div className="page-wrapper-container">

        <div id="UserReviews-component">

            <NavBarAccount user={user} />

            <div className='UserReviews-right'>

              <div className="UserReviews-directory-container">
                <NavLink
                  exact to={'/account'}
                  id="UserReviews-Account-redirect-button"
                  onClick={(e) => window.scrollTo(0,0)}
                >
                  Account
                </NavLink>
                <p>/</p>
                <p>Rate & review</p>
              </div>


            <div className="UserReviews-title-container">
              <div className="UserReviews-title">Rate & review</div>
              <div className="UserReviews-subtitle">Tell others about your recent purchases.</div>
            </div>

          <div className="UserReviews-card-container">
            {reviewsCard}
          </div>

          </div>

        </div>

      </div>
    )
}


/******************************** EXPORTS ********************************/
export default UserReviews
