let firstName:string = "Carla"
let age:number = 24
let active:boolean = true

// let names:string[] = [ 1, 2, 3, 4] // this is valid in Javascript but it Typescript it is invalid
let names:string[] = [ 'bobby', 'jennifer', 'lily'] // good array

console.log(names)
console.log(`My first name is ${firstName}`)


enum studentTypes {
    Pending, 
    Active, 
    AlmostDone,
    Graduated, 
    TAs, 
    Teachers
}

console.log(studentTypes) // tells you what the numbers are assigned to each of the enums

const myStatus = studentTypes.Graduated

// switch(myStatus) {
//     case studentTypes.Active:
//         break;
// }

// console.log(myStatus)
// if (myStatus == studentTypes.Graduated) {
//     console.log(`the student is  ${myStatus }`)
// }


let code: string | number = 11
code = "AA11" // now it is changed to a string because that is a valid value type. 
// code = false // not a valid value type unless we add boolean to the typecasting

console.log(`My entry code is: ${code}`)