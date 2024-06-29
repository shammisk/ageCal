// Function to calculate age
function getDOB() {
  // Get input dates
  let dobString = document.getElementById("inputDob").value;
  let currentDate = document.getElementById("cdate").value;

  // Convert input dates to Date objects
  let dob = new Date(dobString);
  let now = new Date(currentDate);

  // Validate input dates
  if (isNaN(dob.getTime()) || isNaN(now.getTime())) {
    document.getElementById("currentAge").innerHTML = "Invalid Date";
    return;
  }

  // Calculate age
  let yearDiff = now.getFullYear() - dob.getFullYear();
  let monthDiff = now.getMonth() - dob.getMonth();
  let dayDiff = now.getDate() - dob.getDate();

  // Adjust for negative month difference or day difference
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    yearDiff--;
    if (monthDiff < 0) monthDiff += 12;
  }

  // Display calculated age
  document.getElementById(
    "currentAge"
  ).innerHTML = `Your current age is ${yearDiff} years, ${monthDiff} months, ${dayDiff} days.`;
}

// Function to set current date as default
function currentDate() {
  let now = new Date();
  document.getElementById("cdate").value = formatDate(now);
}

// Function to format date as yyyy-mm-dd
function formatDate(date) {
  let year = date.getFullYear();
  let month = ("0" + (date.getMonth() + 1)).slice(-2); // Adding leading zero if needed
  let day = ("0" + date.getDate()).slice(-2); // Adding leading zero if needed
  return `${year}-${month}-${day}`;
}

// Call currentDate() on page load to set default current date
currentDate();
