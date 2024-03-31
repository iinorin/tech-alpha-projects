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
}