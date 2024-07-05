const countriesList = document.getElementById('countries-list');

// Function to fetch and display European countries
async function fetchEuropeanCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/region/europe');
        const countries = await response.json();

        countries.forEach(country => {
            const countryCard = document.createElement('div');
            countryCard.classList.add('country-card');

            const flagImage = document.createElement('img');
            flagImage.classList.add('country-flag');
            flagImage.src = country.flags.png;
            flagImage.alt = `${country.name.common} Flag`;

            const name = document.createElement('h2');
            name.classList.add('country-name');
            name.textContent = country.name.common;

            const info = document.createElement('div');
            info.classList.add('country-info');

            const population = document.createElement('p');
            population.textContent = `Population: ${country.population}`;

            const capital = document.createElement('p');
            capital.textContent = `Capital: ${country.capital[0]}`;

            info.appendChild(population);
            info.appendChild(capital);

            countryCard.appendChild(flagImage);
            countryCard.appendChild(name);
            countryCard.appendChild(info);

            countriesList.appendChild(countryCard);
        });
    } catch (error) {
        console.error('Error fetching countries:', error);
        
    }
}

// Call the function to fetch and display countries on page load
fetchEuropeanCountries();