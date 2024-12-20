// let a=20
// if(a==10 || a==20){
//     console.log('a is 20 or 10')
// }

// let day=3;
// let dayname;
// switch(day){
//     case 1:
//         dayname='Sunday';
//         break;
//         case 2:
//             dayname='monday';
//             break;
//             case 3:
//                 dayname='tuesday';
//                 break;
//                 case 4:
//                     dayname='wednesday';
//                     break;
//                     case 5:
//                         dayname='thursday';
//                         break;
//                         case 6:
//                             dayname='friday';
//                             break;
//                             case 7:
//                                 dayname='saturday';
//                                 break;
//                             default:
//                                 dayname='Invalid';
//                                 break;
// }
// console.log(dayname);

// for(let i=1;i<=5;i++){
//     console.log(i);
// }

const person={
    name:'ajmal',age:23,place:'Alappuzha'
}
let txt='';
for(let x in person){
    txt+=person[x]+ " ";
}
console.log(txt);

const numbers=[5,7,1,9,22];
let tt='';
for(let x in numbers){
    tt+=numbers[x]+' ';
}
console.log(tt); 

let lang='javascript';
let text='';
for(let x of lang){
    text+=x +'\n';
}
console.log(text);