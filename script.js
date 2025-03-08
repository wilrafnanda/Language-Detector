const inputEl = document.getElementById("input");
const languageEl = document.getElementById("language");
const descriptionEl = document.getElementById("description");
const boxEl = document.getElementById("respond-box")


const apiKey = "FKAla1CZ9wZCWDwg2kSb9g==Upvfj37egVNRV2ZH";

const options ={
    method: "GET",
    headers:{
        "X-Api-Key": apiKey,
    },
};



 async function fetchAPI(word){
    try {
        descriptionEl.innerText = "waiting for respond.....";
        const apiURL = `https://api.api-ninjas.com/v1/textlanguage?text=${word}`;
        const responds = await fetch(apiURL,options);
        const data = await responds.json();
        console.log(data);
        descriptionEl.innerText = "Enter atleast a word for proper detection";
        languageEl.innerText = `${data.language}`;
    } catch (error) {
        boxEl.style.display = "none";
        descriptionEl.innerText = "No internet connexion try later...";
    }

    
    
    
 }







inputEl.addEventListener("keyup",(e) =>{
    if (e.target.value.trim() && e.key === "Enter") {
        fetchAPI(e.target.value.trim());
    }
})