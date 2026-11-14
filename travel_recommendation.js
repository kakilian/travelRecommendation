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
    
    if (keyword.includes('beaches')) {
        catergory = 'beaches';
    } else if (keyword.includes('temple')) {
        catergory = 'temples';
    } else if (keyword.includes('countr')) {
        catergory = 'countries';
    }

    console.log('Search category:', catergory);
    });
}