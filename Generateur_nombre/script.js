let nb = document.getElementById('nb');
let nbSave = [];

function nbRandom() {
    let nombre = Math.floor(Math.random() * 1001);
    return nombre;
}

nb.addEventListener('click', function() {
    let displayNb = document.getElementById('rslt');
    let randomNombre = nbRandom(); 
    nbSave.push(randomNombre);

    displayNb.innerHTML = nbSave.join(' - ');

    let displayMoyenne = document.getElementById('moyenne');
    let moyenne = calculMoyenne();

    displayMoyenne.innerHTML = moyenne.toFixed(2);
});

function calculMoyenne()
{
    let total = 0;
    let quantite = nbSave.length;

    nbSave.forEach(nombre => {
        total += nombre;
    });

    return total / quantite;
}
