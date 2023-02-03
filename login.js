//first steps to understand how the check of a login is made
const user = {
  nome: 'Joe',
  idade: 50,
  cidade: 'London',
  estadoCivil: 'solteiro',
  senha: '1234eoj'
}

function check (username, key) {
  if(username === user.nome) {
    if(key === user.senha) {
      return "Sucesso ao fazer login";
    }
  }
  return "Tente novamente";
}

console.log(check('Joe', '1234eoj'))
