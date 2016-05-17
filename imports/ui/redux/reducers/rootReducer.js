import { INIT_STATE } from '../store';
import { countReducer } from './documents';

export default function rootReducer(state = INIT_STATE, action) {
  return {
    docCount: countReducer(state.docCount, action),
  };
}
