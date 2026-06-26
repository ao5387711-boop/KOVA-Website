// Smooth Scroll
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// Fade In Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card,.numbers div,.hero img").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// Hero Images Parallax
document.addEventListener("mousemove", e => {

    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;

    document.querySelectorAll(".hero img").forEach(img => {
        img.style.transform = `translate(${x}px, ${y}px)`;
    });

});
function toggleMenu(){

document
.getElementById("navMenu")
.classList.toggle("active");

}
