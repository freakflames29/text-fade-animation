const thetext=document.querySelector('.fancy');
const theContent=thetext.textContent;
// alert(theContent);
const theSt=theContent.split("");

console.log(theSt);

thetext.innerHTML="";

for(let i=0;i<theSt.length;i++)
{
  thetext.innerHTML+="<span>"+theSt[i]+"</span>";
  console.log(theSt[i]);
}

let char=0;
let timer=setInterval(onTick,50);
function onTick()
{
  const span=thetext.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
}
