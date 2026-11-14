const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us, we will reach out within the next 24 hours regarding your enquiry!')
    });
}

fetch('./travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

const searchBtn = document.getElementById('searchBtn');

if (searchBtn) {
    searchBtn.addEventListener('click', function() {
        const keyword = document.getElementById('questionInput').value.toLowerCase().trim();

    let catergory = '';
    
    if (keyword.includes('beach')) {
        catergory = 'beaches';
    } else if (keyword.includes('temple')) {
        catergory = 'temples';
    } else if (keyword.includes('countr')) {
        catergory = 'countries';
    }

    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';

    fetch('./travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            if(!catergory) {
                resultsDiv,innerHTML = '<p>No recommendations found.</p>';
                return;
            }
            let recommendations = data[catergory];
        

    if (catergory === 'countries') {
        recommendations = recommendations.flatMap(country => country.cities);
    }

    recommendations.forEach(place => {
        resultsDiv.innerHTML += `
        <div class="recommendation">
            <img src="${place.imageUrl}" alt="${place.name}" width="250">
                <h3>${place.name}</h3>
                <p>${place.description}</p>
        </div>
        `;
    });

document.getElementById('intro').style.display = 'none';
    })
    .catch(error => console.error('Error:', error));
    });
}

const clearBtn = document.getElementById('clearBtn');

if (clearBtn) {
    clearBtn.addEventListener('click', function() {
        document.getElementById('questionInput').value = '';
        document.getElementById('searchResults').innerHTML = '';
        document.getElementById('intro').style.display = 'block';
    });
};
