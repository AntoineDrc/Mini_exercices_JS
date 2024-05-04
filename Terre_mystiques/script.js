const regions = document.querySelectorAll('.region');
const infoPanel = document.getElementById('infoPanel');
const regionName = document.getElementById('regionName');
const regionDesc = document.getElementById('regionDesc');

regions.forEach(region => {
    region.addEventListener('click', function()
    {
        const nom = region.getAttribute('data-nom');

        switch(nom)
        {
            case 'foretElfes':
                regionName.textContent = ('Forêt des Elfes');
                regionDesc.textContent = ('La forêt des Elfes est peuplée de créatures magiques et est réputée pour sa beauté surnaturelle.');
                break;
            case 'mineNains':
                regionName.textContent = 'Mine des Nains';
                regionDesc.textContent = 'Les souterrains de la mine des Nains renferment des trésors et des pierres précieuses inestimables.';
                break;
            case 'volcanDragons':
                regionName.textContent = 'Volcan des Dragons';
                regionDesc.textContent = 'Ce volcan actif est le foyer des dragons cracheurs de feu, craints par tous les habitants des terres mystiques.';
                break;
            case 'montagneTrolls':
                regionName.textContent = 'Montagne des Trolls';
                regionDesc.textContent = 'La montagne des Trolls est connue pour ses chemins périlleux et ses habitants peu accueillants.';
                break;
            case 'lacSorciers':
                regionName.textContent = 'Lac des Sorciers';
                regionDesc.textContent = 'Les eaux mystiques de ce lac sont souvent le théâtre de rituels de magie ancienne.';
                break;
        }
            
    })
});