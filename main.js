const menuToggle = document.getElementById('menuToggle');

const dropDownMenu = document.getElementById('dropDownMenu')

menuToggle.addEventListener('click', ()=>{

    if(dropDownMenu.style.display = ' none'){

        dropDownMenu.style.display='flex';
    }
    dropDownMenu.style.display = 'none'
})