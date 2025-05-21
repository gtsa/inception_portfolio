function changeLanguage(lang) {
  location.hash = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
  location.reload();

  const cvFilename = `CV_TSAGIANNIS_${lang}.pdf`;
  document.getElementById('download1').setAttribute('href', `files/${cvFilename}`);
  document.getElementById('download2').setAttribute('href', `files/${cvFilename}`);
}

async function fetchContentFromJSON() {
  const response = await fetch('content.json', { cache: "no-store" });
  const data = await response.json();

  // Detect current language from hash or default to 'en'
  const currentLang = window.location.hash.slice(1, 3) || 'en';
  const languageData = data[currentLang] || data.en;

  // Set CV links
  const cvFilename = `CV_TSAGIANNIS_${currentLang}.pdf`;
  document.getElementById('download1Link').setAttribute('href', `files/${cvFilename}`);
  document.getElementById('download2Link').setAttribute('href', `files/${cvFilename}`);

  // Update page content
  const htmls = ["titleInfo", "descriptionInfo", "experience1Description", "experience2Description", "experience3Description"];
  const keys = Object.keys(languageData);
  const texts = keys.filter(key => !htmls.includes(key));

  texts.forEach((key) => {
    const el = document.getElementById(key);
    if (el) el.textContent = languageData[key];
  });

  htmls.forEach((key) => {
    const el = document.getElementById(key);
    if (el) el.innerHTML = languageData[key];
  });

  return data;
}

fetchContentFromJSON();
