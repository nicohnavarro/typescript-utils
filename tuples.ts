type ThreeDCoorditate = [x:number,y:number,z:number];

function add3DCoordiante(c1:ThreeDCoorditate,c2:ThreeDCoorditate): ThreeDCoorditate{
  return [
    c1[0] + c2[0],
    c1[1] + c2[1],
    c1[2] + c2[2],
  ]
}

console.log(add3DCoordiante([1,2,3],[2,3,4]));

function simpleStringState(initial:string) : [()=> string,(v:string)=>void]{
  let str: string = initial;
  return [
    ()=>str,
    (v:string)=>{
      str=v;
    }
  ]
}

const [strGetter1,srtSetter1] = simpleStringState('first');
console.log(strGetter1())
srtSetter1('second');
console.log(strGetter1())