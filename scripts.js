// JavaScript函数，用于切换板块
function showSection(sectionId) {
    // 隐藏所有板块
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    // 显示所选板块
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

// 页面加载时默认显示主页
window.onload = () => {
    showSection('home');
};
// JavaScript函数，用于切换深浅主题
function toggleTheme() {
    document.body.classList.toggle('light-theme');
}
