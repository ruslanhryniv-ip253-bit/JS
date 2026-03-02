// 1
function showCurrentDate() {
    let now = new Date();

    let months = ["січня","лютого","березня","квітня","травня","червня",
                  "липня","серпня","вересня","жовтня","листопада","грудня"];

    let days = ["неділя","понеділок","вівторок","середа",
                "четвер","п’ятниця","субота"];

    let s = `Дата: ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} року<br>
             День тижня: ${days[now.getDay()]}<br>
             Час: ${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`;

    document.getElementById("result1").innerHTML = s;
}

// 2
function getDayInfo(date) {
    let days = ["понеділок","вівторок","середа",
                "четвер","п’ятниця","субота","неділя"];

    let jsDay = date.getDay();
    let dayNumber = jsDay === 0 ? 7 : jsDay;

    return {
        dayNumber: dayNumber,
        dayName: days[dayNumber - 1]
    };
}

// 4
function getLastDayOfMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

// 5
function getSecondsInfo() {
    let now = new Date();
    let start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

    return {
        passed: Math.floor((now - start)/1000),
        toNext: Math.floor((tomorrow - now)/1000)
    };
}

// 6
function formatDDMMYYYY(date) {
    return `${date.getDate().toString().padStart(2,'0')}.` +
           `${(date.getMonth()+1).toString().padStart(2,'0')}.` +
           `${date.getFullYear()}`;
}

// 8
function formatDate(date) {
    let diff = new Date() - date;

    if (diff < 1000) return "тільки що";
    if (diff < 60000) return Math.floor(diff/1000) + " сек. назад";
    if (diff < 3600000) return Math.floor(diff/60000) + " хв. назад";

    return formatDDMMYYYY(date) + " " +
           date.getHours().toString().padStart(2,'0') + ":" +
           date.getMinutes().toString().padStart(2,'0');
}