
const url = "http://api.github.com/users/FabricioOliveira1"

async function getImgGit () {
  await fetch(url)
  .then(response => response.json())
  .then(response => sendImgToHtml(response.avatar_url))
  .catch(error => console.error(error))
}

getImgGit()

function sendImgToHtml(image) {
  document.getElementById('img').src = image;
}

