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
function sum(arr) {
    return arr.reduce(function (total, num) { return total + num; });
}
var numbers = [1, 2, 3, 4, 5, 6];
// console.log(sum(numbers))
var complexItem = { name: 'damian' };
complexItem = { title: "professor" };
complexItem = "This one is a string";
complexItem = 22;
var bloodType;
(function (bloodType) {
    bloodType[bloodType["Apositive"] = 0] = "Apositive";
    bloodType[bloodType["Anegative"] = 1] = "Anegative";
    bloodType[bloodType["Opositive"] = 2] = "Opositive";
    bloodType[bloodType["Oneg"] = 3] = "Oneg";
    bloodType[bloodType["Bpositive"] = 4] = "Bpositive";
    bloodType[bloodType["Bnegative"] = 5] = "Bnegative";
    bloodType[bloodType["ABpositive"] = 6] = "ABpositive";
    bloodType[bloodType["ABnegative"] = 7] = "ABnegative";
})(bloodType || (bloodType = {}));
var me = {
    name: 'Carla',
    age: 24,
    height: 5 * 12,
    bloodType: bloodType.Bnegative
};
console.log(me);
