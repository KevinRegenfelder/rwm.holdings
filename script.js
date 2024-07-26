function openPopup(contentId) {
    var overlay = document.getElementById('popupOverlay');
    var blurOverlay = document.getElementById('blurOverlay');
    var popupContent = document.getElementById('popupContent');
    var contentTemplate = document.getElementById(contentId);
    var closeBtn = document.getElementById('closeBtn');

    popupContent.innerHTML = contentTemplate.innerHTML;

    overlay.style.display = 'flex';
    blurOverlay.style.display = 'block';

    overlay.style.transition = 'opacity 0.5s';
    blurOverlay.style.transition = 'opacity 1s';

    overlay.style.opacity = 0;
    blurOverlay.style.opacity = 0;

    setTimeout(function() {
        overlay.style.opacity = 1;
        blurOverlay.style.opacity = 1;
    }, 10);

    closeBtn.addEventListener('click', function() {
        closePopup();
    });

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            closePopup();
        }
    });

    document.querySelector('.popup-content').addEventListener('click', function(event) {
        event.stopPropagation();
    });

    function closePopup() {
        overlay.style.opacity = 0;
        blurOverlay.style.opacity = 0;

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