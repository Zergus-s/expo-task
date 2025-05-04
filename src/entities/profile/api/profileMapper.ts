import { Profile, ProfileDto } from "../model/profile";

export function profileDataMapper(dto: ProfileDto): Profile {
  return {
    address: {
      formattedAddress: dto.address.formattedAddress,
      zoneId: dto.address.zoneId,
    },
    email: dto.email,
    firstName: dto.firstName,
    lastName: dto.lastName,
    maxJobDistance: dto.maxJobDistance,
    phoneNumber: dto.phoneNumber,
    workerId: dto.workerId,
  };
}
