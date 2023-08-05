import { DateType } from "~/types/Date";

export function formatDate(date: DateType) {
  let hours = "00";
  let minutes = "00";

  if (date.hours < 10) {
    hours = `0${date.hours}`;
  }

  if (date.minutes < 10) {
    minutes = `0${date.minutes}`;
  }

  return `${hours}:${minutes}`;
}
