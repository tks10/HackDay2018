var offset = 0;

//ツイートを全て「にゃーん」にする
function convert_nyan(){
    var tweets = document.getElementsByClassName('js-tweet-text');

    for (var i = offset, tweet; tweet = tweets[i]; i++) {
        offset++;
        tweet.innerHTML = 'にゃーん';
    }
}

function ObserveStream(){
	//オブザーバーの作成
	var observer = new MutationObserver(convert_nyan);
	//監視の開始
	observer.observe(document.getElementsByClassName('stream-items')[0], {
	    attributes: true,
	    childList:  true
	});
	console.log("observe");
	convert_nyan();
} 
//body変更時にObserveStreamを設定する。
//オブザーバーの作成
var observer = new MutationObserver(ObserveStream);
//監視の開始
observer.observe(document.getElementsByTagName("body")[0], {
    attributes: true
});
