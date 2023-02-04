import { CHANGE_FILTER } from "../actions/actionsTypes";

const initialState={
   filter:{
     adults:0,
     children:0,
     rooms:0
   },
}

function Reducer(state=initialState,action){
     switch (action.type) {
          case CHANGE_FILTER:
               return{
                    ...state,
                    filter: {
                         adults: action.payload.adults,
                         children: action.payload.children,
                         rooms:action.payload.rooms
                    }
               }
     
          default:
               return state;
     }
}

export default Reducer;  