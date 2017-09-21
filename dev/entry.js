require('./style.css');

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import {INCREMENT, DECREMENT} from './actions/app';
import Counter from './components/counter'

//const INCREMENT=1, DECREMENT=-1; 
// the basic app conponent and statecontainer in one

const render = () => {
    ReactDOM.render(
        <Counter value={store.getState()}
            onIncrement={() => {
                store.dispatch({type:INCREMENT})
                }
            }
            onDecrement={() =>
                store.dispatch({type:DECREMENT})
            }
        
        
        />,
        document.getElementById('root')

    )
}

store.subscribe(render);
render();






