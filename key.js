const form = document.querySelector('#add-friend')
const input = document.querySelector('#first-name')
const friendsList = document.querySelector('#friends-list')
const removeFriend = document.querySelectorAll('li button')

document.querySelector('input').addEventListener('keydown', function(e){
    console.log('KEY PRESSED', e.key);
})

// for (let btn of removeFriend) {
//     btn.addEventListener('click', function(e){
//         e.target.parentElement.remove();
//     })
// }

// learned delegation, reduce code length/complexity.
friendsList.addEventListener('click', function(e){
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    };
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(input.value)
    const newLi = document.createElement('li');
    const removeBtn = document.createElement('button')
//     removeBtn.addEventListener('click', function(e){
//         e.target.parentElement.remove();
//     })
    removeBtn.textContent = 'Unfriend'
    removeBtn.classList.add('unfriend')
    newLi.textContent = input.value;
    friendsList.appendChild(newLi)
    newLi.appendChild(removeBtn)
    input.value = ''
}) 

