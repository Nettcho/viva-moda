function verificarCadastro(){
    const inNomeCad = document.getElementById("inNomeCad");
    const inSobrenomeCad = document.getElementById("inSobrenomeCad");
    const inNascimentoCad = document.getElementById("inNascimentoCad");
    const inEmailCad = document.getElementById("inEmailCad");
    const inTelefoneCad = document.getElementById("inTelefoneCad");
    const inSenhaCad = document.getElementById("inSenhaCad");

    let nome = inNomeCad.value;
    let sobrenome = inSobrenomeCad.value;
    let nasc = inNascimentoCad.value;
    let email = inEmailCad.value;
    let tel = Number(inTelefoneCad.value);
    let senha = inSenhaCad.value;

    document.getElementById("outCad").textContent = ""

    if(nome == ""){
        alert("Informe um nome válido.");
        inNomeCad.focus();
        return;
    }
    if(sobrenome == ""){
        alert("Informe um sobrenome válido.");
        inSobrenomeCad.focus();
        return;
    }
    if(nasc == ""){
        alert("Informe uma data válida.");
        inNascimentoCad.focus();
        return;
    }
    if(email == ""){
        alert("Informe um email válido.");
        inEmailCad.focus();
        return;
    }
    if(tel == "" || isNaN(tel)){
        alert("Informe um telefone válido.");
        inTelefoneCad.focus();
        return;
    }
    if(senha == ""){
        alert("Informe uma senha válida.");
        inSenhaCad.focus();
        return;
    }

    const cadastro = {"nome": nome,}

    inNomeCad.value = ""
    inSobrenomeCad.value = ""
    inNascimentoCad.value = ""
    inEmailCad.value = ""
    inEmailCad.value = ""
    inTelefoneCad.value = ""
    inSenhaCad.value = ""

    document.getElementById("outCad").textContent = "Cadastro Efetuado Com Sucesso";
    document.getElementById("outCad").style.color = "green";
    document.getElementById("outCad").style.textAlign = "center";
}
    const btCadastrar = document.getElementById("btCadastrar");
    btCadastrar.addEventListener("click", verificarCadastro);