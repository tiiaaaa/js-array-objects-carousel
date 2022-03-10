

const objectArray = [
    {
        items:'img/01.jpg',
        title:'Svezia',
        text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },

    {
        items:'img/02.jpg',
        title:'Svizzera',
        text:'Lorem ipsum',
    },

    {
        items:'img/03.jpg',
        title:'Gran Bretagna',
        text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },

    {
        items:'img/04.jpg',
        title:'Germania',
        text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    },

    {
        items:'img/05.jpg',
        title:'Paradise',
        text:'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    },
];

let sliderContent = "";
let thumbnailsContent = "";

for (let i = 0; i < objectArray.length; i = i + 1){
    sliderContent += `
    <div class="my-carousel">
        <img class="my-carousel-picture" src="${objectArray[i].items}" alt="${objectArray[i].title}">
        <div class="my-carousel-description position-absolute bottom-0 end-0 text-end text-white">
            <h2>${objectArray[i].title}</h2>
            <p>${objectArray[i].text}</p>
        </div>
    </div>`

    thumbnailsContent += `
    <div class="my-thumbnail">
        <img class="my-thumbnail-img" src="${objectArray[i].items}" alt="${objectArray[i].title}">
    </div>`
}

const sliderElement = document.querySelector('.my-carousel-images');
sliderElement.classList.add("position-relative");
sliderElement.innerHTML = sliderContent;

const thumbnailsElement = document.querySelector('.my-thumbnails');
thumbnailsElement.classList.add("d-flex");
thumbnailsElement.innerHTML += thumbnailsContent;

let activeElement = 0;

document.getElementsByClassName("my-carousel")[activeElement].classList.add("active");

document.getElementsByClassName("my-thumbnail")[activeElement].classList.add("active");

const nextBtn = document.querySelector("div.my-next");
nextBtn.addEventListener("click", function(){
    document.getElementsByClassName("my-carousel")[activeElement].classList.remove("active");
    document.getElementsByClassName("my-thumbnail")[activeElement].classList.remove("active");
    
    if(activeElement == objectArray.length - 1){
        activeElement = 0
    }else{
        activeElement++;
    }

    document.getElementsByClassName("my-carousel")[activeElement].classList.add("active");
    document.getElementsByClassName("my-thumbnail")[activeElement].classList.add("active");
});


const prevBtn = document.querySelector("div.my-previous");
prevBtn.addEventListener("click", function(){
    document.getElementsByClassName("my-carousel")[activeElement].classList.remove("active");
    document.getElementsByClassName("my-thumbnail")[activeElement].classList.remove("active");
    
    if(activeElement == 0){
        activeElement = objectArray.length - 1
    }else{
        activeElement--;
    }

    document.getElementsByClassName("my-carousel")[activeElement].classList.add("active");
    document.getElementsByClassName("my-thumbnail")[activeElement].classList.add("active");
})




