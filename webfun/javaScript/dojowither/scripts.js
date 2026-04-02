// City alert on click
document.querySelectorAll('header ul li').forEach(li => {
    li.addEventListener('click', () => {
        alert(`You selected ${li.textContent}!`);
    });
});

// Dismiss cookie banner
document.getElementById('acceptBtn').addEventListener('click', () => {
    document.getElementById('cookieBanner').style.display = 'none';
});

// Temperature conversion
const weatherData = [
    { high: 24, low: 18 },
    { high: 27, low: 19 },
    { high: 21, low: 16 },
    { high: 26, low: 21 },
];

function toF(c) { return Math.round(c * 9 / 5 + 32); }

document.getElementById('temp').addEventListener('change', function () {
    const isFahrenheit = this.value === 'f';

    document.querySelectorAll('.card').forEach((card, i) => {
        const high = card.querySelector('.high');
        const low = card.querySelector('.low');
        const data = weatherData[i];

        if (isFahrenheit) {
            high.textContent = toF(data.high) + '°';
            low.textContent = toF(data.low) + '°';
        } else {
            high.textContent = data.high + '°';
            low.textContent = data.low + '°';
        }
    });
});