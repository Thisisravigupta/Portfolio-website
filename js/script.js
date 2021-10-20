// --------Change nav-btn and open navigation----------
document.querySelector(".nav-btn").addEventListener("click", function () {
  if (document.querySelector(".nav").style.display == "none") {
    document.querySelector(".nav").style.display = "block";
    document.querySelector("span").classList.add("active");
  } else {
    document.querySelector(".nav").style.display = "none";
    document.querySelector("span").classList.remove("active");
  }
});

// -------Close div when clicking on overlay--------
document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector("span").classList.remove("active");
  document.querySelector(".nav").style.display = "none";
});

// -----------Testimonial-------------
document.querySelector(".bar1").addEventListener("click", function () {
  document.querySelector(".card-1").style.display = "block";
  document.querySelector(".card-2").style.display = "none";
  document.querySelector(".card-3").style.display = "none";
  document.querySelector(".bar1").classList.add("active");
  document.querySelector(".bar2").classList.remove("active");
  document.querySelector(".bar3").classList.remove("active");
});
document.querySelector(".bar2").addEventListener("click", function () {
  document.querySelector(".card-1").style.display = "none";
  document.querySelector(".card-2").style.display = "block";
  document.querySelector(".card-3").style.display = "none";
  document.querySelector(".bar1").classList.remove("active");
  document.querySelector(".bar2").classList.add("active");
  document.querySelector(".bar3").classList.remove("active");
});
document.querySelector(".bar3").addEventListener("click", function () {
  document.querySelector(".card-1").style.display = "none";
  document.querySelector(".card-2").style.display = "none";
  document.querySelector(".card-3").style.display = "block";
  document.querySelector(".bar1").classList.remove("active");
  document.querySelector(".bar2").classList.remove("active");
  document.querySelector(".bar3").classList.add("active");

});
// ------Close Nav when clicking on link------
let listItem = document.querySelectorAll(".list-item");
for (let i = 0; i <= listItem.length; i++) {
  listItem[i].addEventListener("click", function () {
    document.querySelector(".nav").style.display = "none";
    document.querySelector("span").classList.remove("active");
  });
}
