// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const dynamicParagraph = document.getElementById('dynamic-paragraph');

changeTextBtn.addEventListener('click', () => {
  dynamicParagraph.textContent = "The text has been changed dynamically via JavaScript!";
});

// Modify CSS styles dynamically
const styleBtn = document.getElementById('style-btn');
const styleParagraph = document.getElementById('style-paragraph');

styleBtn.addEventListener('click', () => {
  // Toggle styles
  if (styleParagraph.style.color === 'red') {
    styleParagraph.style.color = 'black';
    styleParagraph.style.fontSize = '1rem';
  } else {
    styleParagraph.style.color = 'red';
    styleParagraph.style.fontSize = '1.5rem';
  }
});

// Add or remove elements when button is clicked
const addElementBtn = document.getElementById('add-element-btn');
const removeElementBtn = document.getElementById('remove-element-btn');
const container = document.getElementById('container');

addElementBtn.addEventListener('click', () => {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'New dynamic element!';
  container.appendChild(newDiv);
});

removeElementBtn.addEventListener('click', () => {
  // Remove last child if exists
  if (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  } else {
    alert('No more elements to remove!');
  }
});
