let text = document.getElementById('textaboutposse');
text.innerHTML = 'POSSEとは - Edited';

let color = document.getElementsByClassName('event-head1');
color[0].style.color = "#FF0000";

let activitytext = document.querySelectorAll('.ac-text');
activitytext[0].style.fontSize ="10px";

let x = document.createElement('h2');
x.textContent = 'テスト見出し';
x.className = "test";

let y = document.getElementById('section');
y.appendChild(x);

const button =document.getElementById('button');
button.addEventListener('click',function(){
      console.log('こんにちは');
})
