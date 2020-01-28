function fetchBooks() {
  // pass in url
  return fetch('https://anapioficeandfire.com/api/books')
  // turn that response into .json
  .then(resp => resp.json())
  // then give that json a task
  .then(json => renderBooks(json));

}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

// function getPosts(json){
//   json => renderBooks(json)

// }