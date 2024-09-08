const ques= [
  {
    Q:'Je suis la structure d une page web',
    options:['CSS','DOM','HTML','JAVA']
  },
  {
    Q:'Je suis un langage de programmation le plus utilisé',
    options: ['Python','Java','Javascript','API']
  },
  {
    Q:'A quoi sert CSS?',
    options:['Styliser une page','Interragir avec la page','Fait parti de java','Autres']
  },
  {
  Q:'Qui est le PDG de Tesla?',
  options: ['Elon Musk','Jeff Bezos','Bill Gates','Mark Zuckerberg'],
  },
  { 
  Q:'Vous avez complètement réussi',
options:[]
}
]

const ans = ['HTML','Javascript','Styliser une page','Elon Musk'];

const question = document.querySelector('#ques');
const next = document.querySelector('#nxt');
const opt = document.querySelectorAll('.box2');
const tryagn =document.querySelector('.btn');


let m=0;

next.addEventListener('click',()=>{

  m+=1;
  quiz();
  if(m== ques.length-1){
    document.querySelector('.ans').style.display ='none';
    next.style.display = 'none';
    document.querySelector('.hding').style.display = 'none';
  }
})

function quiz(){

  question.innerHTML =ques[m].Q;
  for(let i =0;i<opt.length;i++){
  opt[i].innerHTML=ques[m].options[i];
  opt[i].parentElement.style.backgroundColor ='gray';
  next.style.display ='none';
  }


  for(item of opt){
    item.addEventListener('click',(e)=>{
      let value  = e.target.innerText;

      if(value == ans[m]){
          e.target.parentElement.style.backgroundColor ='green';
          next.style.display ='flex';
      }
else{
  document.querySelector('.box').style.display ='none';
  e.target.parentElement.style.backgroundColor = 'red';
  document.querySelector('.win').style.display = 'block';
  document.querySelector('.btn').style.display = 'flex';

}
    })
 
 
  }


}

tryagn.addEventListener('click',()=>{
  location.reload(true);
})

quiz();