export const updateWhishlist = (payload) => {
  console.log("Check in action : ", payload);
  return {
    type: "UPDATE_WHISHLIST",
    payload,
  };
};

export const getCompany = (payload) => {
  console.log("GET_COMPANY ", payload);
  return {
    type: "GET_COMPANY",
    payload,
  };
};

export const getRecommendedCompanies = (payload) => {
  console.log("GET_RECOMMENDED ", payload);

  return {
    type: "GET_RECOMMENDED",
    payload,
  };
};
