function sumFunction(){
    var num1 = document.getElementById("first_num").value;
    var num2 = document.getElementById("last_num").value;
    var result = document.getElementById("result");
    num1 = Number(num1);
    num2 = Number(num2);

    result.innerHTML = `<p> ${num1+num2}</p>`;
}
function subFunction(){
    var num1 = document.getElementById("first_num").value;
    var num2 = document.getElementById("last_num").value;
    var result = document.getElementById("result");
    num1 = Number(num1);
    num2 = Number(num2);

    result.innerHTML = `<p> ${num1-num2}</p>`;
}
function divFunction(){
    var num1 = document.getElementById("first_num").value;
    var num2 = document.getElementById("last_num").value;
    var result = document.getElementById("result");
    num1 = Number(num1);
    num2 = Number(num2);
    res = num1 / num2;

    if(res == Infinity){
    result.innerHTML = `<p> Não divizivel</p>`;
    }
    else{
        result.innerHTML = `<p> ${res}</p>`;
    }
}
function multFunction(){
    var num1 = document.getElementById("first_num").value;
    var num2 = document.getElementById("last_num").value;
    var result = document.getElementById("result");
    num1 = Number(num1);
    num2 = Number(num2);

    result.innerHTML = `<p> ${num1*num2}</p>`;
}
