const loginButton = document.getElementById('botao');
const submitBtn = document.getElementById('submit-btn');
const firstForm = document.getElementById('evaluation-form');
const main = document.getElementById('main-div');
const conter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const email = document.getElementById('email');
const senha = document.getElementById('password');
const nameInput = document.getElementById('input-name');
const lastNameInput = document.getElementById('input-lastname');
const emailInput = document.getElementById('input-email');
const houseInput = document.getElementById('house');
const checkBox = document.getElementById('agreement');

const loginBtn = (event) => {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    return window.alert('Olá, Tryber!');
  }
  return window.alert('Email ou senha inválidos.');
};

const filterChosed = (arr) => {
  const filt = (array) => array.filter((e) => e.checked === true);
  if (filt(arr).length === 0) {
    return '';
  }
  const values = [];
  filt(arr).forEach((e) => {
    values.push(e.defaultValue);
  });
  return values.join(', ');
};

const createElement = (type, inner) => {
  const element = document.createElement(type);
  element.innerText = inner;
  return element;
};

const createFormData = (event) => {
  event.preventDefault();
  const familyInput = filterChosed([...document.getElementsByClassName('family')]);
  const hofsInput = filterChosed([...document.getElementsByClassName('subject')]);
  const avaliateInput = filterChosed([...document.getElementsByClassName('rate')]);
  firstForm.innerHTML = '';
  const newForm = document.createElement('form');
  newForm.id = 'form-data';
  newForm.appendChild(createElement('p', `Nome: ${nameInput.value} ${lastNameInput.value}`));
  newForm.appendChild(createElement('p', `Email: ${emailInput.value}`));
  newForm.appendChild(createElement('p', `Casa: ${houseInput.value}`));
  newForm.appendChild(createElement('p', `Família: ${familyInput}`));
  newForm.appendChild(createElement('p', `Matérias: ${hofsInput}`));
  newForm.appendChild(createElement('p', `Avaliação: ${avaliateInput}`));
  newForm.appendChild(createElement('p', `Observações: ${textArea.value}`));
  main.appendChild(newForm);
};

const checkboxFunction = () => {
  if (submitBtn.disabled) submitBtn.disabled = false;
  else submitBtn.disabled = true;
};

window.onload = () => {
  loginButton.addEventListener('click', loginBtn);
  submitBtn.addEventListener('click', createFormData);
  textArea.addEventListener('input', () => { conter.innerText = 500 - textArea.value.length; });
  checkBox.addEventListener('input', checkboxFunction);
};
