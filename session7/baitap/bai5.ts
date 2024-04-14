let varr:any;
varr = 10;
varr = "heloo";
varr = true;

let varr1 : unknown;
varr1 = 10;
varr1 = "hello";
varr1 = true;   
if (typeof varr1 === "number"){
    console.log(varr1 * 2);
    
}
