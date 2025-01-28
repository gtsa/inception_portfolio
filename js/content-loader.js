async function fetchContentFromJSON() {
  const response = await fetch('../content.json', {cache: "no-store"});
  const data = await response.json();
  return data;
}

fetchContentFromJSON().then(data => {
  const language = data
  // Check if a hash value exists in the URL
  if (!["#el", "#fr"].includes(window.location.hash)) {
    keys = Object.keys(language.en)
    htmls = ["titleInfo", "descriptionInfo", "experience1Description", "experience2Description", "experience3Description"]
    texts = keys.filter(key => !htmls.includes(key))
    // Set the content of the webpage
    texts.forEach((key) => {
      document.getElementById(key).textContent = language.en[key]
    })
    htmls.forEach((key) => {
      document.getElementById(key).innerHTML = language.en[key]
    })
  }
})
