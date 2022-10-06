var obj = {};
var quoteLength = 0;

window.onload = (load) => {
  const getJSON = async (url) => {
    const response = await fetch(url);
    if (!response.ok)
      // check if response worked (no 404 errors etc...)
      throw new Error(response.statusText);

    const data = response.json(); // get JSON from the response
    return data; // returns a promise, which resolves to this data value
  };

  console.log("Fetching data...");
  getJSON("https://raw.githubusercontent.com/dwyl/quotes/main/quotes.json")
    .then((data) => {
      obj = data;
      quoteLength = Object.keys(obj).length - 1;
    })
    .catch((error) => {
      console.error(error);
    });
};

// Function to generate random number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateQuote() {
  var author = document.getElementById("author");
  var quote = document.getElementById("quote");
  var num = randomNumber(0, quoteLength);
  author.innerHTML = obj[num].author;
  quote.innerHTML = '"' + obj[num].text + '"';
}
