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
