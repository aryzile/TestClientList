// client-side online clock
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('onlineClock').innerHTML =
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

// switch between table and list representation
function switchView() {
    var list = document.getElementById('clientsList');
    var table = document.getElementById('clientsTable');

    if (table.style.display == '' &&
        list.style.display == '') {
        table.style.display = 'block';
        list.style.display = 'none';
    }

    var temp = table.style.display; // swap display styles
    table.style.display = list.style.display;
    list.style.display = temp;
}

// for table row selection
$('#clientsTable').on('click', '.clickable-row', function (event) {
    $(this).addClass('active').siblings().removeClass('active');
});

// for list item selection
$('#clientsList').on('click', '.list-group-item', function (event) {
    $('.list-group-item').removeClass('active');
    $(this).addClass('active');
});