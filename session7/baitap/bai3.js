"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays["Monday"] = "Monday";
    WeekDays["Tuesday"] = "Tuesday";
    WeekDays["Wednesday"] = "Wednesday";
    WeekDays["Thursday"] = "Thursday";
    WeekDays["Friday"] = "Friday";
    WeekDays["Saturday"] = "Saturday";
    WeekDays["Sunday"] = "Sunday";
})(WeekDays || (WeekDays = {}));
console.log("các ngày trong tuần");
for (let day in WeekDays) {
    console.log(day);
}
