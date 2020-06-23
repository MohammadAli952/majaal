var navBar = document.querySelector(".all-nav");
var navLinks = document.querySelectorAll('.nav-link');
document.querySelectorAll('i.fa-search')[1].onclick = function() {
  // if(document.querySelector("#search").style.display =='block'){
  //   document.querySelector("#search").style.display = 'none';
  // }
  // else{
  //   document.querySelector("#search").style.display = 'block';
  // }
  $('#search').slideToggle();
}
// window.onscroll = function(){
//   if(window.scrollY>0){
//     navBar.classList.remove("navbar-light");
//     document.querySelector('.navbar-brand').style.color = 'white';
//     for(var i=0;i<document.querySelectorAll('.navbar-nav .nav-item').length;i++){
//       document.querySelectorAll('.nav-link')[i].style.color = 'white';
//     }
//     navBar.classList.add("change-navbar");
//   }
//
//   else{
//     navBar.classList.remove("change-navbar");
//     document.querySelector('.navbar-brand').style.color = '#d63447';
//     for(var i=0;i<document.querySelectorAll('.navbar-nav .nav-item').length;i++){
//       document.querySelectorAll('.navbar-nav .nav-item')[i].style.color = 'grey';
//     }
//   }
// }
window.onscroll = function() {
  if (window.scrollY > 0) {
    navBar.classList.add("maroon-bg");
    for (var i = 0; i < document.querySelectorAll('.navbar-nav .nav-item').length; i++) {
      navLinks[i].classList.remove('grey');
      navLinks[i].classList.add('white');
      document.querySelector('.navbar-brand').classList.remove('maroon');
      document.querySelector('.navbar-brand').classList.add('white');
    }
    

  }
  else{
    navBar.classList.remove("maroon-bg");
    for (var i = 0; i < document.querySelectorAll('.navbar-nav .nav-item').length; i++) {
      navLinks[i].classList.add('grey');
      navLinks[i].classList.remove('white');
      document.querySelector('.navbar-brand').classList.remove('.navbar-light');
      document.querySelector('.navbar-brand').classList.add('maroon');
      document.querySelector('.navbar-brand').classList.remove('white');
  }
}
}
