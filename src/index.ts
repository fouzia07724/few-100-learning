import { add } from './math';
import './styles.css';
console.log('Ready to Get Down With Some TypeScript!');
console.log(add(3, 3));

// Find the important things you need on the page
const num1 = document.getElementById('num1') as HTMLInputElement;
const num2 = document.getElementById('num2') as HTMLInputElement;
const addButton = document.getElementById('add') as HTMLInputElement;

const answer = document.getElementById('answer') as HTMLSpanElement;

console.log({ num1, num2, addButton, answer });

// step 2 - Hook up the event

addButton.addEventListener('click', handleAddClick);

function handleAddClick() {
    console.log('That Button got Clicked!');
    const a = num1.valueAsNumber;
    const b = num2.valueAsNumber;
    const sum = add(a, b);
    answer.innerText = sum.toString();
    num1.focus();
}

// your extra credit homework
// Make it so that it does not suck so far
// NaN === Nan
// isNaN(NaN) it evaluates to true
// isNaN(12) it evaluates to false
