const calcAge = (date) => {
  const today = new Date();
  const dob = new Date(date);
  const month = today.getMonth() - dob.getMonth();
  let age = today.getFullYear() - dob.getFullYear();

  if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  return age;
};

module.exports = { calcAge };
