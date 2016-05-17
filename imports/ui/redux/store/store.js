import {
  applyMiddleware,
  createStore,
} from 'redux';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from '/imports/ui/redux/reducers';
import { initState } from './initState';

const logger = createLogger();
const middleWare = [
  ReduxThunk,
  logger,
];

const Store = createStore(rootReducer, initState, applyMiddleware(...middleWare));
export default Store;
