// java script is a dynammicaly typed language
// primitive data types
 
// string, number, null, undefined, symbol, boolean, BigInt

// refrence (non primitive data type)

// const id = Symbol("123")
// const anotherId = Symbol("123")
// console.log(id==anotherId)

// arrar, object, functions

// const heros =["iron man","batman","spiderman"];

// let MyObj ={
//     name:"preet kasana",
//     age:21,
// }

// let MyFunction =function(){
//     console.log("hello world");
// }


// ------------------------------------------------------------------------------------------


// memory are stored in two types:-
// 1->stack(primitive,copy is passed no change in orignal)
// 2->heap(Non -primitive , refrence is passed orignal value is changed)


let MyInstaId = "preetkasana_"
let AnotherId = MyInstaId
AnotherId = "kasanPreet436"
console.log(MyInstaId);
console.log(AnotherId);

// no change in orignal data as copy is passed

let Mydetail = {
    name: "Preet kasana",
    email: "kasanapreet436@gmail.com"
}

let MydetailNew = Mydetail;

Mydetail.email = "preetkasana@gmail.com";

console.log(Mydetail);
console.log(MydetailNew);
console.log(Mydetail.email);

// orignal data is also modified in Non primitive 




