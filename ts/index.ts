console.log("hello world");
let a:string="alishba";
let b:number=10;
console.log(a)
console.log(b)
let d:any="hello";
console.log(d)
let e:unknown=80;
console.log(e);
const food:string[]=["ali","amjad","irael"]
console.log(food[0])
const foo:number[]=[1,2,10]
console.log(foo[0]);
let t:[number,string,boolean];
t=[90,"alishba",true]
console.log(t[0])
let k :{
    tea:number,coffee:string,on:boolean
}={tea:30,coffee:"one cup",on:false

}
console.log(k)
//enums
enum our{
    not=404,
    yes=20
}
console.log(our.not)
//casting
let x:unknown =5456;
console.log(typeof(x))
;
let f:number=22;
console.log(f);
let g="ahmed";
let o="khan";
let n=g+o;
console.log(n);


let l:string|number=122
console.log(l)


interface hy{
    height:number,
    width:string,
    circlr:boolean
}
let hello :hy={
    height:20,
    width:"alishba",
    circlr:true
}
console.log(hello);
type demo = string|number;
let m:demo=10;
let p:demo=20;
console.log(m);

function hy(num){
 
    return num
}
hy(5)
