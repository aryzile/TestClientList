function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('online_clock').innerHTML =
    h + ":" + m + ":" + s;

    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { // add zero in front of numbers < 10
        i = "0" + i
    }
    
    return i;
}

document.onload = startTime();