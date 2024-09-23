function bookTicket(eventName, eventDate) {
    document.getElementById('eventName').value = eventName;
    document.getElementById('eventDate').value = eventDate;
    document.getElementById('booking-form').style.display = 'block';
}

document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Tickets booked successfully for ' + document.getElementById('eventName').value);
    document.getElementById('booking-form').reset();
    document.getElementById('booking-form').style.display = 'none';
});
