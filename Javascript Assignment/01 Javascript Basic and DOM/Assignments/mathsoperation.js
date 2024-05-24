function add(){
    Num1 = parseInt(document.getElementById("firstNumber").value);
    Num2 = parseInt(document.getElementById("secondNumber").value);
    document.getElementById("result").innerHTML = Num1 + Num2;
    }
    function sub(){
    Num1 = document.getElementById("firstNumber").value;
    Num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = Num1 - Num2;
    }
    function multiply(){
    Num1 = document.getElementById("firstNumber").value;
    Num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = Num1 * Num2;
    }
    function divide(){
    Num1 = document.getElementById("firstNumber").value;
    Num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = Num1 / Num2;
    }
    function percentage(){
    Num1 = document.getElementById("firstNumber").value;
    Num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = Num1 % Num2;
    }