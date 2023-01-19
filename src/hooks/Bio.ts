export function getBio() {
  // Query the bio from the REST API
  return fetch('http://localhost:3001/profile/career@jordanbaumgardner.com')
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
