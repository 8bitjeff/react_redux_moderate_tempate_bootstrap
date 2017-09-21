import {INCREMENT, DECREMENT} from './actions/app';
import counter from './reducers/counter'
import { createStore } from 'redux';


const store= createStore(counter); //pass in reducer to store

export default store;
