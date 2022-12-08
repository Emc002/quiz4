import React from "react";
import { Row, Col, Form } from "antd";
import "../App.css";

const FormAdd = ({ action, type, name }) => {
  return (
    <div className="boxform">
      <form
        className="form-container"
        onSubmit={(e) => {
          action(e);
        }}
      >
        <Col className="formData">
          {type === "UPDATE" && (
            <input className="input" type="number" placeholder="id" />
          )}
          <input className="input" type="text" placeholder="title" />
          <input className="input" type="text" placeholder="author" />
          <input className="input" type="text" placeholder="categories" />
          <button className="btn-submit" type="submit">
            {name}
          </button>
        </Col>
      </form>
    </div>
  );
};

export default FormAdd;
