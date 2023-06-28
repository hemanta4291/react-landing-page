
import { ntfs } from "../../demo-data/ntfs-demo"
export const getNtfs = (page) =>{
    let status = true
    let promise = new Promise((res,rej)=>{

        setTimeout(()=>{
            if(status){
                let middle = parseInt(ntfs.length/2)
                let firstPage = ntfs.slice(0,middle)

                if(page === 1){
                    res(firstPage)
                }else{
                    res(ntfs)
                }

                
            }else{
                rej("something error happened from api ....")
            }
        },1000)

    })


    return promise

}