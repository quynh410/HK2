
const wordHTML = document.getElementById("word")
const remainingHTML = document.getElementById("remaining")
const inputWord = document.getElementById("input_word")
const btnPlayAgain = document.getElementById("btn-play-again")
const btnGuess = document.getElementById("btn-guess")

let guessArr = ["hoa", "hao", "han", "nam", "anh", "thu", "tai", "tho", "tan"];
// gọi hàm reset game
playAgain()

function gess() {
    // nếu từ không đúng
    if (inputWord.value !== guessArr[index]) {
        // trừ một lần
        remaining -= 1
        // gán lại lên màn hình cho người ta thấy
        remainingHTML.innerHTML = remaining
        // xóa ô nahapj
        inputWord.value = ""
        // nếu đã tụt về không thì ẩn nút chơi và bật nút chơi lại
        if (remaining === 0) {
            alert("Game Over");
            btnGuess.style.display = "none"
            btnPlayAgain.style.display = "block"
        }
    } else { // nếu từ đúng
        // hiện từ đó
        wordHTML.innerHTML = guessArr[index]
        // tắt nút chơi và hiện nút chơi lại
        btnGuess.style.display = "none"
        btnPlayAgain.style.display = "block"
    }
}

// hàm reset game giúp khởi tạo các giá trị game ban đầu
function playAgain() {
    // tạo và gán lại số lần chơi
    remaining = 5
    remainingHTML.innerHTML = remaining
    // tìm vị trí từ cần đoán
    index = Math.floor(Math.random() * guessArr.length)
    // ẩn từ được chọn
    wordHTML.innerHTML = "***"
    // xóa ô nhập
    inputWord.value = ""
    // đặt trạng thái hiển thị cho các nút
    btnPlayAgain.style.display = "none"
    btnGuess.style.display = "block"

    // để log để xem trước kết quả chơi cho đúng
    console.log(guessArr[index]);
}



