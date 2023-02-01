function Sum(num_1, num_2) {
    return num_1 + num_2
}

function Mul(num_1, num_2) {
    return num_1 * num_2
}

function Div(num_1, num_2) {
    return num_1 / num_2
}

let string = '2',
    number = 3
    boolean = true

console.log(Sum(string, boolean), 
            Sum(string, number), 
            Sum(number, boolean))

console.log(Mul(string, boolean), 
            Mul(string, number), 
            Mul(number, boolean))

console.log(Div(string, boolean), 
            Div(string, number), 
            Div(number, boolean))
