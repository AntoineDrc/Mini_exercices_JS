
let buttons = document.querySelectorAll('button[name="button"]');
let displayDiv = document.querySelector('.affichage');

buttons.forEach(button =>
{
    button.addEventListener('click', function()
    {
        invoke(this.id);
    })
});

function invoke(id)
{
    let nom, desc, img;
    switch (id)
    {
        case 'dragon':
            nom = "Dragon";
            desc = "Créature mythique crachant du feu";
            img = "img/dragon.avif";
            break;
        case 'elfe':
            nom = "Elfe";
            desc = "Humanoïde aux pouvoirs magique";
            img = "img/elfe.webp";
            break;
        case 'troll':
            nom = "Troll";
            desc = "Créature puissante vivant dans la forêt";
            img = "img/troll.avif";
            break;
    }
    displayCreature(img, nom, desc);
}

function displayCreature(img,nom,desc)
{
    displayDiv.innerHTML = `<img src="${img}"<h3>${nom}</h3><p>${desc}</p>`;
}