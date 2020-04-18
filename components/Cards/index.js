// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const entry = document.querySelector('.cards-container')
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response.data)
        response.data.articles.javascript.forEach((i) => {
            const article = Article((i))
            entry.appendChild(article)
        })
        response.data.articles.bootstrap.forEach((i) => {
            const article = Article((i))
            entry.appendChild(article)
        })
        response.data.articles.jquery.forEach((i) => {
            const article = Article((i))
            entry.appendChild(article);
        })
        response.data.articles.node.forEach((i) => {
            const article = Article((i))
            entry.appendChild(article)
        })
        response.data.articles.technology.forEach((i) => {
            const article = Article((i))
            entry.appendChild(article)
        })
    })

function Article(object) {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const authorInfo = document.createElement('div')
    const imgDiv = document.createElement('div')
    const img = document.createElement('img')
    const authorName = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    authorInfo.classList.add('author')
    imgDiv.classList.add('img-container')

    card.appendChild(headline)
    card.appendChild(authorInfo)
    authorInfo.appendChild(imgDiv)
    imgDiv.appendChild(img)
    authorInfo.appendChild(authorName)

    img.src = object.authorPhoto
    authorName.textContent = 'By ' + object.authorName
    headline.textContent = object.headline

    return card
}