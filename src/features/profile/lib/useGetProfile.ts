import { useGetProfileQuery } from "@entities/profile/api/profileApi";

export const useGetProfile = () => {
  const { data: profileData, isFetching, isLoading } = useGetProfileQuery();

  const isProfileDataLoading = isFetching || isLoading;

  return {
    profileData,
    isProfileDataLoading,
  };
};
