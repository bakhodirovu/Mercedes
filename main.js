window.addEventListener('DOMContentLoaded',function (){
    const menuBtn = document.querySelector('.menu_btn'),
        navigation = document.querySelector('.navbar_nav'),
        navigationItem = document.querySelectorAll('.navbar_nav a'),
        scrolBtn = document.querySelector('.scrol_top_btn');

    menuBtn.addEventListener('click', ()=>{
        menuBtn.classList.toggle('active')
        navigation.classList.toggle('active')
    });
    navigationItem.forEach(navitem =>{
        navitem.addEventListener('click',()=>{
            menuBtn.classList.remove('active')
            navigation.classList.remove('active')
        })
    });
    window.addEventListener('scroll',function(){
        scrolBtn.classList.toggle('active',this.scrollY > 400)   
    })
    scrolBtn.addEventListener('click',function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });


});