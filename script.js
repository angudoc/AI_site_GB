// Данные для генерации новостей
const newsData = [
    {
        title: "🤖 GPT-5: Слухи и реальность",
        content: "Новая версия языковой модели OpenAI обещает ещё более глубокое понимание контекста. Ожидаем анонс в 2024 году!",
        link: "#"
    },
    {
        title: "🌌 Искусственный интеллект в космосе",
        content: "ИИ помогает исследовать далекие уголки вселенной, анализируя данные телескопов и упрощая поиск экзопланет.",
        link: "#"
    },
    {
        title: "🏙️ Умные города: будущее рядом",
        content: "Города, где ИИ управляет транспортом, энергией и безопасностью, становятся реальностью в 2025 году.",
        link: "#"
    },
    {
        title: "💡 AI и творчество",
        content: "ИИ становится незаменимым инструментом в музыке, искусстве и литературе, открывая новые горизонты для творчества.",
        link: "#"
    },
    {
        title: "⚕️ AI в медицине",
        content: "Алгоритмы машинного обучения помогают диагностировать заболевания на ранних стадиях и персонализировать лечение.",
        link: "#"
    }
];

// Функция для генерации новостей
function generateNews() {
    const newsSection = document.querySelector(".news");

    newsData.forEach(newsItem => {
        // Создание элемента статьи
        const article = document.createElement("article");

        // Создание заголовка
        const title = document.createElement("h3");
        title.textContent = newsItem.title;

        // Создание текста
        const content = document.createElement("p");
        content.textContent = newsItem.content;

        // Создание ссылки
        const link = document.createElement("a");
        link.href = newsItem.link;
        link.textContent = "Подробнее →";

        // Добавление элементов в статью
        article.appendChild(title);
        article.appendChild(content);
        article.appendChild(link);

        // Добавление статьи в секцию новостей
        newsSection.appendChild(article);
    });
}

// Вызов функции при загрузке страницы
window.onload = generateNews;
