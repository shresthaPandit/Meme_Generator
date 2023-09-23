
    const generateButton = document.querySelector("#generatebutton");
    const memeTitle = document.querySelector("#title");
    const memeImg = document.querySelector(".conatiner img");
  
    const generateMeme = () => {
      // Fetch a new meme from the API
      fetch("https://meme-api.com/gimme")
        .then((response) => response.json())
        .then((data) => {
          // Update the meme title and image
          memeTitle.textContent = data.title;
          memeImg.setAttribute("src", data.url);
        })
        .catch((error) => {
          console.error("Error fetching meme:", error);
        });
    };
  
    // Add a click event listener to the button
    generateButton.addEventListener("click", generateMeme);
  
    // Initial generation of a meme when the page loads
    generateMeme();

  