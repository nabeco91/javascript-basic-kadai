const clickBtn = document.getElementById('btn');
const textH2 = document.getElementById('text');

clickBtn.addEventListener('click', () =>{
    textH2.textContent = 'ボタンをクリックしました';
});