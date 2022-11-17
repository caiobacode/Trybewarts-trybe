const button = document.getElementById('botao');
button.addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.getElementById('email');
  const senha = document.getElementById('password');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    return window.alert('Olá, Tryber!');
  }

  return window.alert('Email ou senha inválidos.');
});

const main = document.getElementById('main-div');
const conter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
textArea.addEventListener('input', () => {
  conter.innerText = 500 - textArea.value.length;
});

const filterChosed = (arr) => {
  console.log(arr);
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

const createFormData = () => {
  const nameInput = document.getElementById('input-name').value;
  const lastNameInput = document.getElementById('input-lastname').value;
  const emailInput = document.getElementById('input-email').value;
  const houseInput = document.getElementById('house').value;
  const familyInput = filterChosed([...document.getElementsByClassName('family')]);
  const hofsInput = filterChosed([...document.getElementsByClassName('subject')]);
  const avaliateInput = filterChosed([...document.getElementsByClassName('rate')]);
  main.innerHTML = '';
  const form = document.createElement('form');
  form.id = 'form-data';
  form.appendChild(createElement('p', `Nome: ${nameInput} ${lastNameInput}`));
  form.appendChild(createElement('p', `Email: ${emailInput}`));
  form.appendChild(createElement('p', `Casa: ${houseInput}`));
  form.appendChild(createElement('p', `Família: ${familyInput}`));
  form.appendChild(createElement('p', `Matérias: ${hofsInput}`));
  form.appendChild(createElement('p', `Avaliação: ${avaliateInput}`));
  form.appendChild(createElement('p', `Observações: ${textArea.value}`));
  main.appendChild(form);
};

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  createFormData();
});

const checkBox = document.getElementById('agreement');
checkBox.addEventListener('input', () => {
  if (submitBtn.disabled) submitBtn.disabled = false;
  else submitBtn.disabled = true;
});
