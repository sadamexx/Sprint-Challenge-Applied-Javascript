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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        // console.log(response);
        let returnedObject = response.data.articles
            const objectInArray = Object.values(returnedObject);  
            console.log(objectInArray);
            // for(const key of objectInArray){
            //     console.log(key)
            // }
        let java = objectInArray[0]  
        java.forEach(info => {
            attachParent.appendChild(createCard(info.headline, info.authorName, info.authorPhoto, info.authorName))
            }) 
        let bootstrap = objectInArray[1]
        bootstrap.forEach(info => {
            attachParent.appendChild(createCard(info.headline, info.authorName, info.authorPhoto, info.authorName))
            }) 
        let technology = objectInArray[2]
        technology.forEach(info => {
            attachParent.appendChild(createCard(info.headline, info.authorName, info.authorPhoto, info.authorName))
            }) 
        let jquery = objectInArray[3]
        jquery.forEach(info => {
            attachParent.appendChild(createCard(info.headline, info.authorName, info.authorPhoto, info.authorName))
            }) 
        let node = objectInArray[4]
        node.forEach(info => {
            attachParent.appendChild(createCard(info.headline, info.authorName, info.authorPhoto, info.authorName))
            })        
        
    })

const attachParent = document.querySelector('.cards-container'); 

function createCard (title, author, picture, name){
    const mainCard = document.createElement('div');
    mainCard.classList.add('card');

    const mainTitle = document.createElement('div');
    mainTitle.classList.add('headline');
    mainTitle.textContent = title;
    mainCard.appendChild(mainTitle);

    const auth = document.createElement('div');
    auth.classList.add('author');
    auth.textContent = author;
    mainCard.appendChild(auth);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    auth.appendChild(imgContainer);

    const image = document.createElement('img');
    image.textContent = picture;
    image.src = picture;
    imgContainer.appendChild(image);

    const authName = document.createElement('span');
    authName.textContent = 'By:' + name;
    auth.appendChild(authName);

return mainCard;
}


