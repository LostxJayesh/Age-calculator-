document.getElementById('calculateBtn').addEventListener('click', function() {
    const birthdate = document.getElementById('birthdate').value;
    if (birthdate) {
        const age = calculateAge(new Date(birthdate));
        let resultText = `Your age is ${age} years.`;
        let emoji = '';

        if (age >= 18) {
            emoji = '🧓';  // Old man emoji
        } else {
            emoji = '🧒';  // Young boy emoji
        }

        document.getElementById('result').innerHTML = `${resultText} <span class="emoji">${emoji}</span>`;
    } else {
        document.getElementById('result').textContent = 'Please enter your birthdate.';
    }
});

function calculateAge(birthdate) {
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
}
