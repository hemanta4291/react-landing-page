
import { topFeaturedNtfs } from "../../demo-data/top-collection-featured-demo"

export const getTopFeaturedNtfs =() =>{
    let status = true
    let promise = new Promise((res,rej)=>{

        setTimeout(()=>{
            if(status){
                res(topFeaturedNtfs)
            }else{
                rej("something error happened from api ....")
            }
        },1000)

    })


    return promise

}