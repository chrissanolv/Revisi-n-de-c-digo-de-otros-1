const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Corregido: .name
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location'); // Asegúrate de que este elemento exista en el HTML

async function displayUser(username) {
  $n.textContent = 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`); // Maneja errores de HTTP
    }
    const data = await response.json(); // Parsear la respuesta a JSON
    console.log(data);
    $n.textContent = `${data.name || 'No disponible'}`; // Usar backticks
    $b.textContent = `${data.blog || 'No disponible'}`;
    $l.textContent = `${data.location || 'No disponible'}`;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; // Corregido: $n
}

displayUser('stolinski');