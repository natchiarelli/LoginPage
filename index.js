function userIsCorrect(user, password) {
    return user.value == "nathalye.chiarelli" && password.value == "teste123";
  }
  
  function login() {
    var user = document.getElementById("user");
    var password = document.getElementById("password");
  
    if (user.value == "" || password.value == "") {
      alert("Por favor preencha todos os campos.");
    }
  
    if (this.userIsCorrect(user, password)) {
      alert(
        "Obrigado sr(a) " +
          user.value +
          ". \n O sistema estará disponível em breve"
      );
    } else {
      alert("Usuário ou senha incorretos");
    }
  }
