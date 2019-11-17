console.log("cekscript");

const buttonNext = document.getElementById("next");
const buttonPrev = document.getElementById("prev");

const slider = document.getElementsByClassName("slider")[0];

const sliderItem = slider.children;
var width = 0
var slide = false

buttonNext.addEventListener("click",function(){
slide = true
for (let i=0; i<sliderItem.length; i++){
    const item = sliderItem[i];
    if (slide) {
    console.dir(item)
    width -= item.clientwidth;
    slide = false;
  }
item.slide.transform = 'translateX(${width}px)';
 }
}





const arr =[2, 4, 6, "apple", false]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}