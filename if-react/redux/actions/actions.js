import { CHANGE_FILTER } from "./actionsTypes";

export function changeFilter(obj){
     return{
          type:CHANGE_FILTER,
          payload:{
               adults: obj.adults,
               children: obj.children,
               rooms: obj.rooms
          }
     }
}