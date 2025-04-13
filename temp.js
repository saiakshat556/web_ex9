// Array of daily temperature recordings (in Fahrenheit)
const temperatures = [55, 62, 68, 74, 59, 45, 41, 58, 60, 67, 65, 78, 82, 88, 91, 92, 90, 93, 87, 80, 78, 79, 72, 68, 61, 59, 55, 65];

// Categories
let hotDays = 0;
let pleasantDays = 0;
let coldDays = 0;

// Reference to the table body
const tableBody = document.getElementById("temperatureTable");

// Loop through temperatures and categorize each
temperatures.forEach((temp, index) => {
    let category;
    if (temp >= 85) {
        category = "HOT";
        hotDays++;
    } else if (temp >= 60 && temp <= 84) {
        category = "PLEASANT";
        pleasantDays++;
    } else {
        category = "COLD";
        coldDays++;
    }

    // Add row to the table
    const row = `<tr>
        <td>Day ${index + 1}</td>
        <td>${temp}</td>
        <td>${category}</td>
    </tr>`;
    tableBody.innerHTML += row;
});

// Display totals
document.getElementById("hotDays").textContent = hotDays;
document.getElementById("pleasantDays").textContent = pleasantDays;
document.getElementById("coldDays").textContent = coldDays;
