document.getElementById('editUsername').addEventListener('click', function () {
    var usernameElement = document.getElementById('username');
    var usernameInput = document.getElementById('editUsernameInput');

    // Exibir o campo de entrada e ocultar o texto
    usernameInput.style.display = 'inline-block';
    usernameInput.value = usernameElement.innerText;
    usernameElement.style.display = 'none';

    // Definir o foco no campo de entrada
    usernameInput.focus();
});

// Adicionar um manipulador de eventos ao campo de entrada para salvar as alterações
document.getElementById('editUsernameInput').addEventListener('blur', function () {
    var usernameElement = document.getElementById('username');
    var usernameInput = document.getElementById('editUsernameInput');

    // Atualizar o texto e ocultar o campo de entrada
    usernameElement.innerText = usernameInput.value;
    usernameElement.style.display = 'inline-block';
    usernameInput.style.display = 'none';
});

document.getElementById('editLocation').addEventListener('click', function () {
    var usernameElement = document.getElementById('Location');
    var usernameInput = document.getElementById('editLocationInput');

    // Exibir o campo de entrada e ocultar o texto
    usernameInput.style.display = 'inline-block';
    usernameInput.value = usernameElement.innerText;
    usernameElement.style.display = 'none';

    // Definir o foco no campo de entrada
    usernameInput.focus();
});

// Adicionar um manipulador de eventos ao campo de entrada para salvar as alterações
document.getElementById('editLocationInput').addEventListener('blur', function () {
    var usernameElement = document.getElementById('Location');
    var usernameInput = document.getElementById('editLocationInput');

    // Atualizar o texto e ocultar o campo de entrada
    usernameElement.innerText = usernameInput.value;
    usernameElement.style.display = 'inline-block';
    usernameInput.style.display = 'none';
});

