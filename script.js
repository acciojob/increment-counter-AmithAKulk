//your JS code here. If required.
 function incrementCounter() {
            // Get the current counter value
            const counterElement = document.getElementById('counter');
            let currentValue = parseInt(counterElement.innerText);

            // Display the un-incremented value in an alert
            alert("Un-incremented value: " + currentValue);

            // Increment the counter value
            currentValue++;

            // Update the counter display
            counterElement.innerText = currentValue;
        }