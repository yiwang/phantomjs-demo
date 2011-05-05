if (phantom.state.length === 0) {
    phantom.state = 'tweets';
    phantom.open('http://mobile.twitter.com/yi_wang');
} else {
    var list = document.querySelectorAll('span.status');
    for (var i = 0; i < list.length; ++i) {
        console.log((i + 1) + ': ' + list[i].innerHTML.replace(/<.*?>/g, ''));
    }
    phantom.exit();
}

