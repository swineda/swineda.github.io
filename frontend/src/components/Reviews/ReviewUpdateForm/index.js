/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import  StarRatings from 'react-star-ratings';
// local files
import { thunkReadAllUserReviews, thunkUpdateSingleReview } from "../../../store/reviewsReducer";
import "./ReviewUpdateForm.css"
import { thunkReadSingleProductDetails } from "../../../store/productsReducer";

/******************************* COMPONENT *******************************/
function ReviewUpdateForm() {

    /****************** access store *******************/
    const user = useSelector(state => state.session.user);
    const sessionState = useSelector(state => state.session);
    const reviewsState = useSelector(state => state.reviews.allReviewsByUser);
    // const product = useSelector(state => state.products.singleProductDetails);

    /************ key into pertinent values ************/
    const { reviewId } = useParams()
    // const departmentId = product.Department.id
    const review = reviewsState[parseInt(reviewId)]
    // console.log("review", review)
    // const displayImage = product.previewImage
    // const imagesArr = product.ProductImages
    // const displayImage = imagesArr[0]

    /************ reducer/API communication ************/
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(thunkReadAllUserReviews());
    }, [dispatch])

    // useEffect(() => {
    //     dispatch(thunkReadSingleProductDetails(parseInt(review.productId)))
    // }, [dispatch])

    /****************** manage state *******************/
    const [rating, setRating] = useState();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);

    useEffect(() => {
        setRating(review && review.rating)
        setTitle(review && review.title)
        setDescription(review && review.description)
    }, []);

    // render errors
    useEffect(() => {
        const errors = [];

        if (!rating) {
            errors.push("Please enter a rating.")
        }

        if (title && title.length > 0 && title.length < 5) {
        errors.push("Please write a longer title.")
        } else if (title && title.length > 50) {
        errors.push("Please write a shorter title.")
        }

        if (description && description.length > 0 && description.length < 20) {
            errors.push("Please write a longer description.")
        } else if (description && description.length > 255) {
            errors.push("Please write a shorter description.")
        }

        if (errors.length) {
            setValidationErrors([...errors])
        }

        setValidationErrors(errors)
  }, [rating, title, description])

  /***************** handle events *******************/
  const history = useHistory();

  const handleSubmit = (e) => {

    e.preventDefault();

    let errors = [];
    setValidationErrors(errors);

    let updateReviewData = {
      rating: rating,
      title: title,
      description: description,
    }

    dispatch(thunkUpdateSingleReview(parseInt(reviewId), updateReviewData)).catch(
      async (res) => {

          const data = await res.json();

          if (data && data.errors) {
              data.errors.forEach(message => errors.push(message));
              setValidationErrors(errors);
          }
      });

      history.push(`/departments/${review.Product.departmentId}/products/${review.Product.id}`)
  }

  /**************** render component *****************/
  if (user && user.id == null) return <Redirect to="/"></Redirect>

  return (
    <div className="page-wrapper-container">
      <div id="ReviewCreateForm-component">

        <div class="ReviewCreateForm-left-container">
            {review && <img src={review.Product.previewImage} className="ReviewCreateForm-display-image"></img>}
        </div>


        <div className="ReviewCreateForm-right-container">

            <div className="ReviewCreateForm-title-container">
                <div className="review-form-title">Update your review for this item</div>
                <div className="review-form-item">{review && review.Product.name}</div>
                <div className="review-form-display-name">Display name: {sessionState.user && sessionState.user.username}</div>
            </div>



            <form onSubmit={handleSubmit} className="review-form">


                <div className="review-form-star-section">
                    <h2>First, rate this item</h2>
                    <StarRatings
                    isSelectable={true}
                    rating={rating}
                    changeRating={(rating) => setRating(rating)}
                    starRatedColor="#ffd700"
                    starHoverColor="#ffd700"
                    numberOfStars={5}
                    name='rating'
                    starDimension='32px'
                    starSpacing='0'
                    />
                </div>



                <div className="review-form-written-section">

                    <label>
                        <div>
                            <div className="review-form-title-prompt">Write your review</div>
                        </div>
                        <input
                            className="review-form-text-field"
                            type="text"
                            name="title"
                            minLength={5}
                            placeholder="Review title"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            required={true}
                            >
                        </input>
                        <p className="review-form-subtext">summarize your thoughts in a short headline</p>
                    </label>


                    <label>
                        <textarea
                            className="review-form-textarea-field"
                            type="textarea"
                            name="description"
                            minLength={20}
                            placeholder="Provide a brief description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            required={true}
                            >
                        </textarea>
                        <p className="review-form-subtext">Minimum length is 20 characters.
                        {/* <span>
                        Tips for writing helpful reviews
                        </span> */}
                        </p>
                    </label>

                </div>



            <div className="review-form-errors-section">
                {validationErrors.map((error, idx) => (
                    <p key={idx} className="form-validation-errors">{error}</p>
                    ))}
            </div>


            <div className="review-form-submit-section">
                <p>By submitting, I agree to the {' '}
                    <span id="review-form-guidelines-link">review guidelines</span></p>


                <button
                onClick={() => history.push(`/account/reviews`)}
                className="review-form-button"
                >
                Cancel
                </button>

                <button
                type="submit"
                disabled={!!validationErrors.length}
                className="review-form-button"
                >
                Submit review
                </button>
            </div>

            </form>

        </div>

      </div>
    </div>
  )
}

/******************************** EXPORTS ********************************/
export default ReviewUpdateForm
