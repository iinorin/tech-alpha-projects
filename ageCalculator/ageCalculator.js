function calculateAge() {
    const dob = new Date(document.getElementById("dob").value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    document.getElementById("age").innerHTML = age;
    console.log(age)


    // Display a message based on the user's age
    let message = "";
    if (age < 13) {
        message = "You are a child.";
    } else if (age < 20) {
        message = "You are a teenager.";
    } else if (age < 65) {
        message = "You are an adult.";
    } else {
        message = "You are a senior citizen.";
    }
    document.getElementById("age-group").innerHTML = "<p>" + message + "</p>";

    // Calculate and display the zodiac sign
    const zodiacSign = getZodiacSign(dob);
    document.getElementById("zodiac-sign").innerHTML = "<p>Your zodiac sign is: " + zodiacSign + "</p>";
}



function getZodiacSign(dob) {
    const month = dob.getMonth() + 1; // Add 1 because months are zero-based
    const day = dob.getDate();

    // Array containing zodiac sign names in chronological order
    const zodiacSigns = [
        "Capricorn", "Aquarius", "Pisces", "Aries",
        "Taurus", "Gemini", "Cancer", "Leo",
        "Virgo", "Libra", "Scorpio", "Sagittarius"
    ];

    // Array containing the last day of each zodiac sign's period (as the end day of each month)
    const zodiacEndDays = [20, 19, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21];

    // Determine the zodiac sign based on the month and day
    let signIndex = month - 1; // Subtract 1 because array index starts from 0
    if (day > zodiacEndDays[signIndex]) {
        signIndex = (signIndex + 1) % 12; // Move to the next sign if the birth day exceeds the end day
    }

    return zodiacSigns[signIndex];
}

// Function to calculate the remaining time until the user's next birthday
function calculateNextBirthday() {
    const dob = new Date(document.getElementById("dob").value);
    const today = new Date();
    const nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());

    if (today > nextBirthday) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1); // Increment year if the birthday has passed for this year
    }

    const timeUntilNextBirthday = nextBirthday - today;
    const days = Math.floor(timeUntilNextBirthday / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeUntilNextBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeUntilNextBirthday % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeUntilNextBirthday % (1000 * 60)) / 1000);

    // Display the countdown timer
    document.getElementById("countdown-timer").innerHTML = "<p>Time until your next birthday: " + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds</p>";

    // Update the countdown timer every second
    setTimeout(calculateNextBirthday, 1000);
}

// Call the calculateNextBirthday function when the page loads
calculateNextBirthday();
