(function() {
    var htmlHeight = document.getElementsByTagName('html')[0];
    var footer = document.getElementById('blog-footer');
    var pageHeight = window.innerHeight;
    if (typeof pageHeight != 'number') {
        if (document.compatMode == 'CSS1compat') {
            pageHeight = document.documentElement.clientHeight;
        } else {
            pageHeight = document.body.clientHeight;
        }
    }
    footer.style.top =  window.screenTop+"px";
})()
