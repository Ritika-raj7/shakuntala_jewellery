let slides = document.querySelector(".slides");

let count = 0;

setInterval(() => {

    count++;

    if(count > 3){
        count = 0;
    }

    slides.style.transform =
    `translateX(-${count * 500}px)`;

},3000);


const icons = document.querySelectorAll('.social');

icons.forEach((icon,index)=>{

    icon.style.animationDelay =
        `${index*0.2}s`;

    icon.addEventListener('mouseenter',()=>{
        icon.style.transform =
            'translateX(10px) scale(1.2) rotate(10deg)';
    });

    icon.addEventListener('mouseleave',()=>{
        icon.style.transform =
            'translateX(0) scale(1)';
    });

});