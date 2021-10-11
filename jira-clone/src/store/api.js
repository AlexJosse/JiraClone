//import axios from 'axios';

export const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };

/*export const fetchData = async () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
    if (
        // check if response's status is 200
        response.ok &&
        // check if API return data is in JSON format
        response.headers.get('Content-Type').includes('application/json')
    ) {
      return response.json()
    } else {
      throw new Error('something went wrong');
    }
  })
  .then(data => console.log(data))
  .catch(error => console.log(error.message));
}; */
