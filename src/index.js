console.log('%c HI', 'color: firebrick')

function fetchDogImg() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {
        data.message.forEach(img => renderDogImg(img))
    })
}

//render Dogs function
function renderDogImg(image) {
    const dogContainer = document.querySelector('div')
    const newImage = document.createElement('img')
    newImage.src = image
    dogContainer.appendChild(newImage)
}

function fetchBreed() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        let breed = Object.keys(data.message)
        addBreed(breed)
    }) // x is the function that adds the breed?
}

function addBreed(breed) {
    let breedContainer = document.querySelector('#dog-breeds')
     
    breed.forEach(breed => {
        const li = document.createElement('li')
        li.innerHTML = breed
        breedContainer.appendChild(li)
        li.addEventListener('click', () => {
            li.style.color = 'purple'
        })
    })
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDogImg()
    fetchBreed()
})


