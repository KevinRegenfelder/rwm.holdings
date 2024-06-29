function openPopup(contentId) {
    var overlay = document.getElementById('popupOverlay');
    var blurOverlay = document.getElementById('blurOverlay');
    var popupContent = document.getElementById('popupContent');
    var contentTemplate = document.getElementById(contentId);
    var closeBtn = document.getElementById('closeBtn');

    // Setze den Inhalt des Popups
    popupContent.innerHTML = contentTemplate.innerHTML;

    // Popup und Blur-Overlay anzeigen
    overlay.style.display = 'flex';
    blurOverlay.style.display = 'block';

    // Füge Übergangseffekte hinzu
    overlay.style.transition = 'opacity 0.5s';
    blurOverlay.style.transition = 'opacity 1s';

    // Setze die Opazität auf 0 für einen weichen Übergang
    overlay.style.opacity = 0;
    blurOverlay.style.opacity = 0;

    // Forciere den Browser, die Änderungen zu rendern
    setTimeout(function() {
        overlay.style.opacity = 1;
        blurOverlay.style.opacity = 1;
    }, 10);

    // Klick-Event für das Schließen des Popups beim Klick auf das Kreuz
    closeBtn.addEventListener('click', function() {
        closePopup();
    });

    // Klick-Event für das Schließen des Popups beim Klick außerhalb des Popups
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            closePopup();
        }
    });

    // Verhindern, dass das Popup geschlossen wird, wenn innerhalb des Popups geklickt wird
    document.querySelector('.popup-content').addEventListener('click', function(event) {
        event.stopPropagation();
    });

    function closePopup() {
        // Setze die Opazität auf 0 für einen weichen Übergang
        overlay.style.opacity = 0;
        blurOverlay.style.opacity = 0;

        // Verzögere das Schließen des Popups, bis der Übergang beendet ist
        setTimeout(function() {
            overlay.style.display = 'none';
            blurOverlay.style.display = 'none';
        }, 500);
    }
}

document.getElementById('ButtonFirst').addEventListener('click', function() {
    openPopup('popupContentFirst');
});

document.getElementById('ButtonSec').addEventListener('click', function() {
    openPopup('popupContentSecond');
});

document.getElementById('ButtonThird').addEventListener('click', function() {
    openPopup('popupContentThird');
});