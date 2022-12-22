 import Service from '../service/Service'
 import About from '../about/About'
 import { Data } from "../../utils/Constants"
 export const reducer=(state, action)=>{
    if(action.type==="getPageData"){
        state.page= action.payload;
        state.pageComponent="";
        state.menu= Data[action.payload].map((item)=>item.name)
        return state
    }
    if(action.type==="getPageComponentData"){
        const {page, val}= action.payload
        state.page=page;
        state.pageComponent=val;
        state.menu= Data[page].map((item)=>item.name)
        return state
    }
   
    return state
 }