function favColor(event){
    alert("My favorite color is a dark, rich blue")
}
document.querySelector('#color').addEventListener('click', favColor)

function favPlace(event){
    alert("My favorite place is where my friends are")
}

document.querySelector('#place').addEventListener('click', favPlace)

function favRitual(event){
    alert("My favorite ritual is any that involves summoning demons... Jk, it's actually just practicing meditation in nature")
}

document.querySelector('#ritual').addEventListener('click', favRitual)

function recommendHobby(event){
    event.preventDefault();
    newHobby = document.createElement('li')
    newHobby.textContent = document.querySelector('#hobbyInput').value
    document.querySelector('#new-hobby-list').appendChild(newHobby)
    document.querySelector('#hobbyInput').value = ''
    // alert('Hobby sent to Calvin!')
}

document.querySelector('#recHobby').addEventListener('submit', recommendHobby)
