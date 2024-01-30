// Getting all the images with a class of "alcohol"
const alcoholImages = document.querySelectorAll('img.alcohol')

// Getting all the images with a class of "alcohol"
const cokeImages = document.querySelectorAll('img.coke')


// Adding event listener to each alcohol image
alcoholImages.forEach((alcoholImage) =>
{
    alcoholImage.addEventListener('click', function ()
    {
        console.log('Alkohol')
    })
})

// Adding event listener to each alcohol image
cokeImages.forEach((cokeImage) =>
{
    cokeImage.addEventListener('click', function ()
    {
        console.log('Cola')
    })
})









/* ONLY LOOK HERE IF YOU'RE CURIOS ON A ONE FUNCTION SOLUTION */
// const imageContainer = document.getElementById('image_container')

// // EVENT LISTENERS //
// imageContainer.addEventListener('click', (e) => checkBeverageType(e))


// // FUNCTIONS //

// /*
//     If you're curious on how to do it one function,
//     here's a solution using event bubbling (not something you're meant to understand now, hence I don't explain it).
// */
// function checkBeverageType(e)
// {
//     if (e.target.matches('.coke'))
//     {
//         console.log('Sodavand')
//     }
//     else
//     {
//         console.log('Alkohol')
//     }
// }