const fact = document.getElementById("fact");

async function loadFact() {
  try {
    fact.innerText = "Loading...";
    fact.classList.add("loading");
    const data = await fetch("https://catfact.ninja/fact");
    const json = await data.json();
    fact.classList.remove("loading");
    fact.innerText = json.fact;
  } catch (error) {
    fact.classList.remove("loading");
    fact.innerText = "Cant load fact, try again later!!!";
    fact.classList.add("error");
  }
}

loadFact();
