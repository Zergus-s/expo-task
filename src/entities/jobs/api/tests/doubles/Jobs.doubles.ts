import { Job, JobDto, JobsApiState } from "@entities/jobs/model/jobsTypes";

export const getFakeJob = (): Job => ({
  id: "job-1",
  jobTitle: {
    name: "Cook",
    imageUrl: "http://img",
  },
  company: {
    name: "Company",
    address: {
      formattedAddress: "123 Main St",
      zoneId: "zone-1",
    },
    reportTo: {
      name: "Boss",
      phone: "1234567890",
    },
  },
  wagePerHourInCents: 1500,
  milesToTravel: 5,
  shifts: [
    {
      startDate: "2024-06-01T08:00:00Z",
      endDate: "2024-06-01T16:00:00Z",
    },
  ],
  branch: "Main",
  branchPhoneNumber: "555-1234",
  requirements: ["Knife"],
});

export const getFakeJobDto = (): JobDto => ({
  jobId: "job-1",
  jobTitle: {
    name: "Cook",
    imageUrl: "http://img",
  },
  company: {
    name: "Company",
    address: {
      formattedAddress: "123 Main St",
      zoneId: "zone-1",
    },
    reportTo: {
      name: "Boss",
      phone: "1234567890",
    },
  },
  wagePerHourInCents: 1500,
  milesToTravel: 5,
  shifts: [
    {
      startDate: "2024-06-01T08:00:00Z",
      endDate: "2024-06-01T16:00:00Z",
    },
  ],
  branch: "Main",
  branchPhoneNumber: "555-1234",
  requirements: ["Knife"],
});

export const getFakeJobsApiState = (): JobsApiState => ({
  ids: ["job-1"],
  entities: {
    "job-1": getFakeJob(),
  },
});
