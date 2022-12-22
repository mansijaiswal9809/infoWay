 import Service from '../service/Service'
 import About from '../about/About'
 import { Data } from "../../utils/Constants"
 export const reducer=(state, action)=>{
    if(action.type==="getPageData"){
        const menu= Data[action.payload].map((item)=>item.name)
        return {...state,page:action.payload,pageComponent:"",menu }
    }
    if(action.type==="getPageComponentData"){
        const {page, val}= action.payload
        const menu= Data[page].map((item)=>item.name)
        return {...state,page, pageComponent:val, menu}
    }
   
    return state
 }