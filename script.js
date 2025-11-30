// Мобильное меню
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Плавный скролл к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Обработка формы контактов
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Получение значений формы
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Простая валидация
        if (name && email && message) {
            alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
            this.reset();
        } else {
            alert('Пожалуйста, заполните все поля формы.');
        }
    });
}

// Анимация при скролле
function animateOnScroll() {
    const elements = document.querySelectorAll('.class-card, .feature, .rule-item, .stat');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Установка начального состояния для анимации
document.querySelectorAll('.class-card, .feature, .rule-item, .stat').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Добавление обработчика скролла
window.addEventListener('scroll', animateOnScroll);

// Имитация обновления статуса сервера
function updateServerStatus() {
    const statusElement = document.getElementById('server-status');
    if (statusElement) {
        // Генерация случайного числа игроков онлайн (между 300 и 700)
        const onlinePlayers = Math.floor(Math.random() * 401) + 300;
        const maxPlayers = 1000;
        statusElement.textContent = `${onlinePlayers}/${maxPlayers}`;
    }
}

// Обновление статуса каждые 10 секунд
setInterval(updateServerStatus, 10000);

// Инициализация статуса при загрузке
document.addEventListener('DOMContentLoaded', () => {
    updateServerStatus();
    animateOnScroll(); // Анимация при загрузке страницы
});

// Добавление эффекта при наведении на карточки классов
document.querySelectorAll('.class-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});