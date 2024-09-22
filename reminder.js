document.getElementById('reminderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const time = new Date(document.getElementById('time').value);
    const now = new Date();

    if (time <= now) {
        alert('Please select a future time for the reminder.');
        return;
    }

    const notificationArea = document.getElementById('notification');
    notificationArea.textContent = `Reminder set for "${title}" at ${time.toLocaleString()}`;

    const timer = time - now;
    setTimeout(() => {
        alert(`Reminder: ${title}`);
        notificationArea.textContent = '';
    }, timer);
});
