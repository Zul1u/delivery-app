const formatDate = (date) => {
  const dateOnly = date.split('T')[0];
  return dateOnly.split('-').reverse().join('/');
};

export default formatDate;
