fetch(Items.json)
.then(response => response.json())
.then(data => {
    // Check if the API request was successful
    if (data.status === 'ok') {
        const Items = data.articles;
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