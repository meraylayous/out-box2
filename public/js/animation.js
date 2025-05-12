document.addEventListener("DOMContentLoaded", animateElements);
window.addEventListener("resize", animateElements); // تحديث عند تغيير حجم الشاشة

function animateElements() {
  const robot = document.getElementById("robot");
  const square1 = document.getElementById("square1");
  const square2 = document.getElementById("square2");
  const square3 = document.getElementById("square3");
  const square4 = document.getElementById("square4");

  const screenWidth = window.innerWidth;
  const isMobile = screenWidth <= 500; // تعريف الهاتف

  console.log("Screen width:", screenWidth, "Is Mobile:", isMobile); // ✅ للتحقق من عمل الشرط

  setTimeout(() => {
    // تكبير الروبوت بحجم مختلف حسب الشاشة
    robot.style.top = isMobile ? "40%" : "50%";
    robot.style.left = isMobile ? "40%" : "50%";
    robot.style.transform ="translate(-50%, -50%)",
    robot.style.transform = isMobile ? " scale(3)" : " scale(5)";

    // تعديل مواقع المربعات
    square1.style.top = "0px";
    square1.style.left = isMobile ? "300px" : "500px";

    square2.style.top = "0px";
    square2.style.right = isMobile ? "300px" : "450px";

    square3.style.bottom = isMobile ? "-60px" : "-200px";
    square3.style.left = isMobile ? "300px" : "500px";

    square4.style.bottom = isMobile ? "-60px" : "-200px";
    square4.style.right = isMobile ? "300px" : "450px";
  }, 1000); // التأخير لمدة ثانية
}