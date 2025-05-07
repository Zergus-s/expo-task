import { jobDataMapper } from "../jobDataMapper";
import { getFakeJob, getFakeJobDto } from "./doubles/Jobs.doubles";

describe("jobDataMapper", () => {
  it("should map JobDto to Job correctly", () => {
    const dto = getFakeJobDto();
    const result = jobDataMapper(dto);
    expect(result).toEqual(getFakeJob());
  });
});
