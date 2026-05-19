// ICONES VETORIAIS LINEARES DO BRAND BOARD DE ALTA FIDELIDADE
const Icons = {
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V10"/><path d="M10 19V5"/><path d="M16 19v-7"/><path d="M22 19H2"/><path d="M18 6l2-2 2 2"/></svg>`,

  clientes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20c.7-3.2 3-5 6-5s5.3 1.8 6 5"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 15.5c2.7.4 4.6 2 5.2 4.5"/></svg>`,

  extratos: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6"/><path d="M9 13h text-6"/><path d="M9 17h6"/><path d="M9 9h2"/></svg>`,

  conta: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M16 10h5"/><circle cx="17.5" cy="12.5" r="1"/><path d="M6 9h6"/></svg>`,

  pix: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h7l-1 8 10-13h-7z"/></svg>`,

  cartao: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 10h19"/><path d="M6 15h3"/><path d="M13 15h2"/></svg>`,

  boletos: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 7v10"/><path d="M11 7v10"/><path d="M15 7v10"/><path d="M18 7v10"/></svg>`,

  links: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.1.2l2.1-2.1a5 5 0 0 0-7.1-7.1L11 5"/><path d="M14 11a5 5 0 0 0-7.1-.2l-2.1 2.1a5 5 0 0 0 7.1 7.1L13 19"/></svg>`,

  api: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M8 9l-4 3 4 3"/><path d="M16 9l4 3-4 3"/><path d="M14 4l-4 16"/></svg>`,

  webhooks: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"/><path d="M10 21h4"/><path d="M12 3v2"/></svg>`,

  bolsao: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4z"/><path d="M4 7V5a2 2 0 0 1 2-2h10"/><path d="M17 13h4"/><circle cx="17" cy="13" r="1"/></svg>`,

  split: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M20 4L8 16"/><path d="M14 14l6 6"/><path d="M8 8l4 4"/></svg>`
};

// MENUS DO ADMIN - CONTAS ZAIT
const zaitAdminMenus = [
  ['dashboard','Dashboard Geral', Icons.dashboard], 
  ['clientes', 'Clientes Cadastrados', Icons.clientes], 
  ['extratos', 'Extratos Globais', Icons.extratos],
  ['conta','Conta Nominal PJ/PF', Icons.conta], 
  ['pix','PIX Admin', Icons.pix], 
  ['cartao','Cartão Crédito/Débito', Icons.cartao], 
  ['boletos','Boletos Admin', Icons.boletos], 
  ['links','Links de Pagamento Admin', Icons.links], 
  ['api','API BAAS', Icons.api], 
  ['webhooks','Webhooks', Icons.webhooks], 
  ['bolsao','Contas Bolsão', Icons.bolsao], 
  ['split','Split de Pagamentos', Icons.split]
];

// MENUS DO ADMIN - CONTAS VOLTZ PAY
const voltzAdminMenus = [
  ['dashboard','Dashboard Geral', Icons.dashboard], 
  ['clientes', 'Clientes Cadastrados', Icons.clientes], 
  ['bolsao','Contas Bolsão - PJ/PF', Icons.bolsao],
  ['pix','PIX', Icons.pix], 
  ['extratos', 'EXTRATO', Icons.extratos],
  ['api','API PARA BAAS E ADQUIRENTES', Icons.api], 
  ['webhooks','WEBHOOK', Icons.webhooks], 
  ['split','SPLIT DE PAGAMENTOS', Icons.split]
];

// MENUS DO CLIENTE
const clientMenus = [
  ['client_dashboard', 'Dashboard', Icons.dashboard], 
  ['client_extrato', 'Meu Extrato', Icons.extratos], 
  ['client_pix', 'Área PIX', Icons.pix], 
  ['client_boletos', 'Meus Boletos', Icons.boletos], 
  ['client_links', 'Links de Pagamento', Icons.links]
];

const defaultData = {
  users: [{ id: 'USR-ADMIN', name: 'Anderson Admin', email: 'admin@pay.com', password: '123456', role: 'admin', isLogged: false }],
  ledgers: { 'USR-ADMIN': { zait: { balance: 750000.00, transactions: [] }, voltz: { balance: 230000.00, transactions: [] } } }
};

let db = JSON.parse(localStorage.getItem('paySystemData_ZaitV6_Final') || JSON.stringify(defaultData));
let currentUser = JSON.parse(localStorage.getItem('activeUser')) || null;
let account = localStorage.getItem('activeAccount') || 'voltz';
let page = currentUser && currentUser.role === 'client' ? 'client_dashboard' : 'dashboard';

function save() { localStorage.setItem('paySystemData_ZaitV6_Final', JSON.stringify(db)); }
function money(v) { return Number(v || 0).toLocaleString('pt-BR', { style:'currency', currency:'BRL' }); }
function uid(prefix='ID') { return prefix + '-' + Math.random().toString(36).slice(2,8).toUpperCase(); }

function showToast(msg) {
  const el = document.getElementById('toast');
  if(el) { el.textContent = msg; el.style.display = 'block'; setTimeout(() => el.style.display = 'none', 2600); }
}

function toggleAuthMode(e, mode) {
  e.preventDefault();
  if(mode === 'register') {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
  } else {
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
  }
}

document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const user = db.users.find(u => u.email === email && u.password === password);
  
  if(user) {
    user.isLogged = true; save();
    currentUser = user; localStorage.setItem('activeUser', JSON.stringify(user));
    document.getElementById('authScreen').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    page = user.role === 'admin' ? 'dashboard' : 'client_dashboard';
    enforceOperationMode(); render();
  } else { alert('Credenciais inválidas!'); }
});

document.getElementById('registerForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value.trim();
  
  if(db.users.find(u => u.email === email)) { alert('E-mail já cadastrado!'); return; }
  
  const newUserId = uid('USR');
  const newClient = { id: newUserId, name, email, password, role: 'client', isLogged: true, allowedMode: 'all' };
  
  db.users.push(newClient);
  db.ledgers[newUserId] = {
    zait: { balance: 1500.00, transactions: [{ id: uid('PIX'), method:'PIX', type:'Entrada', value:1500, description:'Liquidação Abertura Zait', date:new Date().toLocaleString('pt-BR') }], boletos:[], links:[] },
    voltz: { balance: 1500.00, transactions: [{ id: uid('PIX'), method:'PIX', type:'Entrada', value:1500, description:'Liquidação Abertura Voltz', date:new Date().toLocaleString('pt-BR') }], boletos:[], links:[] }
  };
  
  save();
  currentUser = newClient; localStorage.setItem('activeUser', JSON.stringify(newClient));
  document.getElementById('authScreen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  page = 'client_dashboard';
  enforceOperationMode(); render();
  showToast('Conta criada com Engenharia Financeira ativa!');
});

function logout() {
  if(currentUser) {
    const user = db.users.find(u => u.id === currentUser.id);
    if(user) user.isLogged = false; save();
  }
  localStorage.removeItem('activeUser'); location.reload();
}

document.querySelectorAll('.switch-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetAccount = btn.dataset.account;
    if(currentUser.role === 'client') {
      const freshUser = db.users.find(u => u.id === currentUser.id);
      if(freshUser && freshUser.allowedMode !== 'all' && freshUser.allowedMode !== targetAccount) {
        showToast('Esta conta está bloqueada para você pelo administrador.'); return;
      }
    }
    account = targetAccount;
    localStorage.setItem('activeAccount', account);
    if(currentUser.role === 'admin') page = 'dashboard';
    render();
  });
});

function enforceOperationMode() {
  if (!currentUser) return;
  const btnZait = document.getElementById('btnSwitchZait');
  const btnVoltz = document.getElementById('btnSwitchVoltz');
  if (!btnZait || !btnVoltz) return;

  btnZait.removeAttribute('disabled'); btnVoltz.removeAttribute('disabled');

  if (currentUser.role === 'client') {
    const freshUser = db.users.find(u => u.id === currentUser.id);
    const mode = freshUser ? freshUser.allowedMode : 'all';
    if (mode === 'zait') { btnVoltz.setAttribute('disabled', 'true'); account = 'zait'; }
    else if (mode === 'voltz') { btnZait.setAttribute('disabled', 'true'); account = 'voltz'; }
    localStorage.setItem('activeAccount', account);
  }
}

function applyTheme() {
  const isZait = account === 'zait';
  document.getElementById('brandName').innerHTML = isZait ? 'ZAIT<span class="light">PAY</span>' : 'VOLTZ<span class="light">PAY</span>';
  document.querySelectorAll('.switch-btn').forEach(b => b.classList.toggle('active', b.dataset.account === account));
}

function renderNav() {
  const nav = document.getElementById('nav');
  let menus = currentUser.role === 'admin' ? (account === 'voltz' ? voltzAdminMenus : zaitAdminMenus) : clientMenus;

  nav.innerHTML = menus.map(([key, label, svgIcon]) => {
    const activeClass = page === key ? 'class="active"' : '';
    return `<button ${activeClass} onclick="openPage('${key}')">${svgIcon} <span>${label}</span></button>`;
  }).join('');
}

function openPage(key) { page = key; render(); }
function userLedger(userId = currentUser.id) { return db.ledgers[userId] ? db.ledgers[userId][account] : { balance: 0, transactions: [], boletos:[], links:[] }; }

function render() {
  if(!currentUser) return;
  enforceOperationMode(); applyTheme(); renderNav();
  
  document.getElementById('userName').textContent = currentUser.name;
  document.getElementById('userRole').textContent = currentUser.role === 'admin' ? 'Acesso Master' : 'Cliente';
  document.getElementById('userAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
  
  if(currentUser.role === 'admin') document.getElementById('btnAdminPanel').classList.remove('hidden');

  const map = { dashboard, clientes, extratos, conta, pix, cartao, boletos, links, api, webhooks, bolsao, split, client_dashboard, client_extrato, client_pix, client_boletos, client_links };
  document.getElementById('content').innerHTML = (map[page] || dashboard)();
}

// ======================== ADMIN MODULES ========================

function setClientOperatingMode(userId, mode) {
  const user = db.users.find(u => u.id === userId);
  if (user) { user.allowedMode = mode; save(); showToast(`Configuração operacional de ${user.name} salva.`); render(); }
}

function clientes() {
  const clients = db.users.filter(u => u.role === 'client');
  let rows = clients.map(u => {
    const ledgZ = db.ledgers[u.id]?.zait || { balance: 0 };
    const ledgV = db.ledgers[u.id]?.voltz || { balance: 0 };
    const status = u.isLogged ? '<span class="pill ok">Online</span>' : '<span class="muted">Offline</span>';
    return `<tr>
      <td><strong>${u.name}</strong><br><small class="muted">${u.email}</small></td>
      <td>${status}</td>
      <td><span style="color:var(--zait-primary)">Zait:</span> ${money(ledgZ.balance)}<br><span style="color:var(--voltz-primary)">Voltz:</span> ${money(ledgV.balance)}</td>
      <td>
        <select class="table-select" onchange="setClientOperatingMode('${u.id}', this.value)">
          <option value="all" ${u.allowedMode === 'all'?'selected':''}>Liberar as 2 Contas</option>
          <option value="zait" ${u.allowedMode === 'zait'?'selected':''}>Apenas Zait Bank</option>
          <option value="voltz" ${u.allowedMode === 'voltz'?'selected':''}>Apenas Voltz Pay</option>
        </select>
      </td>
    </tr>`;
  }).join('');

  return `<div class="card"><h3>Clientes Cadastrados</h3><table><thead><tr><th>Cliente</th><th>Status</th><th>Saldos</th><th>Trava Operacional</th></tr></thead><tbody>${rows || '<tr><td colspan="4">Nenhum cliente.</td></tr>'}</tbody></table></div>`;
}

function extratos() {
  let all = [];
  db.users.forEach(u => {
    if(db.ledgers[u.id]?.zait?.transactions) db.ledgers[u.id].zait.transactions.forEach(t => all.push({...t, u: u.name, b: 'Zait Premium'}));
    if(db.ledgers[u.id]?.voltz?.transactions) db.ledgers[u.id].voltz.transactions.forEach(t => all.push({...t, u: u.name, b: 'Voltz Simples'}));
  });
  all.sort((a,b) => b.id.localeCompare(a.id));
  let rows = all.map(t => `<tr><td><strong>${t.u}</strong></td><td><span class="pill">${t.b}</span></td><td>${t.method}</td><td><span class="pill ${t.type==='Entrada'?'ok':'warn'}">${t.type}</span></td><td>${t.description}</td><td><strong>${money(t.value)}</strong></td></tr>`).join('');
  return `<div class="card"><h3>Extrato Consolidado Geral</h3><table><thead><tr><th>Cliente</th><th>Bandeira</th><th>Método</th><th>Fluxo</th><th>Descrição</th><th>Valor</th></tr></thead><tbody>${rows || '<tr><td colspan="6">Sem movimentações.</td></tr>'}</tbody></table></div>`;
}

function dashboard() {
  const d = userLedger('USR-ADMIN');
  return `<div class="grid cards">
    <div class="card"><span class="pill ok">Balanço Central</span><div class="metric">${money(d.balance)}</div><span class="muted">Segurança Operacional</span></div>
    <div class="card"><span class="pill">Ecossistema</span><div class="metric">${db.users.length}</div><span class="muted">Contas registradas</span></div>
  </div><br><div class="card"><h3>Engenharia Financeira Integrada</h3><p class="muted">Selecione uma partição no menu lateral para auditoria técnica.</p></div>`;
}

function conta() { return `<div class="card"><h3>Contas PJ/PF Administradas</h3></div>`; }
function pix() { return `<div class="card"><h3>Infraestrutura de Chaves PIX</h3></div>`; }
function cartao() { return `<div class="card"><h3>Configurações de Adquirência</h3></div>`; }
function boletos() { return `<div class="card"><h3>Monitoramento de Lotes Homologados</h3></div>`; }
function links() { return `<div class="card"><h3>Rastreamento de Links de Checkout</h3></div>`; }
function api() { return `<div class="card"><h3>Endpoints Rest Gateway API</h3></div>`; }
function webhooks() { return `<div class="card"><h3>Callbacks de Notificação Ativos</h3></div>`; }
function bolsao() { return `<div class="card"><h3>Contas Bolsão Aggregator</h3></div>`; }
function split() { return `<div class="card"><h3>Regras de Split</h3></div>`; }

// ======================== CLIENT OPERATIONS ========================

function client_dashboard() {
  const cl = userLedger();
  return `<div class="grid cards">
    <div class="card"><span class="pill ok">Saldo Livre Disponível</span><div class="metric" style="color:var(--zait-primary)">${money(cl.balance)}</div><span class="muted">Garantia Zait S/A</span></div>
  </div><br><div class="grid two">
    <div class="card"><h3>Ações Rápidas</h3>
      <button class="btn full" onclick="openPage('client_pix')">⚡ Enviar Transação PIX</button><br>
      <button class="btn ghost full" onclick="openPage('client_boletos')">🧾 Emitir Boleto CIP</button><br>
      <button class="btn ghost full" onclick="openPage('client_links')">🔗 Checkout Link Cartão</button>
    </div>
    <div class="card"><h3>Últimas Movimentações</h3>${tableTransactions(cl.transactions.slice(-3))}</div>
  </div>`;
}

function client_extrato() { return `<div class="card"><h3>Demonstrativo de Conta</h3>${tableTransactions(userLedger().transactions)}</div>`; }

function client_pix() {
  return `<div class="card" style="max-width:500px;"><h3>Área PIX</h3><form onsubmit="processClientPix(event)">
    <label>Fluxo</label><select id="pixType"><option value="Saída">Enviar PIX</option><option value="Entrada">Receber PIX</option></select>
    <label>Valor (R$)</label><input id="pixValue" type="number" step="0.01" required />
    <label>Chave Destino</label><input id="pixDesc" required />
    <button class="btn full">Executar</button></form></div>`;
}

function processClientPix(e) {
  e.preventDefault();
  const type = document.getElementById('pixType').value;
  const val = Number(document.getElementById('pixValue').value);
  const desc = document.getElementById('pixDesc').value;
  const ledger = db.ledgers[currentUser.id][account];

  if(type === 'Saída' && ledger.balance < val) { alert('Saldo Insuficiente.'); return; }
  ledger.transactions.push({ id: uid('PIX'), method: 'PIX', type, value: val, description: `PIX: ${desc}`, date: new Date().toLocaleString('pt-BR') });
  ledger.balance += type === 'Entrada' ? val : -val; save(); showToast('PIX concluído.'); openPage('client_dashboard');
}

function client_boletos() {
  const bList = userLedger().boletos || [];
  const rows = bList.map(b => `<tr><td>${b.id}</td><td>${b.desc}</td><td>${money(b.value)}</td><td><button class="btn ghost" style="padding:4px 8px; font-size:11px;" onclick="alert('PDF baixado.')">PDF</button></td></tr>`).join('');
  return `<div class="grid two"><form class="card" onsubmit="generateClientBoleto(event)"><h3>Registrar Boleto</h3>
    <label>Valor</label><input id="bolValue" type="number" step="0.01" required />
    <label>Pagador</label><input id="bolDesc" required /><button class="btn full">Gerar</button></form>
    <div class="card"><h3>Emitidos</h3><table><thead><tr><th>ID</th><th>Descrição</th><th>Valor</th><th>Ação</th></tr></thead><tbody>${rows || '<tr><td colspan="4">Nenhum.</td></tr>'}</tbody></table></div></div>`;
}

function generateClientBoleto(e) {
  e.preventDefault();
  const val = Number(document.getElementById('bolValue').value);
  const desc = document.getElementById('bolDesc').value;
  const userSpace = db.ledgers[currentUser.id][account];
  if(!userSpace.boletos) userSpace.boletos = [];
  const bId = uid('BOL');
  userSpace.boletos.push({ id: bId, value: val, desc });
  userSpace.transactions.push({ id: bId, method: 'BOLETO', type: 'Entrada', value: val, description: `Boleto: ${desc}`, date: new Date().toLocaleString('pt-BR') });
  userSpace.balance += val; save(); showToast('Boleto Gerado.'); openPage('client_dashboard');
}

function client_links() {
  const lList = userLedger().links || [];
  const rows = lList.map(l => `<tr><td>${l.desc}</td><td>${money(l.value)}</td><td>Até ${l.parc}x</td></tr>`).join('');
  return `<div class="grid two"><form class="card" onsubmit="createClientLink(event)"><h3>Novo Link</h3>
    <label>Valor</label><input id="lnkValue" type="number" step="0.01" required />
    <label>Nome</label><input id="lnkDesc" required />
    <label>Parcelas</label><select id="lnkParc"><option value="1">À vista</option><option value="12">12x com juros</option></select>
    <button class="btn full">Gerar Link</button></form>
    <div class="card"><h3>Ativos</h3><table><thead><tr><th>Nome</th><th>Valor</th><th>Parcelas</th></tr></thead><tbody>${rows || '<tr><td colspan="3">Nenhum.</td></tr>'}</tbody></table></div></div>`;
}

function createClientLink(e) {
  e.preventDefault();
  const val = Number(document.getElementById('lnkValue').value);
  const desc = document.getElementById('lnkDesc').value;
  const parc = document.getElementById('lnkParc').value;
  const userSpace = db.ledgers[currentUser.id][account];
  if(!userSpace.links) userSpace.links = [];
  userSpace.links.push({ value: val, desc, parc }); save(); showToast('Link pronto.'); render();
}

function tableTransactions(rows) {
  if(!rows || !rows.length) return '<p class="muted">Sem lançamentos.</p>';
  return `<table><thead><tr><th>ID</th><th>Método</th><th>Fluxo</th><th>Descrição</th><th>Valor</th></tr></thead><tbody>${rows.map(t=>`<tr><td><small>${t.id}</small></td><td>${t.method}</td><td><span class="pill ${t.type==='Entrada'?'ok':'warn'}">${t.type}</span></td><td>${t.description}</td><td>${money(t.value)}</td></tr>`).join('')}</tbody></table>`;
}

if(currentUser) { document.getElementById('authScreen').classList.add('hidden'); document.getElementById('app').classList.remove('hidden'); render(); }
