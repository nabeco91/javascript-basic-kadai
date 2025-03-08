const clickBtn = document.getElementById('btn');
const textH2 = document.getElementById('text');

clickBtn.addEventListener('click', () =>{
  setTimeout (()=> {
    textH2.textContent = 'ボタンをクリックしました';
},2000); 
});