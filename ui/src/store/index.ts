import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import event from './reducers/event';

const rootReducer = combineReducers({
    event,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
