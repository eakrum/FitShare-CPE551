import {applyMiddleware, createStore} from "redux"

import {createLogger} from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import rootReducer from "./reducers"



export default createStore(rootReducer, applyMiddleware(createLogger))