function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

window.addEventListener('DOMContentLoaded', async () => {

    const imageUrl = "https://dog.ceo/api/breeds/image/random";
    const imageUrlApiOptions = {method:"GET"};
    const imageUrlResponse = await fetch(imageUrl, imageUrlApiOptions);
    const imageJson = await imageUrlResponse.json();
    const $img = document.getElementById("dogImage");
    $img.src = imageJson.message;

    //get the breed of the dog in the photo
    const imageJsonMessage = imageJson.message;
    const lastSlashIndex = imageJsonMessage.lastIndexOf('/');
    const breedStr = imageJsonMessage.slice(30, lastSlashIndex);
    console.log(breedStr);

    //get the full list of breeds
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedUrlApiOptions = {method:"GET"};
    const breedUrlResponse = await fetch(breedUrl, breedUrlApiOptions);
    const breedJson =  await breedUrlResponse.json();
    const breedList = Object.keys(breedJson.message);

    //make selectable list of breeds
    shuffle(breedList);
    breedList.length = 4;
    breedList.push(breedStr);
    shuffle(breedList);
    console.log(breedList);
});