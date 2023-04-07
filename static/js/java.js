let valueDisplays = document.querySelectorAll(".num");
let interval = 2000;

valueDisplays.forEach((valueDisplays) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplays.getAttribute("data-val"));
  let duration = Math.floor(interval/endValue);
  let counter = setInterval(function(){
    startValue += 10;
    valueDisplays.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
      setTimeout(updateCounter, 40)
    }
    }, duration);
});
 



// navber-control

// const nav = document.querySelector("nav");
// document.addEventListener("scroll", function(){
//    // console.log(window.scrolly)
//    if(window.scrollY > 50){
//       nav.style.backgroundColor = "rgb(0,0,0,0,.89)";
//       nav. style.width = "100%";
//       // nav.style.backdropFilter = "blur(10px)"
//       nav.style.height ="fit-content";

//    } else {
//       nav.style.width = "90%";
//       nav.style.height = "13vh";
//       // nav.sty
//       nav.style.backgroundColor = "rgba(0,0,0,0)";


//    }

//    }

// }
// )


let navbar = document.querySelector('.navbar')

window.addEventListener('scroll',()=>{
    if(window.scrollY>50){
        navbar.classList.add('bgWhite')
    }
    else{
        navbar.classList.remove('bgWhite')
    }
})


