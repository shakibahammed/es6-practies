// object destructure
const person ={ name:"murad" ,address :"dhaka" , phone :013486473653 ,fId:"gshdgs" ,gfName:"rsjk"};
const {address,gfName,phone } = person;
console.log(address,gfName,phone);

// Array destructure
const friends =["sharuk khan"," amir khan ","salman khan ","shakib" ,"rakib","sohag"];
const [frnd1,frnd2,frnd3 ,...reamingFrnd ]=friends;
console.log(frnd1,frnd2,frnd3);
console.log(reamingFrnd)