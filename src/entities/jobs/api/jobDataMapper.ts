import { Job, JobDto } from "../model/jobsTypes";

export function jobDataMapper(dto: JobDto): Job {
  return {
    id: dto.jobId,
    jobTitle: dto.jobTitle,
    company: dto.company,
    wagePerHourInCents: dto.wagePerHourInCents,
    milesToTravel: dto.milesToTravel,
    shifts: dto.shifts,
    branch: dto.branch,
    branchPhoneNumber: dto.branchPhoneNumber,
    requirements: dto.requirements,
  };
}
