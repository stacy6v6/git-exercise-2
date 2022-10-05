const square = (n) => n * n;

const fahrenheit = (celsius) => (celsius * 1.8) + 32; 

const rectangleArea = (a, b) => a * b;

const isPalindrome = (str) => {
    loweredStr = str.toLowerCase();

    for (let i = 0; i < str.length / 2; i++) {
        if (loweredStr[i] !== loweredStr[loweredStr.length - 1 - i]) {
            return false;
        
        }

    }

    return true;
}

