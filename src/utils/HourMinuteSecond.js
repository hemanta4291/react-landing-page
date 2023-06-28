export const HourMinuteSecond = ()=>{
    let today = new Date()
    let hour = today.getHours()
    let minute=today.getMinutes()
    let second=today.getSeconds()

    return {hour,minute,second}
}