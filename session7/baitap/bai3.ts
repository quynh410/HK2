enum WeekDays {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
}

console.log("các ngày trong tuần");
for (let day in WeekDays) {
    console.log(day);
}
