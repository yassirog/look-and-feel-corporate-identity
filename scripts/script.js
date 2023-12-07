document.addEventListener('DOMContentLoaded', function() {
    var navButton = document.getElementById('navButton');

    if (navButton) {
        alert('Knop gevonden!');
        navButton.addEventListener('click', function() {
            alert('Knop geklikt!');
            document.body.classList.toggle('blue');
        });
    }
});
