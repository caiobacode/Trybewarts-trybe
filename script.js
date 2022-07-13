const button = document.getElementById('botao')
button.addEventListener('click', function() {
  const email = document.getElementById('email')
  const senha = document.getElementById('password')
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!')
  }
  else {
    alert('Email ou senha inválidos.')
  }
})

