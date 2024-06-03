const cards = document.querySelectorAll(".card");
const change1 = document.querySelector("#change1");
const active=document.querySelector(".acti")

change1.addEventListener("click", () => {
    const elements = document.querySelectorAll('.main');
    const dropdown=document.querySelectorAll('.dropdown');
    const acti= document.querySelectorAll('.acti')

    // Loop through each element and remove it
    elements.forEach(function(element) {
        element.parentNode.removeChild(element);
    });

    document.querySelectorAll('.page').forEach(function(ele){
        ele.parentNode.removeChild(ele);
    })

    dropdown.forEach(function(ele){
        ele.parentNode.removeChild(ele);
    })

    
    active.classList.add("container")
    active.classList.remove("acti")
});


// Get the <h4> element
var modalTitle = document.querySelector('#staticBackdrop .modal-body h4');

// Change the content of the <h4> element
modalTitle.innerHTML = "<b>are sure do you want to deactivate the plan</b>";












// Get all <li> elements within the <ul> with the style color: white
const liElements = document.querySelectorAll('ul[style="color: white;padding: 0;margin: 0;"] li');

// Add the 'nav-link' class to each <li> element
liElements.forEach(li => {
    li.classList.add('nav-link');
    li.style.paddingLeft='44px'
});





const opensidebar = document.querySelector('#opensidebar');
const form = document.getElementById('form');

opensidebar.addEventListener('click',openform);

function openform(event){

    console.log("view event is called");
    form.style.display = 'block';
    form.style.position = "fixed"; 
    form.style.top = "0"; 
    form.style.right = "0";
    form.style.backgroundColor='white'
    form.style.paddingLeft='10px'
    form.style.overflow = 'auto'; 
    form.style.height='100vh'
    form.style.fontWeight='normal'
    form.style.margin="0px";
    document.querySelector('#overlay').style.display='block'
    if(opensidebar.contains(event.target)){
        var header=document.querySelector('#form header h1')
header.innerHTML='<button style="background: transparent; border: none;outline: none;" class="close"><img src="./img/LetsEat Offers-List/Group 8110.svg" alt=""></button>create offer'
console.log(header.innerHTML)

        var submission=document.querySelector('#submission')
submission.innerHTML='<button id="create" class="create close" ><b>create</b></button>'

    }


}







const close=document.querySelector('.close')

close.addEventListener('click',()=>{
    form.style.display = 'none';
    document.querySelector('#overlay').style.display='none'
    if(close.textContent==='edit'){
        console.log("inside it")
    }

})

const form1=document.querySelector("#form1")

form1.addEventListener('submit',(event)=>{
    event.preventDefault()
    const create=document.querySelector('#create')
      if(create.textContent==='edit'){
        form.style.display = 'none';

        var header=document.querySelector('#form header h1')
        header.innerHTML='<button style="background: transparent; border: none;outline: none;" class="close"><img src="./img/LetsEat Offers-List/Group 8110.svg" alt=""></button>edit offer'
        console.log(header.innerHTML)
        
        var submission=document.querySelector('#submission')
        submission.innerHTML='<button id="create" class="create close" ><b>create</b></button>'
        
        
        
        openform()

      }
      else{
    form.style.display = 'none';
    document.querySelector('#overlay').style.display='none'
      }





})






const viewmore=document.querySelector('#viewmore')
viewmore.addEventListener('click',(event)=>{
    event.preventDefault()

    var header=document.querySelector('#form header h1')
header.innerHTML='<button style="background: transparent; border: none;outline: none;" class="close"><img src="./img/LetsEat Offers-List/Group 8110.svg" alt=""></button>view offer'
console.log(header.innerHTML)

var submission=document.querySelector('#submission')
submission.innerHTML='<button id="create" class="create close" style="background-color: white; border: 2px solid lightblue; color:lightblue;"><b>edit</b></button>'



openform()


})









const editdropdown=document.querySelector('#editdropdown')
editdropdown.addEventListener('click',()=>{
    var header=document.querySelector('#form header h1')
header.innerHTML='<button style="background: transparent; border: none;outline: none;" class="close"><img src="./img/LetsEat Offers-List/Group 8110.svg" alt=""></button>create offer'
console.log(header.innerHTML)

        var submission=document.querySelector('#submission')
submission.innerHTML='<button id="create" class="create close" ><b>create</b></button>'
openform()

})



const viewdropdown=document.querySelector('#viewdropdown')
viewdropdown.addEventListener('click',()=>{

    var header=document.querySelector('#form header h1')
header.innerHTML='<button style="background: transparent; border: none;outline: none;" class="close"><img src="./img/LetsEat Offers-List/Group 8110.svg" alt=""></button>view offer'
console.log(header.innerHTML)

var submission=document.querySelector('#submission')
submission.innerHTML='<button id="create" class="create close" style="background-color: white; border: 2px solid lightblue; color:lightblue;"><b>edit</b></button>'



openform()



})


document.body.addEventListener('click',(event)=>{

    if(opensidebar.contains(event.target)){
        

    }
    else if(viewmore.contains(event.target)){

    }
    
    else if(editdropdown.contains(event.target)){

    }
    else if(viewdropdown.contains(event.target)){

    }


    else if(form.style.display==='block'){
        console.log('passed')
        if(!form1.contains(event.target)){
            form.style.display='none'
            document.querySelector('#overlay').style.display='none'
            
        }
        
    }


})







// Function to handle window resize
function handleResize() {
    // Get the width and height of the window
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Log or do something with the window width and height
    console.log("Window width: " + windowWidth + ", Window height: " + windowHeight);
}

// Add event listener for window resize
window.addEventListener("resize", handleResize);

// Call handleResize function initially to get the initial window size
handleResize();


