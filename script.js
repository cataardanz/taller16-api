document.getElementById('getUsersButton').addEventListener('click', function() {
    showUsers();
});

function showUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users'; 

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let userHTML = '<ul>';
            data.forEach(user => {
                userHTML += `<li>${user.name} - ${user.email}</li>`;
            });
            userHTML += '</ul>';
            document.getElementById('userList').innerHTML = userHTML;
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}
