export function formatDate(dateString: string | undefined): string {
  if (!dateString) {
    return "Invalid date";
  }

  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  const day = date.getDate().toString().padStart(2, "0");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
