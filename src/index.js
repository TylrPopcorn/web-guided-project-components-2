import axios from "axios";
// 👉 TASK 1- Test out the following endpoints:

//  https://dog.ceo/api/breeds/image/random

//  * With Firefox and the Network Tab
//  * With JS using the native fetch [STRETCH]


// 👉 TASK 2- Select the "entry point", the element
// inside of which we'll inject our dog cards 
const entryPoint = document.querySelector(".entry");


// 👉 TASK 3- `dogCardMaker` takes an object and returns a Dog Card.
// Use this function to build a Card, and append it to the entry point.
function dogCardMaker({ imageURL, breed }) {
  // instantiating the elements
  /*
    <div class="dog-card">
      <img class="dog-image">
      <h3>
    </div>
  */
 const cardContainer = document.createElement("div");
 const dogImg = document.createElement("img");
 const heading = document.createElement("h3");
  // set class names, attributes and text
  cardContainer.classList.add("dog-card");
  dogImg.classList.add("dog-image");
  heading.classList.add("dog-heading");
  dogImg.src = imageURL;
  dogImg.alt = "Cute doggo";
  heading.textContent = breed;

  // create the hierarchy
  cardContainer.appendChild(dogImg);
  cardContainer.appendChild(heading);

  // add some interactivity
  cardContainer.addEventListener("click", () => {
    cardContainer.classList.toggle("selected");
  })

  // never forget to return!
  return cardContainer;
}


// 👉 TASK 4- Bring the Axios library into the project using one of two methods:
//    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
//    * Projects with npm: install it with npm and import it into this file

function getDogs({ breed, number }) {
  const errorElem = document.createElement("h2");
  entryPoint.innerHTML = "";
  axios.get(`https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random/${number}`)
    .then((res) => {
      res.data.message.forEach(dog => {
        const dogCard = dogCardMaker({ imageURL: dog, breed: breed.toLowerCase() });
        entryPoint.appendChild(dogCard);
      })
    })
    .catch((err) => {
      errorElem.textContent = "PICK A REAL DOG BREED YA JOKER!";
      entryPoint.appendChild(errorElem);
    })
    .finally(() => console.log("DONE"))
}

document.querySelector("button").addEventListener("click", () => {
  const userInput = document.querySelector("input");
  getDogs({ breed: userInput.value, number: 3 });
})

// 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console
//    * IN ANY CASE: log "done" to the console


// 👉 (OPTIONAL) TASK 6- Wrap the fetching operation inside a function `getDogs`
// that takes a breed and a count (of dogs)


// 👉 (OPTIONAL) TASK 7- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`


// 👉 (OPTIONAL) TASK 8- Import the breeds from `breeds.js`
// and loop over them, fetching a dog at each iteration
