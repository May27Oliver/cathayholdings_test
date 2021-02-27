import {createStore} from 'redux';//我們需要將middleware加進store裡，middleware幫助action啟動時，我們可以catch或display之。
import rootReducer from './root-reducer';

const store = createStore(rootReducer);
export default store;