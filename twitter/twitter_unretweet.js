var unretweet = function () {
    window.scrollBy(0, 10000);
    document.querySelectorAll('[aria-label$="Reposted"]').forEach(function (v, i, a) {
        v.click();
        document.querySelectorAll('[role="menuitem"]').forEach(function (v2, i2, a2) {
            if (v2.textContent === 'Undo repost') {
                v2.click();
            } else {
                document.body.click();
            }
        });
    });
    setTimeout(unretweet, 4000); //less than 4000 might be rate limited or account suspended. increase timeout if any suspend or rate limit happens
}
unretweet();
