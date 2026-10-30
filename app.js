
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", function () {
    fetch("superheroes.php")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Unable to retrieve superheroes.");
            }

            return response.text();
        })
        .then(function (data) {
            alert(data);
        })
        .catch(function (error) {
            console.error(error);
            alert("An error occurred while loading superheroes.");
        });
});
