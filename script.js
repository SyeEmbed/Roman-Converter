const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

function toRoman(num){
    const romanNumeral = [
        {numeral:"M", value:1000},
        {numeral:"CM", value:900},
        {numeral:"D", value:500},
        {numeral:"CD", value:400},
        {numeral:"C", value:100},
        {numeral:"XC", value:90},
        {numeral:"L", value:50},
        {numeral:"XL", value:40},
        {numeral:"X", value:10},
        {numeral:"IX", value:9},
        {numeral:"V", value:5},
        {numeral:"IV", value:4},
        {numeral:"I", value:1},
    ];
    let result = ''
    for (let{numeral, value} of romanNumeral){
        while(num >= value){
            result += numeral;
            num -= value;
        }
    }
    return result;
}


convertBtn.addEventListener("click", () => {
    const value = parseInt(number.value);

    if(!number.value){
        output.textContent = "Please enter a valid number";
    }else if(value < 1){
        output.textContent = "Please enter a number greater than or equal to 1";
    }else if(value > 4000){
        output.textContent = "Please enter a number less than or equal to 3999";
    }else{
        output.textContent =toRoman(value);
    }
});
