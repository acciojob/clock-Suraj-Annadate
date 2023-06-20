function updateTimer() {
      var timerElement = document.getElementById("#timer");
      var now = new Date();

      // Format the date
      var date = now.getDate().toString().padStart(2, '0');
      var month = (now.getMonth() + 1).toString().padStart(2, '0');
      var year = now.getFullYear();
      var formattedDate = `${date}/${month}/${year}`;

      // Format the time
      var hours = now.getHours() % 12;
      var minutes = now.getMinutes().toString().padStart(2, '0');
      var seconds = now.getSeconds().toString().padStart(2, '0');
      var amPm = now.getHours() < 12 ? 'AM' : 'PM';
      var formattedTime = `${hours}:${minutes}:${seconds} ${amPm}`;

      // Update the timer element
      timerElement.textContent = `${formattedDate}, ${formattedTime}`;
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);