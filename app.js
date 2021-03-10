const tabBtn = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');

tabBtn.forEach(btn => btn.addEventListener('click', openContent));

function openContent(e) {
    const category = e.target.dataset.id;
    if (category) {
        tabBtn.forEach(btn => {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        content.forEach(item => {
            item.classList.remove('active');
        });
        const element = document.getElementById(category);
        element.classList.add('active');
    }
}