/* ═══════════════════════════════════════════
   CORE STATE & INITIALIZATION
   ═══════════════════════════════════════════ */
let currentPage = 'dashboard';

window.onload = () => {
    console.log('NexCRM System Initialized');
    // Перевірка наявності даних у базі, якщо порожньо - створюємо масив
    if (!localStorage.getItem('clients')) localStorage.setItem('clients', JSON.stringify([]));
    if (!localStorage.getItem('contacts')) localStorage.setItem('contacts', JSON.stringify([]));
    
    goPage('dashboard');
    updateFooter();
};

/* ═══════════════════════════════════════════
   NAVIGATION LOGIC
   ═══════════════════════════════════════════ */
function goPage(pageId) {
    currentPage = pageId;

    // Оновлюємо видимість сторінок
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) targetPage.style.display = 'block';

    // Оновлюємо активний стан у меню
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    const activeNav = document.getElementById('nav-' + pageId);
    if (activeNav) activeNav.classList.add('active');

    // Викликаємо рендеринг конкретної сторінки
    refreshCurrentPage();
}

function refreshCurrentPage() {
    if (currentPage === 'dashboard') renderDashboard();
    if (currentPage === 'clients') renderClientsTable();
    if (currentPage === 'contacts') renderContacts();
    updateFooter();
}

/* ═══════════════════════════════════════════
   CLIENTS MANAGEMENT (CRUD)
   ═══════════════════════════════════════════ */
function getClients() {
    return JSON.parse(localStorage.getItem('clients') || '[]');
}

function renderClientsTable() {
    const clients = getClients();
    const tbody = document.getElementById('clients-tbody');
    if (!tbody) return;

    tbody.innerHTML = clients.map((c, index) => `
        <tr>
            <td><strong style="color: var(--tx1)">${c.name}</strong></td>
            <td>${c.email}</td>
            <td>${c.phone}</td>
            <td><span class="badge">${c.company}</span></td>
            <td>
                <button class="btn" onclick="deleteClient(${index})" style="padding: 5px 10px; font-size: 0.7rem;">Видалити</button>
            </td>
        </tr>
    `).join('');
}

function openModal(mode) {
    const overlay = document.getElementById('modal-overlay');
    const body = document.getElementById('modal-body');
    overlay.style.display = 'grid';

    body.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 15px;">
            <input type="text" id="cl-name" placeholder="Ім'я клієнта" class="form-input">
            <input type="email" id="cl-email" placeholder="Email" class="form-input">
            <input type="text" id="cl-phone" placeholder="Телефон" class="form-input">
            <input type="text" id="cl-company" placeholder="Компанія" class="form-input">
            <button class="btn btn-primary" onclick="saveClient()">Зберегти</button>
        </div>
    `;
}

function saveClient() {
    const newClient = {
        name: document.getElementById('cl-name').value,
        email: document.getElementById('cl-email').value,
        phone: document.getElementById('cl-phone').value,
        company: document.getElementById('cl-company').value
    };

    const clients = getClients();
    clients.push(newClient);
    localStorage.setItem('clients', JSON.stringify(clients));
    
    closeModal();
    renderClientsTable();
    toast('Клієнта додано успішно!');
}

/* ═══════════════════════════════════════════
   DASHBOARD & ANALYTICS
   ═══════════════════════════════════════════ */
function renderDashboard() {
    const clients = getClients();
    const container = document.getElementById('dashboard-widgets');
    if (!container) return;

    container.innerHTML = `
        <div class="card">
            <h4 style="color: var(--tx3)">УСЬОГО КЛІЄНТІВ</h4>
            <div style="font-size: 3rem; font-family: var(--fD); font-weight: 800;">${clients.length}</div>
        </div>
        <div class="card">
            <h4 style="color: var(--tx3)">ОСТАННЯ АКТИВНІСТЬ</h4>
            <div style="margin-top: 10px;">Сьогодні о ${new Date().toLocaleTimeString()}</div>
        </div>
    `;
}

/* ═══════════════════════════════════════════
   UI UTILS
   ═══════════════════════════════════════════ */
function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}

function updateFooter() {
    const clients = getClients();
    const el = document.getElementById('footer-count');
    if (el) el.innerText = clients.length;
}

function toast(msg) {
    const container = document.getElementById('toast-container');
    const t = document.createElement('div');
    t.style = "background: var(--acc); color: var(--bg); padding: 12px 24px; border-radius: 8px; margin-top: 10px; font-weight: 600; animation: fadeIn 0.3s ease;";
    t.innerText = msg;
    container.appendChild(t);
    setTimeout(() => t.remove(), 3000);
}

function clearAllData() {
    if(confirm('Ви впевнені, що хочете видалити всі дані?')) {
        localStorage.clear();
        location.reload();
    }
}

function seedDemoData() {
    const demo = [
        { name: 'Олександр Іванов', email: 'alex@tech.ua', phone: '+380 50 111 2233', company: 'TechSolutions' },
        { name: 'Марія Коваль', email: 'mariya@design.com', phone: '+380 67 444 5566', company: 'Creative Studio' }
    ];
    localStorage.setItem('clients', JSON.stringify(demo));
    refreshCurrentPage();
    toast('Демо-дані завантажено');
}