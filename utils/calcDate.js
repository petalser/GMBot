const calcDate = (sec) => {
  const dtFormat = new Intl.DateTimeFormat("en-GB", {
    timeStyle: "medium",
    timeZone: "Europe/Warsaw",
  });
  const result = dtFormat.format(new Date(sec * 1e3));
  console.log(typeof result);
  return result.substring(0, 5);
};

export default calcDate;
