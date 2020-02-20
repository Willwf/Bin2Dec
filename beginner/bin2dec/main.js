const binaryNumber = document.querySelector('.input');
const btn = document.querySelector('.btn');
const decimalNumber = document.querySelector('.decimal-number');

btn.addEventListener('click', function (event) {
  decimalNumber.innerHTML = '0';
  const inputValue = parseInt(binaryNumber.value, 2);
  if (!inputValue && inputValue !== Number) {
    alert('Must only be 1 or 0');
    binaryNumber.value = '';
  } else {
    decimalNumber.innerHTML = inputValue;
  }
})
