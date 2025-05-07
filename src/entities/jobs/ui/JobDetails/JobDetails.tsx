import React from "react";
import { ScrollView, View } from "react-native";

import { openInMaps } from "@shared/lib/openInMaps";

import { styles } from "./JobDetails.styles";
import { JobDescription } from "./internals/JobDescription/JobDescription";
import { JobDetailsActions } from "./internals/JobDetailsActions/JobDetailsActions";
import { JobDetailsCompany } from "./internals/JobDetailsCompany/JobDetailsCompany";
import { JobDetailsImage } from "./internals/JobDetailsImage/JobDetailsImage";
import { JobDetailsInfoRow } from "./internals/JobDetailsInfoRow/JobDetailsInfoRow";
import { JobDetailsLocation } from "./internals/JobDetailsLocation/JobDetailsLocation";
import { JobDetailsReportTo } from "./internals/JobDetailsReportTo/JobDetailsReportTo";
import { JobDetailsRequirements } from "./internals/JobDetailsRequirements/JobDetailsRequirements";
import { JobDetailsShifts } from "./internals/JobDetailsShifts/JobDetailsShifts";
import { JobDetailsTitle } from "./internals/JobDetailsTitle/JobDetailsTitle";

interface JobDetailsProps {
  job: any;
  colors: any;
  insets: any;
  router: any;
  profileName: string;
}

export const JobDetails: React.FC<JobDetailsProps> = ({
  job,
  colors,
  insets,
  router,
}) => {
  if (!job) return null;

  const handleOpenInMaps = () => openInMaps(job);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{
        paddingBottom: insets.bottom,
      }}
    >
      <View
        style={[
          styles.card,
          {
            backgroundColor: colors.cardBackground,
            borderColor: colors.tabIconDefault,
          },
        ]}
      >
        <JobDetailsImage imageUrl={job.jobTitle.imageUrl} />
        <JobDetailsTitle title={job.jobTitle.name} colors={colors} />
        <JobDetailsCompany company={job.company.name} colors={colors} />
        <JobDescription
          description={job.jobTitle.description}
          colors={colors}
        />
        <JobDetailsInfoRow job={job} colors={colors} />
        <JobDetailsShifts shifts={job.shifts} colors={colors} />
        <JobDetailsLocation
          address={job.company.address.formattedAddress}
          milesToTravel={job.milesToTravel}
          colors={colors}
          onPress={handleOpenInMaps}
        />
        <JobDetailsRequirements
          requirements={job.requirements}
          colors={colors}
        />
        <JobDetailsReportTo reportTo={job.company.reportTo} colors={colors} />
        <JobDetailsActions colors={colors} router={router} />
      </View>
    </ScrollView>
  );
};
