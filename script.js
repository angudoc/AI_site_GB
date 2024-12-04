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
    const newsSection = doc
