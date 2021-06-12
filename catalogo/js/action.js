window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})


//window.addEventListener("scroll",function(){
//    var element = document.querySelector(".container_up");
//   element.classList.toggle("show_up", window.scrollY > 650);
//})


window.onscroll = function(){
    if(document.documentElement.scrollTop > 650){
        document.querySelector('.container_up')
        .classList.add('show_up');
    }else{
        document.querySelector('.container_up')
        .classList.remove('show_up');
    }
}

document.querySelector('.container_up')
.addEventListener('click',() =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});