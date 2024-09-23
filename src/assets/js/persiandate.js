// Convert post dates to Persian
const postDates = document.getElementsByTagName("time");
for (const date of postDates) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const georgianDate = new Date(date.dateTime);
  date.textContent = georgianDate.toLocaleString("fa-IR", options);
};

// Convert archive page years to Persian
const archiveDates = document.getElementsByClassName("archive-date");
for (const date of archiveDates) {
  const options = {
    year: "numeric",
  };
  const georgianDate = new Date(date.textContent);
  date.textContent = georgianDate.toLocaleString("fa-IR", options);
};
