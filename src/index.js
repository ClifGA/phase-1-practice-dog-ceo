const dogContainer = document.querySelector('#dog-image-container')
const ulDog = document.querySelector('#dog-breeds')
const dropdown = document.getElementById('breed-dropdown')

fetch('https://dog.ceo/api/breeds/image/random/4')
.then(res => res.json())
.then(data => renderDogs(data))

const renderDogs = array => {
    array.message.forEach(element => {
        dogImg = document.createElement('img')
        dogImg.src = element
        dogContainer.append(dogImg)
    })
}

fetch('https://dog.ceo/api/breeds/list/all').then(res => res.json()).then(data => {
    let dogNames = Object.keys(data.message)
    dogList(dogNames)
})

const dogList = array => {
    array.forEach(element => {
        let dogli = document.createElement('li')
        dogli.textContent = element
        ulDog.append(dogli)
        dogli.addEventListener('click', (e)=>{
            e.target.style.color = "red"
        })
    
    dropdown.addEventListener('change', (e) => {
            let letter = e.target.value
            let filterdogs = array.filter(dog => dog.startsWith(letter))
            ulDog.innerHTML=''
            dogList(filterdogs)
        })       
    })
}

