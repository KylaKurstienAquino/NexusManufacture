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
        const pageSize = 10;
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;

        // Fetch news articles from the API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Check if the API request was successful
                if (data.status === 'ok') {
                    const articles = data.articles;
                    // Extract the URL of the article
                    const articleUrl = articles.url;
                    // Display each news article in a list
                    const newsList = document.getElementById('news-list');

                    articles.forEach(article => {
                        const listItem = document.createElement('li');
                        const viewbtn = document.createElement('button'); 
                        const forDiv = document.createElement('div');
                        const forDivMain = document.createElement('div');

                        listItem.textContent = `${article.title} - ${article.source.name}`;
                        

                        viewbtn.id = 'viewbutton';
                        viewbtn.style.background = 'black';
                        viewbtn.style.color = "white";
                        viewbtn.textContent='Read Article';
                        viewbtn.style.marginLeft = '85%';
                        viewbtn.style.height = '45px';
                        viewbtn.style.width = '100px'; 
                        viewbtn.style.border = '2px solid white'

                        forDiv.id = 'one';
                        forDiv.style.border = '2px black solid';
                        forDivMain.style.marginTop = '2%';

                        forDivMain.id = 'two'
                        forDivMain.style.backgroundColor = 'white';
                        forDivMain.style.border= 'water';
                        
                        newsList.appendChild(forDivMain);
                        newsList.appendChild(forDiv);
                        newsList.appendChild(listItem);
                        newsList.appendChild(viewbtn);

                        //Fetch the full content of the article
                        fetchArticleContent(articleUrl)
                        .then(response => response.text())
                            .then(html => {
                                // Process and display the full content of the article
                                const parser = new DOMParser();
                                const doc = parser.parseFromString(html, 'text/html');

                                const artdescrip = doc.querySelector('p');
                                artdescrip.textContent = `${html}`;
                                newsList.appendChild(artdescrip);
                                const paragraphContent = artdescrip ? artdescrip.textContent : 'Paragraph not found';

                                return paragraphContent;
                            }).catch(error => {
                                console.error('Error fetching article content:', error);
                            });
                        });

                } else {
                    console.error('Failed to fetch news articles:', data.message);
                }
            })
            .catch(error => {
                console.error('Error fetching news articles:', error);
            });

    function fetchArticleContent(articleUrl) {
        return fetch(articleUrl)
            .then(response => response.text())
            .then(html => {
                // Parse the HTML content to extract the full article body
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
    
                // Example: Extract the article body using DOM manipulation
                const articleBodyElement = doc.querySelector('meta[name="description"]'); // Example selector
    
                if (descriptionElement && descriptionElement.content) {
                    // If the article body element is found, return its inner HTML
                    return descriptionElement.content;;
                } else {
                    // If the article body element is not found, return the entire HTML content
                    return 'Description not available';
                }
            })}
    