var unfave = function () {
    window.scrollBy(0, 10000);
    document.querySelectorAll('[aria-label$="Liked"][role="button"]').forEach(function (v) {
        v.click();
    });
    setTimeout(unfave, 10000); 
}
unfave();
