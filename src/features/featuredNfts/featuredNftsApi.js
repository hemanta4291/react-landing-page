
import { featuredNtfs } from "../../demo-data/featured-ntfs-demo"
export const getFeaturedNtfs = async(page) =>{
    let status = true
    let promise = new Promise((res,rej)=>{

        setTimeout(()=>{
            if(status){
                res(featuredNtfs)
            }else{
                rej("something error happened from api ....")
            }
        },1000)

    })


    return await promise

}