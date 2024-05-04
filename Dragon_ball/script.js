const cards = document.querySelectorAll('.card');
const soundEffect = new Audio('sound/carddrop2-92718.mp3');

cards.forEach(card => 
{
    card.addEventListener('click', function ()
    {
        soundEffect.play();
        card.classList.toggle('rotated');
    })

    card.addEventListener('mousemove', (event) =>
    {
        handleMouseMove(event, card);
    })
});

