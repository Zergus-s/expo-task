export type ProfileDto = {
  address: {
    formattedAddress: string;
    zoneId: string;
  };
  email: string;
  firstName: string;
  lastName: string;
  maxJobDistance: number;
  phoneNumber: string;
  workerId: string;
};

export interface Profile {
  address: {
    formattedAddress: string;
    zoneId: string;
  };
  email: string;
  firstName: string;
  lastName: string;
  maxJobDistance: number;
  phoneNumber: string;
  workerId: string;
}
