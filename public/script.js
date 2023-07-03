const rootEle = document.getElementById('root');
        
for(let i = 0; i <= 100; i++){
  const cDiv = document.createElement('div');
  cDiv.className = 'childdiv';
  cDiv.textContent = i;
  
  if(i%2===0){
    cDiv.style.backgroundColor = 'green'
  }else{
    cDiv.style.backgroundColor = 'yellow'
  }
  let j;
  for( j = 2; j < i; j++){
    if(i%j==0){
      break;
    }
  }
  if(i==j){
    cDiv.style.backgroundColor = 'red'
  }
  

  rootEle.appendChild(cDiv);
}