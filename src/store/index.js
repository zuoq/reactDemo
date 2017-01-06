import { createStore } from 'redux'
import {counter} from './reducers'

export default getStore = () => {
    return createStore(counter);
}