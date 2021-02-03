class oldMan{
    constructor(){
        this.man = "byden";

    }
}

class child extends oldMan{
    constructor(name){
        super()
        this.name =name ;
    }
}
const baby1 = new child ("Tom");
const baby2 = new child ("jarry");
const baby3 = new child("jack")
console.log(baby1 , baby2 , baby3 );




// class parent{
//     constructor(){
//         this.fatherName ="rana"
//     }
// }
// class child extends parent{
//     constructor(name){
//         super()
//         this.name = name;
//     }
// }
// const baby1 =new child("rayad");
// const baby2 = new child ("rahid");
// console.log(baby1 ,baby2);
