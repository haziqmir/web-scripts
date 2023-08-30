var unfollow = function () {
    window.scrollBy(0, 10000);
    document.querySelectorAll('[aria-label^="Following @"]').forEach(function (v, i, a) {
        v.click();
        document.querySelectorAll('[data-testid="confirmationSheetDialog"] [role="button"][data-testid="confirmationSheetConfirm"').forEach(function (v2, i2, a2) {
            v2.click();
        });
    });
    setTimeout(unfollow, 4000); //less than 4000 might be rate limited or account suspended. increase timeout if any suspend or rate limit happens
}
unfollow();
