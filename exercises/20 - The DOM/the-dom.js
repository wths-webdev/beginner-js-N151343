const pic = document.querySelector('.nice');

// pic.classList.add('open')
// console.log(pic.classList)

function toggleRound() {
    pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);

pic.alt = 'No pic found'; // setter
pic.width = 200;
console.log(pic.alt); // getter
console.log(pic.naturalWidth);

