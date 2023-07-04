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

// Problem.
// 1. Create an input field and a submit button.
// 2. Create a list below it.
// 3. On submitting a text in the input field it should add the new text to the list.
// 4. Add the new changes to a new root element and add it to the 'root'