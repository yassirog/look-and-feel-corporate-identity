//Site eerst inladen
document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    // Loop door alle secties en controleer welke momenteel in het zicht is
    document.querySelectorAll('section').forEach(function (section) {
        var sectionTop = section.offsetTop;
        var sectionBottom = sectionTop + section.clientHeight;

        // Controleer of de huidige scrollpositie binnen de grenzen van de sectie ligt
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            // Verwijder de "active" class van alle links
            document.querySelectorAll('.nav-link').forEach(function (link) {
                link.classList.remove('active');
            });

            // Voeg de "active" class toe aan de link die overeenkomt met de huidige sectie
            var juisteLink = document.querySelector('a[href="#' + section.id + '"]');
            if (juisteLink) {
                juisteLink.classList.add('active');
            }
        }
    });
});

  document.getElementById("navButton").addEventListener("click", function() {
    var btn = document.getElementById("navButton");

    //Controleer of de huidige tekst 'Donker' is
    if (btn.innerHTML === "Donker") {
        //Als het donker is, verander het naar 'Licht'
        btn.innerHTML = "Licht";
    } else {
        //Als het niet donker is (dus licht), verander het naar 'Donker'
        btn.innerHTML = "Donker";
    }
  });

  //Klik bij button met id: "navButton" wordt deze functie uitgevoerd
    document.getElementById("navButton").addEventListener("click", function() {
      //Alle sections selecten en een variabele aan geven
      var sections = document.querySelectorAll("section");

      //Alle sections togglen tussen 2 classes
      sections.forEach(function(section) {
        section.classList.toggle("darktextcontainer");
        section.classList.toggle("textcontainer");
      });
    });

  //Klik bij button met id: "navButton" wordt deze functie uitgevoerd
    document.getElementById("navButton").addEventListener("click", function() {

      //Body ook selecten en een variabele aan geven
      var body = document.body;
      //Body ook toggelen tussen 2 classes
    body.classList.toggle("darkbody");
    body.classList.toggle("body");
  });
});
