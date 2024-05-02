let box = document.querySelectorAll('.box');
let main = document.querySelector('main');

box.forEach(box => 
{
    let defaultColor = box.style.backgroundColor;

    function randomColor() 
    {
        let rouge = Math.floor(Math.random() * 256);
        let vert = Math.floor(Math.random() * 256);
        let bleu = Math.floor(Math.random() * 256);
        return `rgb(${rouge},${vert},${bleu})`;

    }

    box.addEventListener('mouseenter', function () 
    {
        box.style.backgroundColor = randomColor();
    });

    box.addEventListener('mouseleave', function () 
    {
        box.style.backgroundColor = defaultColor;
    });

    box.addEventListener('click', function ()
    {
        main.style.backgroundColor = box.style.backgroundColor;
    });
});
