import moment from "moment";

export const dateFormatter = (date, format = "LLL") => {
  const currentDate = date || new Date();
  return moment(currentDate).format(format);
};
