import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

import { ProfileDto } from "../../model/profile";
import { profileDataMapper } from "../profileMapper";
import { getFakeProfile, getFakeProfileDto } from "./doubles/Profile.doubles";

describe("profileDataMapper", () => {
  it("should map ProfileDto to Profile correctly", () => {
    const dto: ProfileDto = {
      address: {
        formattedAddress: "123 Main St",
        zoneId: "zone-1",
      },
      email: "test@example.com",
      firstName: "John",
      lastName: "Doe",
      maxJobDistance: 50,
      phoneNumber: "1234567890",
      workerId: "worker-123",
    };

    const result = profileDataMapper(getFakeProfileDto());

    expect(result).toEqual(getFakeProfile());
  });
});
