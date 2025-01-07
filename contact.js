const theInput = document.querySelector('.inpute');
const span = document.querySelector('.span')
const button = document.querySelector('.button');
console.log(theInput)
function add(){
    
    let lengInput = theInput.value.length;
    if (lengInput >= 10){
        button.classList.add('but_show');
    }
    else{
        button.classList.remove('but_show');
    }
}
theInput.addEventListener('input',add )
