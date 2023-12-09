document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("navButton").addEventListener("click", function() {
      var sections = document.querySelectorAll("section");

      sections.forEach(function(section) {
        section.classList.toggle("darktextcontainer");
        section.classList.toggle("textcontainer");
      });
    });
  });