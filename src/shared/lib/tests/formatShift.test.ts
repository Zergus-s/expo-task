import { formatShift } from "@entities/jobs/lib/formatShift";

jest.mock("../i18n", () => ({
  i18n: {
    months: {
      jan: "JAN",
      feb: "FEB",
      mar: "MAR",
      apr: "APR",
      may: "MAY",
      jun: "JUN",
      jul: "JUL",
      aug: "AUG",
      sep: "SEP",
      oct: "OCT",
      nov: "NOV",
      dec: "DEC",
    },
    weekdays: {
      sun: "SUN",
      mon: "MON",
      tue: "TUE",
      wed: "WED",
      thu: "THU",
      fri: "FRI",
      sat: "SAT",
    },
    time: {
      am: "AM",
      pm: "PM",
    },
  },
}));

describe("formatShift", () => {
  it("formats a shift with string dates", () => {
    const start = "2024-06-01T08:00:00Z";
    const end = "2024-06-01T16:00:00Z";
    const result = formatShift(start, end);
    expect(result).toMatch(/JUN 1, SAT 10:00AM - 6:00PM/);
  });

  it("formats a shift with Date objects", () => {
    const start = new Date("2024-06-02T09:30:00Z");
    const end = new Date("2024-06-02T17:45:00Z");
    const result = formatShift(start, end);
    expect(result).toMatch(/JUN 2, SUN 11:30AM - 7:45PM/);
  });

  it("pads minutes with zero", () => {
    const start = new Date("2024-06-03T10:05:00Z");
    const end = new Date("2024-06-03T12:09:00Z");
    const result = formatShift(start, end);
    expect(result).toMatch(/12:05PM - 2:09PM/);
  });
});
