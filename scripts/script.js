document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("navButton").addEventListener("click", function() {
        // Zoek alle elementen met de class "textcontainer"
        var sections = document.querySelectorAll("section");

        // Toggle de classes voor elke section
        sections.forEach(function(section) {
          section.classList.toggle("darktextcontainer");
          section.classList.toggle("textcontainer")
        });
      });
    });
