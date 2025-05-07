import { i18n } from "@shared/i18n";

export const formatShift = (start: string | Date, end: string | Date) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const months = [
    i18n.months.jan,
    i18n.months.feb,
    i18n.months.mar,
    i18n.months.apr,
    i18n.months.may,
    i18n.months.jun,
    i18n.months.jul,
    i18n.months.aug,
    i18n.months.sep,
    i18n.months.oct,
    i18n.months.nov,
    i18n.months.dec,
  ];
  const weekdays = [
    i18n.weekdays.sun,
    i18n.weekdays.mon,
    i18n.weekdays.tue,
    i18n.weekdays.wed,
    i18n.weekdays.thu,
    i18n.weekdays.fri,
    i18n.weekdays.sat,
  ];

  const month = months[startDate.getMonth()];
  const day = startDate.getDate();
  const weekday = weekdays[startDate.getDay()];

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? i18n.time.pm : i18n.time.am;
    hours = hours % 12;
    if (hours === 0) hours = 12;
    return `${hours}:${minutes.toString().padStart(2, "0")}${ampm}`;
  };

  const tzMatch = startDate
    .toLocaleTimeString("en-us", { timeZoneName: "short" })
    .match(/\b([A-Z]{2,4})\b$/);
  const tz = tzMatch ? tzMatch[1] : "";

  return `${month} ${day}, ${weekday} ${formatTime(startDate)} - ${formatTime(endDate)} ${tz}`;
};
