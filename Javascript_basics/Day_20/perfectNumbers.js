
function findPerfect() {
    var n = prompt("Enter a number : ");
    var sum = 0;
    for (var i = 0; i < n; i++) {
        if (n % i == 0) {
            sum = sum + i;
        }
    }
    if (sum == n)
        console.log("The number is perfect ");
    else
        console.log("The number is not perfect number");
}

findPerfect();
