let btn = document.getElementById('btn');
let main = document.querySelector('main');
let mainColor = main.style.backgroundColor;


function randomColor()
{
    let rouge = Math.floor(Math.random() * 256);
    let vert = Math.floor(Math.random() * 256);
    let bleu = Math.floor(Math.random() * 256);
    return `rgb(${rouge},${vert},${bleu})`;
}

btn.addEventListener('click', function()
{
    main.style.backgroundColor = randomColor();
})


