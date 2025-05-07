import { Profile, ProfileDto } from "@entities/profile/model/profile";

export const getFakeProfile = (): Profile => ({
  address: {
    formattedAddress: "formattedAddress",
    zoneId: "zoneId",
  },
  email: "email",
  firstName: "firstName",
  lastName: "lastName",
  maxJobDistance: 100,
  phoneNumber: "phoneNumber",
  workerId: "workerId",
});

export const getFakeProfileDto = (): ProfileDto => ({
  address: {
    formattedAddress: "formattedAddress",
    zoneId: "zoneId",
  },
  email: "email",
  firstName: "firstName",
  lastName: "lastName",
  maxJobDistance: 100,
  phoneNumber: "phoneNumber",
  workerId: "workerId",
});
