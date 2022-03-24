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

export const COLS = {
  TIME: "Time",
  MAG: "Magnitude",
  TITLE: "Title",
};

const compare = (a, b, direction) => {
  if (a < b) {
    return direction ? -1 : 1;
  }
  if (a > b) {
    return direction ? 1 : -1;
  }
  return 0;
};

export const sortData = (data, col, direction) =>
    data.sort((a, b) => {
      if (col === COLS.TITLE) {
        return compare(a.properties.place, b.properties.place, direction);
      } else if (col === COLS.MAG) {
        const aFloat = parseFloat(a.properties.mag);
        const bFloat = parseFloat(b.properties.mag);
        return compare(aFloat, bFloat, direction);
      } else if (col === COLS.TIME) {
        return compare(a.properties.time, b.properties.time, direction);
      }
    });