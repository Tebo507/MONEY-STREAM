// Money Stream Website Script

document.addEventListener("DOMContentLoaded", () => {

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade in cards while scrolling
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    },{
        threshold:0.2
    });

    cards.forEach(card=>{
        card.classList.add("hidden");
        observer.observe(card);
    });

});

// Scroll to top button

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="95px";
topButton.style.right="22px";
topButton.style.width="50px";
topButton.style.height="50px";
topButton.style.border="none";
topButton.style.borderRadius="50%";
topButton.style.background="#0a7c39";
topButton.style.color="white";
topButton.style.fontSize="22px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";
topButton.style.zIndex="999";

window.addEventListener("scroll", ()=>{

    if(window.scrollY>300){
        topButton.style.display="block";
    }else{
        topButton.style.display="none";
    }

});

topButton.onclick=function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

};

// Header shadow

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>30){

header.style.boxShadow="0 8px 25px rgba(0,0,0,.2)";

}else{

header.style.boxShadow="0 3px 12px rgba(0,0,0,.15)";

}

});

// Button hover animation

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-3px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});
