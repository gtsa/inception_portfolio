// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}


async function fetchContentFromJSON() {
  const response = await fetch('../content.json', {cache: "no-store"});
  const data = await response.json();
  return data;
}

fetchContentFromJSON().then(data => {
  const language = data
  // Check if a hash value exists in the URL
  if (window.location.hash) {
    keys = Object.keys(language.el)
    htmls = ["titleInfo", "descriptionInfo", "experience1Description", "experience2Description", "experience3Description"]
    texts = keys.filter(key => !htmls.includes(key))
    // Set the content of the webpage
    // depending on the hash value
    texts.forEach((key) => {
      document.getElementById(key).textContent = language[window.location.hash.slice(1, 3)][key]
    })
    htmls.forEach((key) => {
      document.getElementById(key).innerHTML = language[window.location.hash.slice(1, 3)][key]
    })
  }
})
