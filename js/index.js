var jd_banner_imgbox = document.getElementById("jd_banner_imgbox");
var bannerWidth = jd_banner_imgbox.offsetWidth/10;
console.log(bannerWidth);
var num = 0;
function autoplay() {
    if (num ===  - 9 * bannerWidth ) {
        num = 0;
    }
    num = num - 1;
    jd_banner_imgbox.style.left = num + "px";
    if (num % bannerWidth === 0) {
        clearInterval(timer1);
        timer2 = setTimeout(function () {
            timer1 = setInterval("autoplay()",1);

        }, 2000)
    }

}

var timer1 = setInterval("autoplay()", 1);
window.onload = function () {
    search();

};

function search() {
    var headerBox = document.getElementById("jd_header_wrapper");
    var bannerBox = document.getElementById("jd_banner_wrapper");
    // 获取banner盒子的高度
    var bannerHeight = bannerBox.offsetHeight;
    console.log(headerBox);
    console.log(bannerHeight);

    window.onscroll = function (ev) {
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        console.log(top);
        console.log("滚动条滚了");
        if (top > bannerHeight) {

            headerBox.style.background = 'rgba(201, 21, 35, 0.85)';
        }else {
            var op = top / bannerHeight * 0.85;
            headerBox.style.background = 'rgba(201, 21, 35, '+ op +')';

        }
    }
}
//copy
var secondKill = function() {

    var parentTime = document.getElementsByClassName('sk_time')[0];

    var timeList = parentTime.getElementsByClassName('num');

    console.log(timeList.length);

    var times = 7 * 60 * 60;
    var timer;
    timer = setInterval(function () {
        times--;

        var h = Math.floor(times / (60 * 60));
        var m = Math.floor(times / 60 % 60);
        var s = times % 60;

        console.log(h + '-' + m + "-" + s);

        timeList[0].innerHTML = h >= 10 ? Math.floor(h / 10) : 0;
        timeList[1].innerHTML = h % 10;

        timeList[2].innerHTML = m >= 10 ? Math.floor(m / 10) : 0;
        timeList[3].innerHTML = m % 10;

        timeList[4].innerHTML = s >= 10 ? Math.floor(s / 10) : 0;
        timeList[5].innerHTML = s % 10;
        if (times <= 0) {
            clearInterval(timer);
        }
    }, 1000);
};
