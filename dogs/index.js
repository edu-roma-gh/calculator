const container = document.getElementById("cont");
const img = container.querySelector("img");
const feedback = container.querySelector("h2");

async function loadDog() {
  try {
    img.classList.add("hidden");
    feedback.innerText = "Loading...";
    feedback.classList.remove("hidden");
    feedback.classList.add("loading");
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const json = await res.json();
    if (json.status !== "success") {
      throw new Error("Something went wrong!");
    }
    img.classList.remove("hidden");
    img.src = json.message;
    feedback.classList.add("hidden");
  } catch (error) {
    feedback.innerText = "Something went wrong, try again later!!!";
    feedback.classList.remove("hidden");
    feedback.classList.remove("loading");
    feedback.classList.add("error");
  }
}

loadDog();
