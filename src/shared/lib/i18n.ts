import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../../locales/en.json";

const literals = {
  "jobDetails.distance": "Distance",
  "jobDetails.hourlyRate": "Hourly Rate",
  "jobDetails.shiftDates": "Shift Dates",
  "jobDetails.location": "Location",
  "jobDetails.requirements": "Requirements",
  "jobDetails.reportTo": "Report To",
  "jobDetails.description": "Description",
  "jobDetails.noThanks": "No Thanks",
  "jobDetails.illTakeIt": "I'll Take it",
  "jobDetails.milesFromSearch": "miles from your job search location",
  "jobDetails.miles": "miles",
  "jobDetails.maxJobDistance": "Max Job Distance: {{distance}} miles",
  "profile.loading": "Loading...",
  "profile.goToSettings": "Go to Settings",
  "jobs.loading": "Loading jobs...",
  "jobs.refreshing": "Refreshing...",
  "jobs.noJobs": "No jobs found.",
  "emptyState.refresh": "Refresh",
  "job.notFound": "Job not found.",
  "app.swipejobs": "swipejobs",
  "settings.title": "Settings Screen",
  "settings.switchMode": "Switch to {{mode}} Mode",
  "settings.currentMode": "Current mode: {{mode}}",
  "notFound.title": "This screen doesn't exist.",
  "notFound.goHome": "Go to home screen!",
  "toast.jobAccepted": "Job accepted!",
  "toast.jobRejected": "Job rejected!",
  "toast.acceptJobFailed": "Failed to accept job",
  "toast.rejectJobFailed": "Failed to reject job",
  "toast.unknownError": "Unknown error",
};

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: { translation: { ...en, ...literals } },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
