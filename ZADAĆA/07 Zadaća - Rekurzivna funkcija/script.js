function fibonacci(n) {
    if (n == 0) {
        return 0;

    } else if (n == 1) {
        return 1;

    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);

    }
}
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(7))


function fibonacci2(n) {
    var fib = [0, 1]
    for (var i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}
console.log(fibonacci2(2))
console.log(fibonacci2(3))
console.log(fibonacci2(7))


