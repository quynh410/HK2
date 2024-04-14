/*
1. Array
*/
let numbers : number[]= [1,2,3,4];
// khai báo 1 mảng number các phần tử trong mảng number phải là number
let studentt1 : string[] = ["Hoa", 'Hong','Han'];

/*
2. object 
*/
let obj = {
    name: "minh thu ",
    adrdess: "hn",
    id: 1
}
let objit :{
    name: string;
    adrdess: string;
    id: number;
}={
    name: "minh thu ",
    adrdess: "hn",
    id: 1
}

/*
3. enum
*/
enum Role {
    ADMIN ,// sẽ đánh số từ 0 
    USER
}
let person :{
    name: string;
    adrdess: string;
    role: Role.ADMIN;
}={
    name: "minh thu ",
    adrdess: "hn",
    role: 0
}

/*
4. void: áp dụng với function
- khi hàm ko trả về kết quả  gì 
- khi hàm trả về kết quả thì phải gán khai báo kiểu dữ liệu trả về của hàm
*/
function sayHello() : void{
    console.log("Hello");
}
sayHello();
function summ(a:number,b:number): number{
    return a + b;
}
summ(3,4)

/*
5. unknow
    -tương tự kiểu dự liêyj any nhưng chặt hơn 
    - khi dùng any thì kiểu dữ liệu truyền vào là gì cũng được
*/
function test(a:any){
    console.log(a.toUppercase());// viết hoa từ đó lên 
}
test("text");
function tests(a: unknown){
    //typescript bắt phải kiểm tra kiểu dữ liệu trước khi đi thực hiên 
    if(typeof(a) === "string"){
        console.log(a.toUpperCase());
        
    }
}
tests("Rikkei")

/*
6.never
    - Thường được dùng trong các vòng lăpj vô tận 
    tức là các vòng lặp chyaj không có điểm dừng để do giá trị:
*/

function typeNever(): never{
    let a :number = 1;
    while(true){
        console.log("Giá trị", ++a);
    }
}
typeNever();