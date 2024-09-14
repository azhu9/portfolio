const toggler = document.querySelector(".toggler-btn");
// const hiddenElements = document.querySelectorAll(".hidden");

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
     
//     if(entry.isIntersecting){
//       entry.target.classList.add("show");
//     }
//     else {
//       entry.target.classList.remove("show");
//     }
//   });
// });

toggler.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("collapsed");
});

hiddenElements.forEach((el) => observer.observe(el));