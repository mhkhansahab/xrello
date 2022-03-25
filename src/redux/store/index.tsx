import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "../reducers/themeReducer";
import userReducer from "../reducers/userReducer";
import statusReducer from "../reducers/statusReducer";
import cardReducer from "../reducers/cardReducer";

const persistConfig = {
  key: "Logs",
  storage: storage,
};

const Reducer = persistReducer(
  persistConfig,
  combineReducers({  themeReducer , userReducer, statusReducer, cardReducer})
);

const middleware = applyMiddleware(thunk, logger);
const store = createStore(Reducer, middleware);

const persistor = persistStore(store);

export { persistor, store };
