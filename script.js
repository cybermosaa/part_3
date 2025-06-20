// Mobile menu toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});

// Collection
window.addEventListener('scroll', function() {
 var backToTop = document.getElementById('backToTop');
   if (window.pageYOffset > 300) {
   backToTop.style.display = 'block';
    } else {
   backToTop.style.display = 'none';
    }
    });

document.getElementById('backToTop').addEventListener('click', function() {
window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile menu toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
document.querySelector('.nav-menu').classList.toggle('show');
 });
// Mobile menu functionality
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
  const isExpanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !isExpanded);
document.getElementById('navMenu').classList.toggle('active');
 });

// Mobile menu functionality
 const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
 const navMenu = document.querySelector('.nav-menu');

  mobileMenuToggle.addEventListener('click', () => {
  const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
  mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
  navMenu.classList.toggle('active');
  mobileMenuToggle.classList.toggle('open');
   });

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
link.addEventListener('click', () => {
   if (window.innerWidth <= 768) {
     navMenu.classList.remove('active');
     mobileMenuToggle.setAttribute('aria-expanded', 'false');
     mobileMenuToggle.classList.remove('open');
      }
      });
   });

// Back to top button
  window.addEventListener('scroll', function() {
   var backToTop = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
     backToTop.style.display = 'block';
     } else {
     backToTop.style.display = 'none';
     }
   });

document.getElementById('backToTop').addEventListener('click', function() {
 window.scrollTo({ top: 0, behavior: 'smooth' });
        });

// Shopping Cart
// Form validation
 document.querySelector('.checkout-form').addEventListener('submit', function(e){
  const inputs = this.querySelectorAll('input[required]');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      input.style.borderColor = 'red';
    } else {
      input.style.borderColor = '#ddd';
    }
  });

  if (!isValid) {
    e.preventDefault();
    alert('Please fill in all the required field')
  }
 });
 
// Back to top
window.onscroll = function () {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
}

document.getElementById("backToTop").addEventListener("click", function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
window.addEventListener("scroll", function () {
  const btn = document.getElementById("backToTop");
  btn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Layout
function resizeGridItem(item){
  const grid = document.querySelector(".my-looks");
  const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  const contentHeight = item.querySelector("img, video")?.getBoundingClientRect().height || 0;
  const rowSpan = Math.ceil((item.querySelector('img').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = "span " + rowSpan;

}

function resizeAllGridItems(){
  const allItems = document.querySelectorAll(".my-looks-items");
  for (let i=0; i < allItems.length; i++){
    resizeGridItem(allItems[i]);
  }
}
window.addEventListener("load", resizeAllGridItems);
window.addEventListener("resize", resizeAllGridItems);

// Enquiry
document.getElementById('enquiryForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank for the enquiry! we will get in touch soon.');
})

// Care Guide
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
  if (document.body.scroll > 300 || document.documentElement.scrollTop > 300){
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
}
document.getElementById("backToTop").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
 });
 });

console.log("Script connected successfully!");

// jQuery test
$(document).ready(function () {
  console.log("jQuery is working!");
});



