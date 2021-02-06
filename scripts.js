'use strict'
//Task 1
//const onlyNumbers = /^\d+$/;
const operationButtons = document.querySelectorAll(".operators button");
const resultButton = document.getElementById('result');


for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener('click', function () {
        const input1 = document.getElementById('input1').value;
        const input2 = document.getElementById('input2').value;

        if (input2 == 0 && operationButtons[i].getAttribute('id') === 'division') {
            alert('Nie można dzielić przez 0');
        } else {
            if (operationButtons[i].getAttribute('id') === 'addition') {
                resultButton.textContent = Number(input1) + Number(input2);
            } else if (operationButtons[i].getAttribute('id') === 'subtraction') {
                resultButton.textContent = Number(input1) - Number(input2);
            } else if (operationButtons[i].getAttribute('id') === 'multiplication') {
                resultButton.textContent = Number(input1) * Number(input2);
            }else if (operationButtons[i].getAttribute('id') === 'division') {
                resultButton.textContent = Number(input1) / Number(input2);
            }
        }
    })
}

//Task 2
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const textBox = document.getElementById('textBox');

text1.addEventListener("click", function(){
    textBox.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
});

text2.addEventListener("click", function(){
    textBox.textContent = "Quisque imperdiet lorem eget odio gravida convallis. Sed ac elit at arcu pharetra aliquet vel in odio. Donec dapibus dui id tortor pretium, vitae rhoncus ipsum auctor. Aliquam non velit quis sem molestie ornare. Quisque tincidunt tristique eros, non convallis ipsum scelerisque vel. Aenean blandit nec sem in finibus. Aliquam et sapien sed velit tincidunt tempus a ut libero. Nam laoreet velit nec turpis varius ornare.";
});