window.onload = function() {
    var iFrame = document.querySelectorAll('iframe');
    for (var i = 0; i < iFrame.length; ++i) {
        var val = iFrame[i].contentDocument.querySelector('video');
        if (val) val.volume = 0;
    }
    var tagList = document.querySelectorAll('.depth2 > a');
    var flag = true;
    for (var i = 0; i < tagList.length; ++i) {
        var val = tagList[i];
        var fNode = val.querySelector('.func .status_bg');
        if (fNode && fNode.textContent == '미완료') {
            flag = false;
            setTimeout(() => {
                window.location.href = val.href;
            }, 15555);
            break;
        }
    }
    if (flag) {
        window.close();
    }
}
