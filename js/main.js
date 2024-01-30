const imageContainer = document.getElementById('image_container')

// EVENT LISTENERS //
imageContainer.addEventListener('click', (e) => checkBeverageType(e))


// FUNCTIONS //
function checkBeverageType(e)
{
    if (e.target.matches('.coke'))
    {
        console.log('Sodavand')
    }
    else
    {
        console.log('Alkohol')
    }
}