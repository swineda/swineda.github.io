/******************************** IMPORTS ********************************/
// libraries
import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./cartReducer";
// local files
import departmentsReducer from "./departmentsReducer";
import favoritesReducer from "./favoritesReducer";
import ordersReducer from "./ordersReducer";
import productsReducer from "./productsReducer";
import reviewsReducer from "./reviewsReducer";
import searchReducer from "./searchReducer";
import sessionReducer from './sessionReducer';


/******************************* REDUCER *********************************/
const rootReducer = combineReducers({
  session: sessionReducer,
  departments: departmentsReducer,
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  reviews: reviewsReducer,
  favorites: favoritesReducer,
  search: searchReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};


/******************************** EXPORTS ********************************/
export default configureStore;
