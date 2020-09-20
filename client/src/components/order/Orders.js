import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import OrderHeaders from "./OrderHeaders";
import { getAllOrdersByUser } from "../../actions/order";
import Spinner from "../layout/Spinner";
import { connect } from "react-redux";

const Orders = ({ order, orders, user, getAllOrdersByUser }) => {
  useEffect(() => {
    getAllOrdersByUser();
  }, []);

  return order.loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div id="orders_header_container" className="container">
        <div>customer number: {user && user._id}</div>
        <div className="row">
          <b className="col">order id</b>
          <b className="col">date</b>
          <b className="col">total</b>
          <b className="col">status</b>
        </div>
        <div>
          {orders.map((order) => (
            <div id="orders_container">
              <OrderHeaders key={order._id} order={order} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

Orders.propTypes = {
  order: PropTypes.object.isRequired,
  orders: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  order: state.order,
  orders: state.order.orders,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getAllOrdersByUser })(Orders);
