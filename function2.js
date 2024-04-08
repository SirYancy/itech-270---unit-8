function addTwo() {
    event.preventDefault();
    var a, b;

    a = document.getElementById("num1").value;
    b = document.getElementById("num2").value;

    var sum = a + b;
    document.getElementById("output").innerHTML = "<p>The Sum is: " + sum + "</p>";
}
