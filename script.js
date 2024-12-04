// Порядок сортировки (по умолчанию - новые → старые)
let sortOrder = "desc";

// Имитация API-запроса
async function fetchNews() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    title: "🤖 GPT-5: Слухи и реальность",
                    content: "Новая версия языковой модели OpenAI обещает ещё более глубокое понимание контекста. Ожидаем анонс в 2024 году!",
                    date: "2024-01-15",
                    link: "#"
                },
                {
                    title: "🌌 Искусственный интеллект в космосе",
                    content: "ИИ помогает исследовать далекие уголки вселенной, анализируя данные телескопов и упрощая поиск экзопланет.",
                    date: "2024-02-10",
                    link: "#"
                },
                {
                    title: "🏙️ Умные города: будущее рядом",
                    content: "Города, где ИИ управляет транспортом, энергией и безопасностью, становятся реальностью в 2025 году.",
                    date: "2024-03-05",
                    link: "#"
                }
            ]);
        }, 1000);
    });
}

// Генерация новостей
async function generateNews() {
    const newsSection = document.querySelector(".news");
    newsSection.innerHTML = "<p>Загрузка новостей...</p>";

    const newsData = await fetchNews();
    newsSection.innerHTML = ""; // Очистить перед генерацией

    const sortedNews = newsData.sort((a, b) => {
        if (sortOrder === "desc") {
            return new Date(b.date) - new Date(a.date);
        } else {
            return new Date(a.date) - new Date(b.date);
        }
    });

    sortedNews.forEach(newsItem => {
        const article = document.createElement("article");

        const title = document.createElement("h3");
        title.textContent = newsItem.title;

        const date = document.createElement("p");
        date.textContent = `🗓️ ${newsItem.date}`;
        date.style.color = "#888";
        date.style.fontSize = "0.9rem";

        const content = document.createElement("p");
        content.textContent = newsItem.content;

        const link = document.createElement("a");
        link.href = newsItem.link;
        link.textContent = "Подробнее →";

        article.appendChild(title);
        article.appendChild(date);
        article.appendChild(content);
        article.appendChild(link);

        newsSection.appendChild(article);
    });
}

// Переключение порядка сортировки
function toggleSortOrder() {
    sortOrder = sortOrder === "desc" ? "asc" : "desc";
    document.getElementById("sort-order").textContent = sortOrder === "desc" ? "Новые → Старые" : "Старые → Новые";
    generateNews();
}

// Инициализация
generateNews();

// Прокрутка к секциям
function scrollTo
