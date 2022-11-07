const replaceDot = (price) => {
  const stringfiedPrice = price.toString();
  const replacedPrice = stringfiedPrice.replace('.', ',');

  return replacedPrice;
};

export default replaceDot;
