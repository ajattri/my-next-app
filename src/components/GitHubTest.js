export default function calculateDaysBetweenDays (begin,end) {
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  const timeDiff = endDate - beginDate;
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

