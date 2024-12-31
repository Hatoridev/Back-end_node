document.getElementById('data-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o envio padrão do formulário

    // Pegando os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Criando o objeto de dados
    const data = {
        name: name,
        email: email
    };

    // Enviando os dados para o Node-RED para serem salvos no arquivo JSON
    fetch('http://localhost:3000/api/saveData', {
        method: 'POST', // Método POST
        headers: {
            'Content-Type': 'application/json' // Definindo o tipo de conteúdo como JSON
        },
        body: JSON.stringify(data) // Convertendo os dados para JSON
    })
    .then(response => response.json()) // Convertendo a resposta para JSON
    .then(data => {
        alert(data.message); // Exibindo mensagem de sucesso
    })
    .catch(error => {
        console.error('Erro:', error); // Logando erros no console
    });
});

// Função para carregar dados armazenados
document.getElementById('load-data').addEventListener('click', function() {
    fetch('http://localhost:3000/api/getData')
        .then(response => response.json()) // Convertendo a resposta para JSON
        .then(data => {
            document.getElementById('response').innerHTML = JSON.stringify(data, null, 2); // Exibindo os dados no formato JSON
        })
        .catch(error => {
            console.error('Erro:', error); // Logando erros no console
        });
});

