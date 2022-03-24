export const formatTime = (time) => {
  const date = new Date(time);
  return date.toLocaleTimeString([], {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};
