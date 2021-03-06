import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LineItem from "./LineItem";
import GrantTotal from "./GrantTotal";
import { getProducts } from "../../actions/product";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

const Cart = ({ cart, user, renderStripeComponent }) => {
  return cart.loading ? (
    <Spinner />
  ) : (
    <Fragment>
      {cart.line_items.length === 0 ? (
        <div id="cart_container">
          <h4>Your shopping cart is empty.</h4>
          <Link to="/products">
            <button
              type="button"
              class="btn btn-primary btn-lg"
              style={{ margin: "0 auto", display: "block", marginTop: "2rem" }}
            >
              <i class="fas fa-shopping-basket"></i>
              &nbsp; Go shopping! &nbsp;
              <i class="fas fa-shopping-basket"></i>
            </button>
          </Link>
        </div>
      ) : (
        <div id="cart_container">
          <h4 style={{ textAlign: "left", marginLeft: "1rem" }}>
            YOUR SHOPPING CART
          </h4>
          <div>
            {cart.line_items.map((line_item) => (
              <LineItem key={line_item._id} line_item={line_item} cart={cart} />
            ))}
          </div>
          <div id="grand_total">
            <div>
              {cart.line_items.length > 0 && (
                <GrantTotal
                  cart={cart}
                  user={user}
                  renderStripeComponent={renderStripeComponent}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getProducts })(Cart);
