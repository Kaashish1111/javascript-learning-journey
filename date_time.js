let myDate=new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.toDateString())


// console.log(myDate.getTimezoneOffset())
// console.log(myDate.toUTCString())

let createDate=new Date(2023,0,23)
console.log(createDate.toDateString())

let myCreateDate=new Date("2023-1-22")
console.log(myCreateDate.toLocaleDateString())
console.log(myCreateDate.getTime())

let TimeStamp=Date.now()
console.log(Date.now())
console.log(Math.floor(Date.now()/1000))  //to get into seconds we use floor so that we don't get value in decimal


let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

console.log(newDate.toLocaleString(`default`,{
    weekday: `long`,
    }))