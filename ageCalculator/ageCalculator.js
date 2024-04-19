// Function to calculate the user's age
function calculateAge() {
    const dob = new Date(document.getElementById("dob").value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();
    
    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    
    document.getElementById("result").innerHTML = "<p>Your age is: <span>" + age + "</span></p>";

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

    // Calculate and display the countdown timer
    calculateNextBirthday();
}

// Function to determine the user's zodiac sign
function getZodiacSign(dob) {
    const month = dob.getMonth() + 1;
    const day = dob.getDate();

    const zodiacSigns = [
        "Capricorn", "Aquarius", "Pisces", "Aries",
        "Taurus", "Gemini", "Cancer", "Leo",
        "Virgo", "Libra", "Scorpio", "Sagittarius"
    ];

    const zodiacEndDays = [20, 19, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21];

    let signIndex = month - 1;
    if (day > zodiacEndDays[signIndex]) {
        signIndex = (signIndex + 1) % 12;
    }

    return zodiacSigns[signIndex];
}

// Function to calculate the remaining time until the user's next birthday
function calculateNextBirthday() {
    const dob = new Date(document.getElementById("dob").value);
    const today = new Date();
    const nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());

    if (today > nextBirthday) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
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
