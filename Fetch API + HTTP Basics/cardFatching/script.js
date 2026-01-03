fetch("https://randomuser.me/api/?results=1")
  .then((response) => response.json())
  .then((data) => {
    const user = data.results[0];

    const card = `
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
        <img class="w-full" src="${user.picture.large}" alt="User Image">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            ${user.name.first} ${user.name.last}
          </div>
          <p class="text-gray-700 dark:text-gray-300 text-base">
            ${user.email}<br>
            ${user.location.city}, ${user.location.country}
          </p>
        </div>
      </div>
    `;

    document.getElementById("cardContainer").innerHTML = card;
  })
  .catch((error) => {
    console.error("Error fetching user:", error);
  });
