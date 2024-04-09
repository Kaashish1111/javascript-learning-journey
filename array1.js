// javascript arary copy operations create shallow copies (rather than deep copies)
const myarr=[1,2,3,4,5,"kashish",true]
const myarr1=[1,2,3,4,5]
const myarr2=new Array(4,5,6,7,8,9)
console.log(myarr)
console.log(myarr1)
console.log(myarr2)
console.log(` lenngth of array is ${myarr2.length}`)
console.log(myarr[1])

// Array Methods
myarr1.push(6)
console.log(myarr1)
myarr.pop()
console.log(myarr)

myarr1.unshift(1)
console.log(myarr1)
myarr2.shift()
console.log(myarr2)

console.log(myarr.includes("kashish"))
console.log(myarr.indexOf(2))

const newArray=myarr1.join()
console.log(newArray)
console.log(typeof newArray)



// slice and splice
console.log("A ", myarr);

const myn1 = myarr.slice(1, 3)

console.log(myn1);
console.log("B ", myarr);


const myn2 = myarr.splice(1, 3)
console.log("C ", myarr);
console.log(myn2);