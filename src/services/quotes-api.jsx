const BASE_URL = "https://seinfeld-quotes.herokuapp.com/quotes";

export function getAll() {
  return fetch(BASE_URL).then((res) => res.json());
}
