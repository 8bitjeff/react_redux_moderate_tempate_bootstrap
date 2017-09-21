import {INCREMENT, DECREMENT} from './actions/app';
import counter from './reducers/counter'
import { createStore } from 'redux';


//reducer for counter
//const INCREMENT=1, DECREMENT=-1; 

const store= createStore(counter); //pass in reducer to store

export default store;