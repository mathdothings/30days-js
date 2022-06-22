const showDateTime = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const min = date.getMinutes();

  return `${day}/${month}/${year} ${hour}:${min}`;
};

console.log(showDateTime());
