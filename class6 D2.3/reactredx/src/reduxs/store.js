import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import AuthReducer from "./Auth/reducer"
import reducer from "./Todo/reducer"

const Reducers =  combineReducers({
    app: reducer,
    auth: AuthReducer})
// const store = createStore(Reducers)

const logger = state => next => action  => {
  console.log("logger")
  return next(action)
}

const logger2 = state => next => action => {
  console.log("logger2")
  return next(action)
}

const composeEnhancers = (typeof window !== undefined && window.__REDUX_DEVTOOLS_EXTENSION__ ) || compose

const enhancer = composeEnhancers(applyMiddleware(logger, logger2))
const store = createStore(Reducers, enhancer);
export default store