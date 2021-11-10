export const getArticles = () => {
  const apiKey = 'nPVp32YA7sHGkr7BavN6MlRsA3YRLZF4'
  return fetch(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKey}`)
    .then(response => checkForErrors(response))
}

export const checkForErrors = (response) => {
  if (!response.ok) {
    throw new Error(`${response.status} - something went wrong. ${response.statusText}`);
  }
  return response.json()
}
