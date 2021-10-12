//import axios from 'axios';

export const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();
      data.forEach((el, index) => {
        if (el.completed === true) {
          data[index].progress = 'done';
        } else {
          data[index].progress = 'not_started';
        }
      })
      return data;
    } catch (e) {
      console.log(e);
    }
  };
