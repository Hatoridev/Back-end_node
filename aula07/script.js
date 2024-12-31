fetch('/usuarios')
    .then(response => response.json())
    .then(data => {
        const usuariosList = document.getElementById('usuarios');
        const ul = document.createElement('ul');

        data.data.forEach(usuario => {
            const li = document.createElement('li');
            li.textContent = `Nome: ${usuario.nome} - Email: ${usuario.email}`;
            ul.appendChild(li);
        });

        usuariosList.appendChild(ul);
    })
    .catch(error => console.error('Erro ao carregar os usuários:', error));

