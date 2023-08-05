import { DateType } from "@/types/Date";

export function formatDate(date: DateType) {
  let hours: string | number = date.hours;
  let minutes: string | number = date.minutes;

  if (date.hours < 10) {
    hours = `0${date.hours}`;
  }

  if (date.minutes < 10) {
    minutes = `0${date.minutes}`;
  }

  return `${hours}:${minutes}`;
}
