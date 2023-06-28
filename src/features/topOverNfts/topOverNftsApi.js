
import { topOverNtfs } from "../../demo-data/top-collection-ntfs-demo"
export const getTopOverNtfs = async(page) =>{
    let status = true
    let promise = new Promise((res,rej)=>{

        setTimeout(()=>{
            if(status){
                res(topOverNtfs)
            }else{
                rej("something error happened from api ....")
            }
        },1000)

    })


    return await promise

}