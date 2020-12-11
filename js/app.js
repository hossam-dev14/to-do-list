let add = document.querySelector('.add'),
  todos = document.querySelector('.todos');

add.addEventListener('submit', e => {
  e.preventDefault(); 

  let txt = add.querySelector('input').value.trim(); // trim() to clear spaces around the string
  let new_li = document.createElement('li'),
    new_span = document.createElement('span'),
    new_img = document.createElement('img'),
    node = document.createTextNode(txt);

  if (txt.length) { // if txt's length > 0
    new_li.appendChild(new_span);
    new_span.appendChild(node);
    new_li.appendChild(new_img);
    todos.appendChild(new_li);
    add.reset(); // clear the input text 
  }

  new_img.src = "delete.svg"; // add img icon
  new_li.classList.add('d-flex',
    'list-group-item',
    'align-items-center',
    'justify-content-between',
  ); // add all the classes 

  new_img.classList.add('delete');

});


// delete todos : Use Event Delegation 
todos.addEventListener('click', e => {
  // check if the class list of the element
  //  that we click contains 'delete'.
  if (e.target.classList.contains('delete')) {
    // e.target, to gets what is the actual element 
    // that was clicked (the tag element).
    e.target.parentElement.remove();
  }
});








