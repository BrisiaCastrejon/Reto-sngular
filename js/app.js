const theTitle = document.querySelector('h1');
const newText = document.querySelector('input');
const titleButton = document.querySelector('a');

titleButton.addEventListener('click', (event) => {
  
  console.log("prueba de gitHubPages");
  
  theTitle.innerHTML = newText.value;
  theTitle.classList.add('estiloNuevo');
  newText.value = '';  

})
