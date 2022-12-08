import axios from "axios";



export const postBook = async (e) => {
  try {
    e.preventDefault()
    const res = await axios.post('http://localhost:3004/books', {
      title: e.target[0].value,
      author: e.target[1].value,
      categories: e.target[2].value
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}



export const putBook = async (e) => {
  e.preventDefault();
  const body = {};

  for (let i = 0; i < e.target.length - 1; i++) {
    if (e.target[i].value) {
      body[e.target[i].placeholder] = e.target[i].value;
    }
  }

  try {
    const response = await axios.put("http://localhost:3004/books/" + e.target[0].value, {
      ...body,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }

};

export const patchBook = async (e) => {
  e.preventDefault();
  const body = {};
  for (let i = 0; i < e.target.length - 1; i++) {
    if (e.target[i].value) {
      body[e.target[i].placeholder] = e.target[i].value;
    }
  }

  try {
    const res = await axios.patch("http://localhost:3004/books/" + e.target[0].value, {
      ...body,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteBook = async (e) => {
  e.preventDefault();
  const body = {};
  try {
    const response = await axios.delete("http://localhost:3004/books/" + e.target[0].value, {
      ...body,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }

};

