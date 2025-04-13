// Initialize the seating chart and tickets list
let seats = Array(10).fill(0); // 0 indicates an empty seat
let tickets = []; // Array to store all ticket details

// Function to reserve a seat
function reserveSeat() {
    const name = prompt("Enter your name:");
    const section = parseInt(prompt("Enter 1 for First Class (Seats 1–5) or 2 for Economy (Seats 6–10):"), 10);

    if (!name || (section !== 1 && section !== 2)) {
        alert("Invalid input. Please try again.");
        return;
    }

    const outputDiv = document.getElementById("output");
    const ticketsDiv = document.getElementById("ticketsList");

    let seatNumber = -1;

    // Check and assign a seat in the chosen section
    if (section === 1) {
        seatNumber = seats.slice(0, 5).indexOf(0); // Check first-class seats (1–5)
        if (seatNumber !== -1) {
            seatNumber += 1; // Adjust index to match seat number
            seats[seatNumber - 1] = 1; // Mark the seat as taken
            tickets.push({ name, seatNumber, section: "First Class" });
            outputDiv.innerHTML = `<p><strong>Boarding Pass:</strong></p>
                <p>Name: ${name}</p>
                <p>Seat Number: ${seatNumber}</p>
                <p>Class: First Class</p>`;
        } else if (confirm("First Class is full. Would you like to be placed in Economy Class?")) {
            reserveInEconomy(name, outputDiv, ticketsDiv);
        } else {
            outputDiv.innerHTML = "<p>No seats available in First Class.</p>";
        }
    } else if (section === 2) {
        reserveInEconomy(name, outputDiv, ticketsDiv);
    }

    // Update and display all tickets
    displayTickets();
}

// Function to reserve in Economy Class
function reserveInEconomy(name, outputDiv, ticketsDiv) {
    let seatNumber = seats.slice(5).indexOf(0); // Check economy seats (6–10)
    if (seatNumber !== -1) {
        seatNumber += 6; // Adjust index to match seat number
        seats[seatNumber - 1] = 1; // Mark the seat as taken
        tickets.push({ name, seatNumber, section: "Economy" });
        outputDiv.innerHTML = `<p><strong>Boarding Pass:</strong></p>
            <p>Name: ${name}</p>
            <p>Seat Number: ${seatNumber}</p>
            <p>Class: Economy</p>`;
    } else if (confirm("Economy Class is full. Would you like to be placed in First Class?")) {
        reserveSeat(1); // Try assigning a First Class seat
    } else {
        outputDiv.innerHTML = "<p>No seats available in Economy Class.</p>";
    }
}

// Function to display all tickets
function displayTickets() {
    const ticketsDiv = document.getElementById("ticketsList");
    ticketsDiv.innerHTML = ""; // Clear previous tickets

    tickets.forEach(ticket => {
        const ticketDiv = document.createElement("div");
        ticketDiv.className = "ticket";
        ticketDiv.innerHTML = `
            <p><strong>Name:</strong> ${ticket.name}</p>
            <p><strong>Seat Number:</strong> ${ticket.seatNumber}</p>
            <p><strong>Class:</strong> ${ticket.section}</p>`;
        ticketsDiv.appendChild(ticketDiv);
    });
}
