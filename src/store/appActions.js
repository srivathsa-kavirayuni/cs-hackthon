export const updateWhishlist = (payload) => {
  console.log("Check in action : ", payload);
  return {
    type: "UPDATE_WHISHLIST",
    payload,
  };
};
