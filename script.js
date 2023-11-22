document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtn = document.getElementById("read-more");
    const hiddenParagraphs = document.querySelectorAll("#about-me-list li:not(:first-child)");

    let isExpanded = false;

    readMoreBtn.addEventListener("click", function() {
        hiddenParagraphs.forEach(para => {
            para.style.display = isExpanded ? "none" : "block";
        });

        readMoreBtn.textContent = isExpanded ? "Read more..." : "Read less...";
        isExpanded = !isExpanded;
    });
    
});
// JavaScript code to toggle visibility of description paragraphs
document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    readMoreBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const description = this.previousElementSibling; 

            if (description.style.display === 'none' || description.style.display === '') {
                description.style.display = 'block';
                this.textContent = 'Read less';
            } else {
                description.style.display = 'none';
                this.textContent = 'Read more...';
            }
        });
    });
});
document.getElementById('showEducation').addEventListener('click', function() {
    var educationSection = document.getElementById('education-section');
    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
        this.style.display = 'none'; 
    }
});

// color- changing
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.querySelector(".navbar-toggler");
    const navbar = document.querySelector(".navbar");
  
    navbarToggle.addEventListener("click", function () {
      navbar.classList.toggle("changed-color");
    });
  });
  


