function verifica() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  if (email == "" || senha == "") {
    alert("Obrigatorio o preenchimento de email ou senha");
    document.getElementById("email").focus();
  } else {
    pesquisa(email, senha);
    alert("você preencheu");
  }
}

function pesquisa(email, senha) {
  if (email == "producao@condutiva.com.br" && senha == "producao") {
    window.close();
    window.open("../assets/index.html");
  } else {
    alert("Email ou senha inválido");
    document.getElementById("email").focus();
  }
}

document.addEventListener("contextmenu", (event) => event.preventDefault());
