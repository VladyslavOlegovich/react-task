import { combineReducers } from '@reduxjs/toolkit';
import itemsReducer from './itemsReducer'; 
import commentsReducer from './commentsReducer';
const rootReducer = combineReducers({
    items: itemsReducer,
    comments: commentsReducer,
    
  });

  export default rootReducer