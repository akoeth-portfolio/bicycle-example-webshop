import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { findProducts } from "../../actions/product";
import { useHistory } from "react-router-dom";

const Search = ({ findProducts }) => {
  const [formData, setFormData] = useState("");

  const onChange = (e) => {
    setFormData(e.target.value);
  };

  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    // checks if search input string has characters
    if (formData !== "" && /\S/.test(formData)) {
      const searchArray = formData.split(" ");
      const searchObj = {
        searchArray,
      };

      const searchResult = await findProducts(searchObj);

      console.log(searchResult.data);

      history.push({
        pathname: "/products/search-result",
        state: { detail: searchResult.data },
      });

      setFormData("");
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="form-inline">
        <input
          id="search_form"
          className="form-control"
          name="search_term"
          value={formData}
          onChange={(e) => onChange(e)}
          onSubmit="return false;"
          autoComplete="off"
        ></input>

        <button type="submit" className="btn btn-primary">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
};

Search.propTypes = {
  findProducts: PropTypes.func.isRequired,
};

export default connect(null, { findProducts })(Search);
