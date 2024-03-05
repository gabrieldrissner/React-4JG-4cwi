export const getFormattedDate = (date) => {
  const dateObject = new Date(date);
  var options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = dateObject.toLocaleString("DE-de", options);
  return formattedDate;
};
