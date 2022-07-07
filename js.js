let slider = document.querySelector('.activities_slider');
let slide;
let slides = [];
let image;
let title;
//let currentSlide;

function createSlide(){
     slide = document.createElement("div");
     slide.classList.add("activities_slide");

    image = document.createElement("img");
    image.classList.add("activities_slide_img");

    title = document.createElement("h3");
    title.classList.add("activities_slide_title");

    slide.appendChild(image);
    slide.appendChild(title);

    return slide
}


for (let i = 0;i<8;i++){
slider.appendChild(createSlide());
}

slides = document.querySelectorAll(".activities_slide_img")
console.log(slides)
let counter = 1;
Array.from(slides).forEach(currentSlide=>{
    currentSlide.src = `party_images/party${counter}.png`;
    counter++;
})


