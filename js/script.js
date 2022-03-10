// const items = [
//     'img/01.jpg',
//     'img/02.jpg',
//     'img/03.jpg',
//     'img/04.jpg',
//     'img/05.jpg'
// ];

// const title = [
//     'Svezia',
//     'Svizzera',
//     'Gran Bretagna',
//     'Germania',
//     'Paradise'
// ]

// const text = [
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     'Lorem ipsum',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
//     'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
// ]

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
        <div class="my-carousel-description">
            <h2>${objectArray[i].title}</h2>
            <p>${objectArray[i].text}</p>
        </div>
    </div>`
    console.log(sliderContent)
}








