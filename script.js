// Функция для имитации API-запроса
async function fetchNews() {
    // Получаем "серверные" данные из <script> с type="application/json"
    const backendData = document.getElementById('backend-data').textContent;
    return JSON.parse(backendData);
}

// Функция для отображения новостей
async function displayNews() {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    // Получаем данные с "бэкенда"
    let news = await fetchNews();

    // Сортируем по дате (от новых к старым)
    news.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Создаём карточки новостей
    news.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'news-card';

        articleDiv.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.content}</p>
            <p class="news-date">🗓️ ${new Date(article.date).toLocaleDateString()}</p>
        `;

        newsContainer.appendChild(articleDiv);
    });
}

// Инициализация
displayNews();
