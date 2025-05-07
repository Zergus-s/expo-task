export type JobDto = {
  jobId: string;
  jobTitle: {
    name: string;
    imageUrl: string;
  };
  company: {
    name: string;
    address: {
      formattedAddress: string;
      zoneId: string;
    };
    reportTo?: {
      name: string;
      phone?: string;
    };
  };
  wagePerHourInCents: number;
  milesToTravel: number;
  shifts: JobShift[];
  branch: string;
  branchPhoneNumber: string;
  requirements?: string[];
};

export interface Job {
  id: string;
  jobTitle: {
    name: string;
    imageUrl: string;
  };
  company: {
    name: string;
    address: {
      formattedAddress: string;
      zoneId: string;
    };
    reportTo?: {
      name: string;
      phone?: string;
    };
  };
  wagePerHourInCents: number;
  milesToTravel: number;
  shifts: JobShift[];
  branch: string;
  branchPhoneNumber: string;
  requirements?: string[];
}

export interface JobShift {
  startDate: string;
  endDate: string;
}

export interface JobsApiState {
  ids: Array<string>;
  entities: Record<string, Job>;
}
