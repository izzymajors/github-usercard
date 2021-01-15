/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";

axios.get("https://api.github.com/users/izzymajors")
.then(response => {
  console.log(axios.get("https://api.github.com/users/izzymajors"));
  userMaker(response.data);
})
.catch(error =>{
  console.log(error);
})

axios.get(`https://api.github.com/users/izzymajors/followers`)
.then(response =>{
  response.data.forEach(newUser => {
    userMaker(newUser.res.data);
  })
})
.catch(error => {
  console.log(error);
});


//STEP2-3
function userMaker(data){
  const card = document.createElement("div");
  const img = document.createElement("img");
  const cardInfo = document.createElement("div");
  const userName = document.createElement("h3");
  const userUserName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const profileHref = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

//parent child structure of html
  card.appendChild(img);
  card.appendChild(cardInfo);
  card.appendChild(userName);
  card.appendChild(userUserName);
  card.appendChild(location);
  profile.appendChild(profileHref);
  card.appendChild(followers);
  card.appendChild(following);
  card.appendChild(bio);

//html structure
  card.classList.add("card");
  card.classList.add("card-info");
  card.classList.add("userName");
  card.classList.add("userUserName");

  //text content setup 
  img.setAttribute("src" , data.userImagUrl);
  userName.textContent = data.profileName;
  userUserName.textContent = data.name;
  location.textContent = `location: ${data.location}`;
  profile.textContent = `profile: `;
  profileHref.setAttribute("href", data.profileUrl);
  followers.textContent = `followers: ${data.followers}`;
  following.textContent = `following: ${data.following}`;
  bio.textContent = `bio: ${data.bio}`;


  //return card componet
  return card;

}
console.log(userMaker);

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
