let form = document.querySelector('form');

form.addEventListener('submit', function(event)
{
    event.preventDefault(); // Empêche le rechargement de la page
    let item = document.getElementById('txt'); // Récupère l'élèment input
    let newLi = document.createElement('li'); // Crée un nouvel élèment li

    newLi.textContent = item.value; // Assigne la valeur de l'input au textContent du li

    let ul = document.querySelector('ul');
    ul.appendChild(newLi); // Ajoute le nouvel li comme enfant de ul

    item.value =''; // Réinitialise la valeur de l'input
});