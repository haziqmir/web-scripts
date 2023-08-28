# Scripts to delete tweets, unretweet reposts, and remove likes

Based on [Uzay's answer to a question on Stackoverflow](https://stackoverflow.com/questions/64863099/deleting-tweets-with-js-console)

To best use the scripts, go to your profile on a computer and run the script via
the Developer console.

I have tried all the scripts on Chrome.

Note: I have set the period to be 10 seconds to be safe and not get rate limited
or logged out or suspended. If you're feeling confident, feel free to reduce the
rate limit. I would not suggest going below 4000 ms.

## Delete your tweets

- Go to https://twitter.com/yourprofile/with_replies
- Open the console
- Paste in the script from twitter_delete_retweets.js
- Wait till the whole thing is done

## Delete your retweets

- Go to https://twitter.com/yourprofile
- Open the console
- Paste in the script from twitter_unretweet.js
- Wait till the whole thing is done

## Unfave liked tweets

- Go to https://twitter.com/yourprofile/likes
- Open the console
- Paste in the script from twitter_unfave.js
- Wait till the whole thing is done
