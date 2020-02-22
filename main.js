function shuffle(array) { //shuffle array elements
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

  //get a random breed dog image source
  const imageUrl = "https://dog.ceo/api/breeds/image/random";
  const imageUrlApiOptions = { method: "GET" };
  const imageUrlResponse = await fetch(imageUrl, imageUrlApiOptions);
  const imageJson = await imageUrlResponse.json();
  const $img = document.getElementById("dogImage");
  $img.src = imageJson.message;
  $img.height = 300;

  //get the breed of the dog in the photo
  const imageJsonMessage = imageJson.message;
  const lastSlashIndex = imageJsonMessage.lastIndexOf('/');
  const breedStr = imageJsonMessage.slice(30, lastSlashIndex);
  console.log(breedStr);

  //get the full list of breeds
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const breedUrlApiOptions = { method: "GET" };
  const breedUrlResponse = await fetch(breedUrl, breedUrlApiOptions);
  const breedJson = await breedUrlResponse.json();
  const breedList = Object.keys(breedJson.message);

  //make selectable list of breeds
  shuffle(breedList);
  const numOptions = 3;
  breedList.length = numOptions - 1;
  breedList.push(breedStr);
  shuffle(breedList);
  console.log(breedList);
  const $breeds = document.getElementsByName("breed");
  const $breedLabels = document.getElementsByName("breed__label");
  for (let i = 0; i < breedList.length; ++i) {
    $breeds[i].value = breedList[i];
    $breedLabels[i].textContent = breedList[i];
  }

  //breed button listener
  const $breedButton = document.querySelector(".breed__button");
  $breedButton.addEventListener('click', (out) => {

    for (let i = 0; i < $breeds.length; ++i) {
      if ($breeds[i].checked) //correct
      {
        if ($breeds[i].value == breedStr) 
        {
          $breedLabels[i].style.color = "blue";
          $breedLabels[i].textContent = $breeds[i].value + " (Correct)";
          const delayInMilliseconds = 500;
          setTimeout(function () {
            location.reload();
          }, delayInMilliseconds);
        }
        else //wrong
        {
          $breedLabels[i].style.color = "red";
          $breedLabels[i].textContent = $breeds[i].value + " (Wrong)";
        }
        break;
      }
    }
  });
});