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

    // Enviando os dados para a API usando fetch
    fetch('http://localhost:3000/api/submit', {
        method: 'POST', // Método POST
        headers: {
            'Content-Type': 'application/json' // Definindo o tipo de conteúdo como JSON
        },
        body: JSON.stringify(data) // Convertendo os dados para JSON
    })
    .then(response => response.json()) // Convertendo a resposta para JSON
    .then(data => {
        document.getElementById('response').innerHTML = `Resposta da API: ${data.message}`; // Exibindo a resposta da API
    })
    .catch(error => {
        console.error('Erro:', error); // Logando erros no console
    });
});

