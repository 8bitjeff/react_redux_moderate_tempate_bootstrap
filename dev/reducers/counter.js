import {INCREMENT, DECREMENT} from '../actions/app';

const counter=(state=0, action)=> {
    let retval=0;
    switch (action.type){
            case INCREMENT: {
            retval= state +1;
            break;
        }
        case DECREMENT: {
            retval= state -1;
            break;
        }
        default: {
            retval= state;
        }
    }

    return(retval);
    //sendToBackend(retval);
  
  }

  //if we wanted to send the new amount to the back-end

  const sendToBackend=(state)=>{
    ajax({
        url:'/getState',
        data:state,
        successHook: ()=>{
           console.log("success");
        }
    })
}


  export default counter;
