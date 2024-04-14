"use strict";
// Trả về kiểu void: void được sử dụng khi một hàm không trả về bất kỳ giá trị nào.
// Điều này có nghĩa là hàm hoàn thành công việc của nó nhưng không cung cấp bất kỳ giá trị nào cho caller.
function mes(message) {
    console.log(message);
}
const result = mes("Hello, world!");
/*
Trả về kiểu never: never được sử dụng khi một hàm không kết thúc bình thường,
tức là nó không bao giờ trả về giá trị hoặc kết thúc thực thi
*/
function never(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
    }
}
const results = never("Lỗi!");
const infinite = infiniteLoop();
