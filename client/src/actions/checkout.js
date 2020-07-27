import axios from "axios";
import { DUMMY_DISPATCH } from "./types";

// Process Stripe payment
export const processPayment = (token, addresses) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      "/api/checkout/",
      { token, addresses },
      config
    );

    console.log("Response:", res.data);

    dispatch({
      type: DUMMY_DISPATCH,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
