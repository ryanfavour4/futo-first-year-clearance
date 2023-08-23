const dateOptions = {
  year: "numeric" as const,
  month: "long" as const,
  day: "numeric" as const,
};

const timeOptions = {
  hour: "numeric" as const,
  minute: "numeric" as const,
  timeZoneName: "short" as const,
};

// *========= TAKES IN : new Date() || new Date("2023-06-21T07:06:49.000Z") || "Mon Aug 21 2023 12:21:44 GMT+0100 (West Africa Standard Time)" ===========*

// !========= RETURNS : August 21, 2023 ===========*
export const formatDate = (date: Date | string) => {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleDateString("en-US", dateOptions);
};

// !========= RETURNS : 12:17 PM GMT+1 ===========*
export const formatTime = (date: Date | string) => {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleTimeString("en-US", timeOptions);
};
