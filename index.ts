// let firstName:string = "Carla"
// let age:number = 24
// let active:boolean = true

// // let names:string[] = [ 1, 2, 3, 4] // this is valid in Javascript but it Typescript it is invalid
// let names:string[] = [ 'bobby', 'jennifer', 'lily'] // good array

// console.log(names)
// console.log(`My first name is ${firstName}`)


// enum studentTypes {
//     Pending, 
//     Active, 
//     AlmostDone,
//     Graduated, 
//     TAs, 
//     Teachers
// }

// console.log(studentTypes) // tells you what the numbers are assigned to each of the enums

// const myStatus = studentTypes.Graduated

// switch(myStatus) {
//     case studentTypes.Active:
//         break;
// }

// console.log(myStatus)
// if (myStatus == studentTypes.Graduated) {
//     console.log(`the student is  ${myStatus }`)
// }


// let code: string | number = 11
// code = "AA11" // now it is changed to a string because that is a valid value type. 
// // code = false // not a valid value type unless we add boolean to the typecasting

// console.log(`My entry code is: ${code}`)

function sum (arr: number[]) {
    return arr.reduce((total:number, num:number) => total + num )
}

let numbers: number[] = [ 1, 2, 3, 4, 5, 6 ]

// console.log(sum(numbers))

let complexItem: any = { name:'damian' }
complexItem = { title: "professor" }
complexItem = "This one is a string"
complexItem = 22

// console.log("complexItem", complexItem)

interface Human {
    name: string ,
    age: number, 
    height: number, 
    bloodType?: bloodType, // makes it not a required property for Human (makes it optional)

}


enum bloodType{
    Apositive=20,
    Anegative=30, 
    Opositive=40, 
    Onegative=50, 
    Bpositive=60, 
    Bnegative="B-",
    ABpositive=80,
    ABnegative=90,
}
const me: Human = {
    name: 'Carla', 
    age: 24,
    height: 5*12 + 1,
    bloodType: bloodType.Bnegative,  //this one can be commented out and would still work
}

console.log({me})