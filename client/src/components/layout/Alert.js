import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Alert = ({ alerts }) => {
  if (alerts[0] && alerts[0].alertType === "link") {
    return (
      alert !== null &&
      alerts.length > 0 &&
      alerts.map((alert) => (
        <div key={alert.id} className={`alert alert-${alert.alertStyle}`}>
          {alert.msg} <Link to="/cart">Go to shopping cart</Link>
        </div>
      ))
    );
  } else {
    return (
      alert !== null &&
      alerts.length > 0 &&
      alerts.map((alert) => (
        <div key={alert.id} className={`alert alert-${alert.alertStyle}`}>
          {alert.msg}
        </div>
      ))
    );
  }
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps)(Alert);
