// Функция для прокрутки к секциям
function scrollToSection(sectionId) {
    const section = document.querySelector(`.${sectionId}`);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Вывод в консоль для тестирования
console.log("Сайт с новостями об ИИ готов!");
