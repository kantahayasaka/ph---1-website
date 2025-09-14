let text = document.getElementById('textaboutposse');
text.innerHTML = 'POSSEとは - Edited';

let color = document.getElementsByClassName('event-head1');
color[0].style.color = "#FF0000";

let activitytext = document.querySelectorAll('.ac-text');
activitytext[0].style.fontSize ="10px";

let x = document.createElement('h2');
x.textContent = 'テスト見出し';
x.className = "test";



const button =document.getElementById('button');
button.addEventListener('click',function(){
      console.log('こんにちは');
})
const hun = document.getElementById('button');
hun.addEventListener('click',function(){
      const header = document.getElementById("header");
      header.classList.toggle("is-open");
});
const mainvisual= document.getElementById('mainvisual');
window.addEventListener("scroll",function(){
      const window1 =document.getElementById("header");
      window1.classList.add("is-scroll");
      const window2 =document.getElementById("header");
      if(window.scrollY >= mainvisual.clientHeight - header.clientHeight){
            window2.classList.remove("is-scroll");
      }
});
document.addEventListener('DOMContentLoaded', function(){
      new Splide('.splide',{
            type: 'loop',
            perPage: 3,
            focus:0,
            padding: { left :28, right: 28},
            width:1096,
            breakpoints:{
                  768:{
                        perPage:1,
                        pagination:true,
                  },
                  1440:{
                        
                        pagination:false,
                  },
            },
      }).mount();
      new Splide('#slider1',{
            type:'loop',
            perPage:1,
            padding:{left: 0, right:0,},
            focus:0,
            top:10,
            width:1400,
      }).mount();
});


