let navbar = document.querySelector(".navbar");
window.onscroll = () =>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

const skills_wrap = document.querySelector(".about-skills"),
      skills_bar = document.querySelectorAll(".progress-line");
      window.addEventListener("scroll", () => {
        checkScroll(skills_wrap);
      })