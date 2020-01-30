import {createStore, applyMiddleware,compose} from 'redux'
import movieReducer from './Reducers/Moviereducer';
import thunk from 'redux-thunk';

export const store=createStore(movieReducer,
    
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
)