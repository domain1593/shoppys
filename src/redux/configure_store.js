import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers';


const configureStore = () => {
    let store = createStore(Reducers, applyMiddleware(thunk))
    return store
}
export default configureStore;
