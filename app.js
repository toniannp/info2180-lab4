const searchForm = document.getElementById("searchForm");
const queryInput = document.getElementById("query");
const resultDiv = document.getElementById("result");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const query = queryInput.value.trim();

    const url = "superheroes.php?query=" + encodeURIComponent(query);

    fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Unable to retrieve superheroes.");
            }

            return response.text();
        })
        .then(function (data) {
            resultDiv.innerHTML = data;
        })
        .catch(function (error) {
            console.error(error);
            resultDiv.textContent =
                "An error occurred while loading superheroes.";
        });
});
