function task2() {
    let info = getDayInfo(new Date());
    document.getElementById("result2").innerHTML =
        `Номер: ${info.dayNumber}<br>Назва: ${info.dayName}`;
}

function task3() {
    let n = parseInt(document.getElementById("daysAgo").value);
    let d = new Date();
    d.setDate(d.getDate() - n);
    document.getElementById("result3").innerHTML = d;
}

function task4() {
    let y = document.getElementById("year").value;
    let m = document.getElementById("month").value;
    document.getElementById("result4").innerHTML =
        getLastDayOfMonth(y, m);
}

function task5() {
    let info = getSecondsInfo();
    document.getElementById("result5").innerHTML =
        `Пройшло: ${info.passed} сек.<br>
         До завтра: ${info.toNext} сек.`;
}

function task6() {
    document.getElementById("result6").innerHTML =
        formatDDMMYYYY(new Date());
}

function task7() {
    let d1 = new Date(document.getElementById("date1").value);
    let d2 = new Date(document.getElementById("date2").value);
    let diff = Math.abs(d2 - d1) / (1000*60*60*24);
    document.getElementById("result7").innerHTML =
        `Різниця: ${diff} днів`;
}

function task8() {
    let d = new Date(new Date() - 5000);
    document.getElementById("result8").innerHTML =
        formatDate(d);
}

function task9() {
    let str = document.getElementById("dateString").value;
    let parts = str.split(".");
    let date = new Date(parts[2], parts[1]-1, parts[0]);
    document.getElementById("result9").innerHTML = date;
}

function task10() {
    let lang = document.getElementById("lang").value;
    let date = new Date();
    document.getElementById("result10").innerHTML =
        date.toLocaleString(lang, {dateStyle: "full", timeStyle: "medium"});
}