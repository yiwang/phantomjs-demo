if (phantom.state.length === 0) {
    phantom.state = 'pizza';
    phantom.open('http://www.google.com/m/local?site=local&q=pizza+in+new+york');
} else {
    var list = document.querySelectorAll('div.bf');
    for (var i in list) {
        console.log(list[i].innerText);
    }
    phantom.exit();
}

