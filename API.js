var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2024-02-05&' +
          'sortBy=popularity&' +
          'apiKey=ff1e8a7181854024b98e0dac944a107e';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

        const apiKey = 'ff1e8a7181854024b98e0dac944a107e';
        const country = 'ph'; //
        const category = 'technology';
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

        // Fetch news articles from the API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Check if the API request was successful
                if (data.status === 'ok') {
                    const articles = data.articles;

                    // Display each news article in a list
                    const newsList = document.getElementById('news-list');
                    articles.forEach(article => {
                        const listItem = document.createElement('li');
                        listItem.textContent = `${article.title} - ${article.source.name}`;
                        newsList.appendChild(listItem);
                    });
                } else {
                    console.error('Failed to fetch news articles:', data.message);
                }
            })
            .catch(error => {
                console.error('Error fetching news articles:', error);
            });
    