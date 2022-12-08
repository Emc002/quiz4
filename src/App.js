import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Row, Col } from "antd";
import "./App.css";
import FormAdd from "./component/FormAdd";
import { postBook, putBook, patchBook, deleteBook } from "./service";

function App() {
  const [book, setBooks] = useState(null);
  const [rendering, forceUpdate] = useReducer(x => x + 1, 0);
  const [page, setPages] = useState(1);


  const BACK = () => {
    if (page > 1) {
      setPages(page - 1);
      forceUpdate()
    }
  };
  const NEXT = () => {
    if (page < book.length) {
      setPages(page + 1);
      forceUpdate()
    }


  };

  const baseURL = `http://localhost:3004/books?_page=${page}&_limit=6`;
  console.log(baseURL);

  const getUsers = async () => {
    try {
      const response = await axios.get(baseURL);

      if (response.status === 200) {
        setBooks(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [rendering]);

  return (
    <>

      <Row className="boxatas" gutter={[48, 24]}>

        <div className="judulJson">
          <h1 className="navbarTitle"> LIBRARY DATA BOOKS</h1>
        </div>

        <div className="pagination">
          <h3 className="pagess">{page}</h3>
          <button className="tombP" onClick={NEXT}>NEXT</button>
          <button className="tombP" onClick={BACK}>PREV</button>
        </div>
        {book?.map((book) => (
          <Col className="boxContent" span={6}>
            <div >
              <div className="hole"></div>
              <div className="nomor">{book.id}</div>
              <h1 key={book.index}>{book.title}</h1>
              <h2 key={book.index}>{book.author}</h2>
              <h3 key={book.index}>{book.categories}</h3>
            </div>
          </Col>
        ))}
      </Row>
      <Row gutter={[24, 5]}>

        <Col className="boxform" span={8}>
          <h1 className="formjudul">PUT REQUEST TO JSON SERVER</h1>
          <FormAdd
            name="UPDATE"
            type="UPDATE"
            action={(e) => {
              putBook(e);
              forceUpdate(e)
            }}
          />
        </Col>

        <Col className="boxform" span={8}>
          <h1 className="formjudul">POST REQUEST TO JSON SERVER</h1>
          <FormAdd
            name="POST"
            action={(e) => {
              postBook(e);
              forceUpdate(e);

            }}
          />
        </Col>

        <Col className="boxform" span={8}>
          <h1 className="formjudul">PATCH REQUEST TO JSON SERVER</h1>
          <FormAdd
            name="UPDATE"
            type="UPDATE"
            action={(e) => {
              patchBook(e);
              forceUpdate(e)
            }}
          />
        </Col>


        <Col className="boxDelete" span={12}>
          <h1 className="formjudul1">DELETE REQUEST TO JSON SERVER</h1>
          <form

            name="DELETE"
            type="DELETE"
            onSubmit={(e) => {
              deleteBook(e);

              forceUpdate(e)

            }}
          >
            <Col className="formData1">
              <input className="input dele" type="number" placeholder="id" />
              <button className="btn-submit" type="submit">
                DELETE
              </button>
            </Col>
          </form>

        </Col>
      </Row>
    </>
  );
}

export default App;
