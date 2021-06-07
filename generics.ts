function simpleTState<T>(initial:T) : [()=> T,(v:T)=>void]{
let val: T = initial;
  return [
    ()=>val,
    (v:T)=>{
      val=v;
    }
  ]
}

// const [tGetter1,tSetter1] = simpleTState(10);
// console.log(tGetter1())
// tSetter1(1);
// console.log(tGetter1())

// const [tGetter2,tSetter2] = simpleTState<number | null>(null);
// console.log(tGetter2())
// tSetter2(1);
// console.log(tGetter2())

interface Rank<RankItem>{
  item:RankItem;
  rank:number;
}

function ranker<RankItem>(items: RankItem[], rank:(v:RankItem)=> number):RankItem[]{
  const ranks :Rank<RankItem>[] = items.map((item)=> ({
    item,
    rank:rank(item)
  }));
  console.log('rank',ranks)

  ranks.sort((a,b)=> a.rank - b.rank);

  return ranks.map((rank)=> rank.item);
}

interface Pokemon {
  name:string;
  hp:number;
}

const pokemon:Pokemon[] =[
  {
    name:'bulvasaur',
    hp:6
  },{
    name:'charmander',
    hp:4
  },
]

const ranks = ranker(pokemon,({hp}) => (hp));
console.log(ranks);
