import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "../reducers/themeReducer";
import userReducer from "../reducers/userReducer";

const persistConfig = {
  key: "Logshahah",
  storage: storage,
  // whitelist: ["themeReducer"],
};

const Reducer = persistReducer(
  persistConfig,
  combineReducers({  themeReducer , userReducer})
);

const middleware = applyMiddleware(thunk, logger);
const store = createStore(Reducer, middleware);



const persistor = persistStore(store);

export { persistor, store };
