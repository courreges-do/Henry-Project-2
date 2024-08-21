const axios = require("axios");

function formReset(){
    const form = document.querySelector("form");
    if (form){
      form.reset();
    }
}

async function formSubmit() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const chosenGenres = [];
            const checkboxes = document.querySelectorAll(".form-check-input");
            checkboxes.forEach((checkbox) => {
                if (checkbox.checked) {
                    chosenGenres.push(checkbox.value);
                }
            });
            if (chosenGenres.length == 0) {
                alert("Please choose at least one genre");
                return;
            }

            const newMovieData = {
                title: document.getElementById("titleInput").value.trim(),
                genre: chosenGenres,
                director: document.getElementById("directorInput").value.trim(),
                rate: Number(document.getElementById("rateInput").value.trim()),
                year: Number(document.getElementById("yearInput").value.trim()),
                duration: document.getElementById("durationInput").value.trim(),
                poster: document.getElementById("posterInput").value.trim(),
            };

            try {
                const response = await axios.post("http://localhost:3000/movies/", newMovieData);
                console.log("Movie created successfully:", response.data);
                alert("Movie created successfully");
            } catch (error) {
                if (error.response) {
                    console.error("Error while creating movie:", error.response.data);
                    alert("Error while creating movie: " + error.response.data.message);
                } else {
                    console.error("Error while creating movie:", error.message);
                    alert("Error while creating movie");
                }
            }
            
        });
    }
}


formReset();
formSubmit();


module.exports = {
    formReset,
    formSubmit
}
