function addTwo() {
    // event.preventDefault();
    var a, b;

    a = Number(document.getElementById("num1").value);
    b = Number(document.getElementById("num2").value);

    var sum = a + b;
    document.getElementById("output").innerHTML = "<p>The Sum is: " + sum + "</p>";
}
