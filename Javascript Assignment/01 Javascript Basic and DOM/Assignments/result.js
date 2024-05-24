
function outcome(){
    let first = parseInt(document.getElementById("C-language").value);
    let second = parseInt(document.getElementById("C++language").value)
    let third = parseInt(document.getElementById("database").value)
    let fourth = parseInt(document.getElementById("HTML").value)
    let fifth = parseInt(document.getElementById("CSS").value)
    let sixth = parseInt(document.getElementById("PHP").value)
    let seventh = parseInt(document.getElementById("core-java").value)
     
    let totalmarks = first + second + third + fourth + fifth + sixth + seventh;
    let modulus = (totalmarks/350)*100;

    document.getElementById("result").innerHTML = totalmarks;
    document.getElementById("percentage").innerHTML = modulus;

    document.getElementById("sum").style.display = "block";
}