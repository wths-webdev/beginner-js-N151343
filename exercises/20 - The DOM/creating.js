console.log('it works!');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/200x200'
myImage.alt = 'Nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper') 
console.log(myDiv)


myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

// add to the top
const heading = document.createElement('h2');
heading.textContent = 'Cool things';
myDiv.insertAdjacentElement('afterbegin', (heading));

const unorderedList = document.createElement('ul');
unorderedList.textContent = .unorderedList;
myDiv.insertAdjacentElement('beforebegin', unorderedList);