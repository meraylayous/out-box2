document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("mainHeader");

  window.addEventListener("scroll", function () {
      console.log("Scroll Y:", window.scrollY); // للتأكد أن الكود يُنفذ
      if (window.scrollY > 120) {
          header.classList.add("active");
      } else {
          header.classList.remove("active");
      }
  });
});

//********************  mobile menu  ****************************
const mobileNav1 = document.querySelector('.mobilenav');

const closeBtn = document.querySelector('.mnav__close-btn');



closeBtn.addEventListener('click' , () => {
   
     
 mobileNav1.classList.toggle("active");
 
 
  });




  
// move to web section Application
  document.addEventListener("DOMContentLoaded", function () {
    const appLink = document.getElementById("appLink");
    if (appLink) {
        appLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "web.html#app";
            window.location.href = "index.html#about";
        });
    }

   
    if (window.location.hash === "#app" || window.location.hash === "#about" ) {
        document.getElementById("app")?.scrollIntoView({ behavior: "smooth" });
    }
});


// scrollToTopBtn  
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        scrollToTopBtn.classList.remove("opacity-0");
      } else {
        scrollToTopBtn.classList.add("opacity-0");
      }
    });
  
    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });



//
 document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // منع السلوك الافتراضي للنقر على الروابط

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = document.querySelector("header").offsetHeight; // ارتفاع الـ header
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset; // تعويض ارتفاع الـ header

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});



















































