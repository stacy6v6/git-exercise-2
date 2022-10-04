const square = (n) => n * n;

const fahrenheit = (celsius) => (celsius * 1.8) + 32; 

const rectangleArea = (a, b) => a * b;

const isPalindrome = (str) => {
    str = str.toLowerCase();

    for (let i = 0; i < str.length / 2; i++){
        if (str[i] === str[str.length - 1 - i]){

            return true;
        
        } else {
          
            return false;
        
        }
    }
}

