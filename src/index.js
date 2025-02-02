import axios from "axios";

// 👉 TASK 1- Test out the following endpoints:

//  https://dog.ceo/api/breeds/image/random

//  * With Firefox and the Network Tab
//  * With JS using the native fetch [STRETCH]


// 👉 TASK 2- Select the "entry point", the element
// inside of which we'll inject our dog cards 
const entryPoint = document.querySelector(".entry");
//console.log(entryPoint);



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
  // set class names, attributes and text

  // create the hierarchy

  // add some interactivity

  // never forget to return!
  const newcard = document.createElement("div");
  newcard.classList.add("dog-card");
  const newImg = document.createElement("img");
  newImg.classList.add("dog-imge");
  newcard.appendChild(newImg);
  const newH3 = document.createElement("h3");
  newcard.appendChild(newH3);
  newH3.textContent = `Breed: ${breed}`
  newImg.src = imageURL;

  newcard.addEventListener("click", (val) => {
    newcard.classList.toggle("selected");
  })

  return newcard;
}


// 👉 TASK 4- Bring the Axios library into the project using one of two methods:
//    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
//    * Projects with npm: install it with npm and import it into this file



// 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console
//    * IN ANY CASE: log "done" to the console


// 👉 (OPTIONAL) TASK 6- Wrap the fetching operation inside a function `getDogs`
// that takes a breed and a count (of dogs)


// 👉 (OPTIONAL) TASK 7- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`
function getDogs(breed, count) {
  axios.get(`htps://dog.cco/api/breed/${breed}/images/random/${count}`).then(res => {
    entryPoint.innerHTML = ""
    console.log(res.data)
    res.data.message.forEach(function (dog) {
      const dogObj = {
        breed: "Tylr",
        imageURL: res.data.message,
      }

    })
    const dogCard = dogCardMaker(dogObj);
    entryPoint.appendChild(dogCard);
  })
    .catch(err => console.log(err))
    .finally(() => console.log("WHEW IM DONE."));
}
const button = document.querySelector("button");
button.addEventListener("click", () => { getDogs("chow", 5) });
// 👉 (OPTIONAL) TASK 8- Import the breeds from `breeds.js`
// and loop over them, fetching a dog at each iteration
