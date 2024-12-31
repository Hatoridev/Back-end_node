// Função para carregar dados de uma API externa
document.getElementById('fetch-data').addEventListener('click', function() {
    // Fazendo a requisição para uma API pública (Exemplo com JSONPlaceholder)
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) // Convertendo a resposta para JSON
        .then(data => {
            // Formatando os dados e exibindo-os na tela
            const responseDiv = document.getElementById('response');
            let htmlContent = '<h3>Lista de Usuários:</h3><ul>';
            data.forEach(user => {
                htmlContent += `<li>${user.name} - ${user.email}</li>`; // Exibindo nome e e-mail de cada usuário
            });
            htmlContent += '</ul>';
            responseDiv.innerHTML = htmlContent; // Atualizando o conteúdo da div
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error); // Logando erros no console
        });
});

