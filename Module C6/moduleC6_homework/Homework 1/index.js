const btn = document.querySelector('.btn');
const btnIcon1 = document.querySelector('.btn_icon_1');
const btnIcon2 = document.querySelector('.btn_icon_2');

btn.addEventListener('click', () => {
    btnIcon1.classList.toggle('invis');
    btnIcon2.classList.toggle('invis');
})