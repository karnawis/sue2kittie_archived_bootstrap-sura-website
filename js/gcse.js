//https://developers.google.com/custom-search/docs/element

var searchCallback = function(){
    if (document.readyState == 'complete' ){
        google.search.cse.element.render(
            {
                div: "search",
                tag: 'search'
            });
    } else {
        google.setOnLoadCallback(function() {
            google.search.cse.element.render({
                div: "search",
                tag: 'search'
            });
        }, true);
    }
}//end if
window.__gcse = {
    parsetags :'explicit',
    callback: searchCallback
};

(function(){
    var cx = '017279651619697232300:6de8f_6za5a';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();
