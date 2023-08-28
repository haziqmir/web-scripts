var delete_tweets = function () {
    window.scrollBy(0, 10000);
    document.querySelectorAll('[aria-label="More"]').forEach(function 
    (v) {
        v.click();
        document.querySelectorAll('span').forEach(function (v2) {
            if (v2.textContent === 'Delete') {
                v2.click();
                    document.querySelectorAll('[data-testid="confirmationSheetConfirm"]').forEach(function (v3) {
                    v3.click();
                });
            }
            else {
                document.body.click();
            }
        });
    });
    setTimeout(delete_tweets, 10000);
}
delete_tweets();
