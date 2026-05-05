fetch('./data/merchants.json')
  .then(response => response.json())
  .then(data => {
    const body = document.body;

    const title = document.createElement('h2');
    title.innerText = 'Merchant Profiles';
    body.appendChild(title);

    data.forEach(merchant => {
      const div = document.createElement('div');

      div.innerHTML = `
        <h3>${merchant.name}</h3>
        <p><strong>Location:</strong> ${merchant.location}</p>
        <p><strong>Category:</strong> ${merchant.category}</p>
        <p>${merchant.description}</p>
        <p><strong>Supporters:</strong> ${merchant.supporters}</p>
        <p><strong>Tokens:</strong> ${merchant.tokens}</p>
        <hr/>
      `;

      body.appendChild(div);
    });
  })
  .catch(error => console.error('Error loading data:', error));
