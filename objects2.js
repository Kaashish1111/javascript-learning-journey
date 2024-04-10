const tinderUSer= new Object()  // singelton obeject
// const tinderUSer={}          // non singleton object
console.log(tinderUSer);

tinderUSer.id="123Abc"
tinderUSer.name="Sam"
tinderUSer.isLoggedIn=false
console.log(tinderUSer); 

const regularUSer={
    email:"you@gmail.com",
    fullname:{
        userFullName:{
            firstName:"Kashish",
            lastName:"Goyal",
        }
    }
}
console.log(regularUSer.fullname.userFullName.lastName);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const all_objects={obj1,obj2}

const all_objects=Object.assign({},obj1,obj2) // here {} acts as target in which all the the sources are stored
 console.log(all_objects);
// console.log(obj1)  // try it without using {} in line 26

const obj3={...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUSer);

console.log(Object.keys(tinderUSer));
console.log(Object.values(tinderUSer));
console.log(Object.entries(tinderUSer));

console.log(tinderUSer.hasOwnProperty('isLoggedIn'));

const course={
    courseName:"master js",
    coursePrice:5000,
    courseInstructor:"Fraz",
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

