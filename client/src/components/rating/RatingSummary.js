import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import RatingsItem from "./RatingsItem";
import Spinner from "../layout/Spinner";
import LineItemImage from "../cart/LineItemImage";

// denormalization had been implemented to avoid costly db queries and expensive looping through arrays
// so the user collection in mongo db has an embedded reviews array (so does the product collection --> redundancies!!)

const RatingSummary = ({ user, loading }) => {
  return loading ? (
    <Spinner />
  ) : user.reviews.length === 0 ? (
    <div id="rating_summary_container">
      <h3 style={{ textAlign: "center" }}>no reviews yet</h3>
    </div>
  ) : (
    <div id="rating_summary_container">
      {user.reviews.map((review) => {
        // reusing @components/cart/LineItemImage.js the props passed to this component have to be set in a way the component can work with them
        // hence the following three lines of spaghetti code...
        const line_item = {};
        line_item.image_url = review.product_image_url;
        review.user_name = user.firstname;
        return (
          <div id="summary_item_row" className="row">
            <div className="col-xl-4">
              <Link to={`/products/${review.product_id}`}>
                <LineItemImage key={review.product_id} line_item={line_item} />
                <div>{review.product_name}</div>
              </Link>
            </div>

            <div className="col-xl-8">
              <RatingsItem key={review._id} review={review} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

RatingSummary.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, null)(RatingSummary);
