function initialize() {
    const today = new Date();
    document.getElementById("birthdate").valueAsDate = today;
    calculateAge();
}

function switchTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
}

function calculateAge() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const now = new Date();

    const diffTime = now - birthdate;
    const ageDate = new Date(diffTime);

    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    const hours = Math.floor(diffTime / (1000 * 60 * 60));
    const minutes = Math.floor(diffTime / (1000 * 60));
    const seconds = Math.floor(diffTime / 1000);

    const nextBirthday = new Date(now.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    if (now > nextBirthday) {
        nextBirthday.setFullYear(now.getFullYear() + 1);
    }
    const daysUntilBirthday = Math.floor((nextBirthday - now) / (1000 * 60 * 60 * 24));

    
    document.getElementById("age").value = `${years} years, ${months} months, and ${days} days`;
    document.getElementById("ageInDays").value = `${Math.floor(diffTime / (1000 * 60 * 60 * 24))} days`;
    document.getElementById("ageInHours").value = `${hours} hours`;
    document.getElementById("ageInMinutes").value = `${minutes} minutes`;
    document.getElementById("ageInSeconds").value = `${seconds} seconds`;
    document.getElementById("nextBirthday").value = `${daysUntilBirthday} days`;
}

setInterval(calculateAge, 1000);

