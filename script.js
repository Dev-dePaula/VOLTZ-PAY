// MENUS DO ADMINISTRADOR PARA A CONTA ZAIT (COMPLETO)
const zaitAdminMenus = [
  ['dashboard','📊 Dashboard Geral'], 
  ['clientes', '👥 Clientes Cadastrados'], 
  ['extratos', '📄 Extratos Globais'],
  ['conta','🏦 Conta Nominal PJ/PF'], 
  ['pix','⚡ PIX Admin'], 
  ['cartao','💳 Cartão Crédito/Débito'], 
  ['boletos','🧾 Boletos Admin'], 
  ['links','🔗 Links de Pagamento Admin'], 
  ['api','🧩 API BAAS'], 
  ['webhooks','🔔 Webhooks'], 
  ['bolsao','👛 Contas Bolsão'], 
  ['split','✂️ Split de Pagamentos']
];

// MENUS DO ADMINISTRADOR EXCLUSIVOS PARA A CONTA VOLTZ PAY (FILTRADOS)
const voltzAdminMenus = [
  ['dashboard','📊 Dashboard Geral'], 
  ['clientes', '👥 Clientes Cadastrados'], 
  ['bolsao','👛 Contas Bolsão - PJ/PF'],
  ['pix','⚡ PIX'], 
  ['extratos', '📄 EXTRATO'],
  ['api','🧩 API PARA BAAS E ADQUIRENTES'], 
  ['webhooks','🔔 WEBHOOK'], 
  ['split','✂️ SPLIT DE PAGAMENTOS']
];

// CONFIGURAÇÃO DOS MENUS DO CLIENTE
const clientMenus = [
  ['client_dashboard', '📊 Dashboard'], 
  ['client_extrato', '📄 Meu Extrato'], 
  ['client_pix', '⚡ Área PIX'], 
  ['client_boletos', '🧾 Meus Boletos'], 
  ['client_links', '🔗 Links de Pagamento']
];

// BASE MOCK DO BANCO DE DADOS LOCAL
const defaultData = {
  users: [
    { id: 'USR-ADMIN', name: 'Anderson Admin', email: 'admin@pay.com', password: '123456', role: 'admin', isLogged: false }
  ],
  ledgers: {
    'USR-ADMIN': {
      zait: { balance: 500000.00, transactions: [] },
      voltz: { balance: 120000.00, transactions: [] }
    }
  }
};

let db = JSON.parse(localStorage.getItem('paySystemData2026_v3') || JSON.stringify(defaultData));
let currentUser = JSON.parse(localStorage.getItem('activeUser')) || null;
let account = localStorage.getItem('activeAccount') || 'voltz';
let page = currentUser && currentUser.role === 'client' ? 'client_dashboard' : 'dashboard';

function save() { localStorage.setItem('paySystemData2026_v3', JSON.stringify(db)); }
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

// LOGIN
document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  
  const user = db.users.find(u => u.email === email && u.password === password);
  
  if(user) {
    user.isLogged = true;
    save();
    currentUser = user;
    localStorage.setItem('activeUser', JSON.stringify(user));
    
    document.getElementById('authScreen').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    
    page = user.role === 'admin' ? 'dashboard' : 'client_dashboard';
    
    enforceOperationMode();
    render();
  } else {
    alert('Credenciais inválidas!');
  }
});

// CADASTRO DE CLIENTE
document.getElementById('registerForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value.trim();
  
  if(db.users.find(u => u.email === email)) {
    alert('E-mail já cadastrado!');
    return;
  }
  
  const newUserId = uid('USR');
  const newClient = { id: newUserId, name, email, password, role: 'client', isLogged: true, allowedMode: 'all' };
  
  db.users.push(newClient);
  db.ledgers[newUserId] = {
    zait: { balance: 1000.00, transactions: [{ id: uid('PIX'), method:'PIX', type:'Entrada', value:1000, description:'Abertura de Conta Zait', date:new Date().toLocaleString('pt-BR') }], boletos:[], links:[] },
    voltz: { balance: 1000.00, transactions: [{ id: uid('PIX'), method:'PIX', type:'Entrada', value:1000, description:'Abertura de Conta Voltz', date:new Date().toLocaleString('pt-BR') }], boletos:[], links:[] }
  };
  
  save();
  currentUser = newClient;
  localStorage.setItem('activeUser', JSON.stringify(newClient));
  
  document.getElementById('authScreen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  
  page = 'client_dashboard';
  enforceOperationMode();
  render();
  showToast('Conta criada! Zait Pay e Voltz Pay liberadas.');
});

function logout() {
  if(currentUser) {
    const user = db.users.find(u => u.id === currentUser.id);
    if(user) user.isLogged = false;
    save();
  }
  localStorage.removeItem('activeUser');
  location.reload();
}

// CHAVEADOR DE CONTAS COM REGRAS DE BLOQUEIO INDIVIDUAL
document.querySelectorAll('.switch-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetAccount = btn.dataset.account;
    
    if(currentUser.role === 'client') {
      const freshUser = db.users.find(u => u.id === currentUser.id);
      if(freshUser && freshUser.allowedMode !== 'all' && freshUser.allowedMode !== targetAccount) {
        showToast('Esta conta está bloqueada para você pelo administrador.');
        return;
      }
    }
    
    account = targetAccount;
    localStorage.setItem('activeAccount', account);
    
    // Se o admin mudar de conta, reseta para a página inicial para evitar telas fantasmas
    if(currentUser.role === 'admin') page = 'dashboard';
    
    render();
  });
});

function enforceOperationMode() {
  if (!currentUser) return;
  const btnZait = document.getElementById('btnSwitchZait');
  const btnVoltz = document.getElementById('btnSwitchVoltz');
  if (!btnZait || !btnVoltz) return;

  btnZait.removeAttribute('disabled');
  btnVoltz.removeAttribute('disabled');

  if (currentUser.role === 'client') {
    const freshUser = db.users.find(u => u.id === currentUser.id);
    const mode = freshUser ? freshUser.allowedMode : 'all';

    if (mode === 'zait') {
      btnVoltz.setAttribute('disabled', 'true');
      account = 'zait';
    } else if (mode === 'voltz') {
      btnZait.setAttribute('disabled', 'true');
      account = 'voltz';
    }
    localStorage.setItem('activeAccount', account);
  }
}

function applyTheme() {
  const root = document.documentElement;
  const isZait = account === 'zait';
  root.style.setProperty('--active-primary', isZait ? 'var(--zait-primary)' : 'var(--voltz-primary)');
  root.style.setProperty('--active-secondary', isZait ? 'var(--zait-secondary)' : 'var(--voltz-secondary)');
  document.getElementById('brandName').textContent = isZait ? 'Zait Pay' : 'Voltz Pay';
  document.getElementById('brandMark').textContent = isZait ? 'Z' : 'V';
  document.querySelectorAll('.switch-btn').forEach(b => b.classList.toggle('active', b.dataset.account === account));
}

// RENDERIZAÇÃO CONDICIONAL DE MENUS BASEADO NA CONTA ATIVA NO ADMIN
function renderNav() {
  const nav = document.getElementById('nav');
  let menus = [];

  if (currentUser.role === 'admin') {
    menus = account === 'voltz' ? voltzAdminMenus : zaitAdminMenus;
  } else {
    menus = clientMenus;
  }

  nav.innerHTML = menus.map(([key,label]) => `<button class="${page===key?'active':''}" onclick="openPage('${key}')">${label}</button>`).join('');
}

function openPage(key) { page = key; render(); }

function userLedger(userId = currentUser.id) {
  return db.ledgers[userId] ? db.ledgers[userId][account] : { balance: 0, transactions: [], boletos:[], links:[] };
}

function render() {
  if(!currentUser) return;
  enforceOperationMode();
  applyTheme();
  renderNav();
  
  document.getElementById('userName').textContent = currentUser.name;
  document.getElementById('userRole').textContent = currentUser.role === 'admin' ? 'Acesso Master' : 'Cliente';
  document.getElementById('userAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
  
  if(currentUser.role === 'admin') {
    document.getElementById('btnAdminPanel').classList.remove('hidden');
  }

  const map = { 
    dashboard, clientes, extratos, conta, pix, cartao, boletos, links, api, webhooks, bolsao, split,
    client_dashboard, client_extrato, client_pix, client_boletos, client_links 
  };
  
  document.getElementById('content').innerHTML = (map[page] || dashboard)();
}

// ======================== MÓDULO ADMINISTRATIVO ========================

function setClientOperatingMode(userId, mode) {
  const user = db.users.find(u => u.id === userId);
  if (user) {
    user.allowedMode = mode;
    save();
    showToast(`Modo operacional atualizado para ${user.name}`);
    render();
  }
}

// TELA: CLIENTES CADASTRADOS (ADMIN)
function clientes() {
  const clients = db.users.filter(u => u.role === 'client');
  
  let rows = clients.map(u => {
    const ledgZ = db.ledgers[u.id]?.zait || { balance: 0 };
    const ledgV = db.ledgers[u.id]?.voltz || { balance: 0 };
    const status = u.isLogged ? '<span class="pill ok">Online</span>' : '<span class="muted">Offline</span>';
    const currentMode = u.allowedMode || 'all';

    return `<tr>
      <td><strong>${u.name}</strong><br><small class="muted">${u.email}</small></td>
      <td>${status}</td>
      <td><span style="color:var(--zait-primary)">Zait:</span> ${money(ledgZ.balance)}<br><span style="color:var(--voltz-primary)">Voltz:</span> ${money(ledgV.balance)}</td>
      <td>
        <select class="table-select" onchange="setClientOperatingMode('${u.id}', this.value)">
          <option value="all" ${currentMode === 'all' ? 'selected' : ''}>Liberar as 2 Contas</option>
          <option value="zait" ${currentMode === 'zait' ? 'selected' : ''}>Apenas Zait Pay (Bloqueia Voltz)</option>
          <option value="voltz" ${currentMode === 'voltz' ? 'selected' : ''}>Apenas Voltz Pay (Bloqueia Zait)</option>
        </select>
      </td>
    </tr>`;
  }).join('');

  if(!clients.length) rows = `<tr><td colspan="4" class="muted">Nenhum cliente registrado no sistema.</td></tr>`;

  return `
    <div class="card">
      <h3>Gerenciamento de Clientes Cadastrados</h3>
      <p class="muted">Monitore quem está online, audite saldos e configure permissões de bloqueio individuais por cliente.</p>
      <table>
        <thead>
          <tr>
            <th>Cliente / E-mail</th>
            <th>Status de Login</th>
            <th>Saldos em Conta</th>
            <th>Configuração de Operação (Trava)</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

// TELA: EXTRATOS GLOBAIS (ADMIN - CONSOLIDA MOVIMENTAÇÕES)
function extratos() {
  let allTransactions = [];

  db.users.forEach(u => {
    const userLedger = db.ledgers[u.id];
    if (userLedger) {
      if (userLedger.zait && userLedger.zait.transactions) {
        userLedger.zait.transactions.forEach(t => {
          allTransactions.push({ ...t, clientName: u.name, accountBandeira: 'Zait Pay Premium' });
        });
      }
      if (userLedger.voltz && userLedger.voltz.transactions) {
        userLedger.voltz.transactions.forEach(t => {
          allTransactions.push({ ...t, clientName: u.name, accountBandeira: 'Voltz Pay Simples' });
        });
      }
    }
  });

  allTransactions.sort((a, b) => b.id.localeCompare(a.id));

  let rows = allTransactions.map(t => `
    <tr>
      <td><strong>${t.clientName}</strong></td>
      <td><span class="pill">${t.accountBandeira}</span></td>
      <td><small>${t.id}</small></td>
      <td>${t.method}</td>
      <td><span class="pill ${t.type==='Entrada'?'ok':'warn'}">${t.type}</span></td>
      <td>${t.description}</td>
      <td><strong>${money(t.value)}</strong></td>
    </tr>
  `).join('');

  if(!allTransactions.length) rows = `<tr><td colspan="7" class="muted">Nenhuma movimentação realizada por clientes até o momento.</td></tr>`;

  return `
    <div class="card">
      <h3>Histórico Consolidado de Extratos (Global)</h3>
      <p class="muted">Auditoria em tempo real de todas as entradas, saídas e movimentações financeiras de clientes.</p>
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Bandeira</th>
            <th>ID Transação</th>
            <th>Método</th>
            <th>Fluxo</th>
            <th>Descrição do Evento</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function dashboard() {
  const d = userLedger('USR-ADMIN');
  return `
    <div class="grid cards">
      <div class="card"><span class="pill ok">Saldo Central Admin</span><div class="metric">${money(d.balance)}</div><span class="muted">Segurança Operacional (${account.toUpperCase()})</span></div>
      <div class="card"><span class="pill">Total de Usuários</span><div class="metric">${db.users.length}</div><span class="muted">Cadastrados</span></div>
    </div>
    <br><div class="card"><h3>Painel Central Administrativo</h3><p class="muted">Selecione uma das opções no menu lateral para gerenciar e auditar os parâmetros do ecossistema BaaS.</p></div>`;
}

// MENUS MODULARES ADICIONAIS
function conta() { return `<div class="card"><h3>Contas PJ/PF Administradas</h3><p class="muted">Gerenciamento de contas nominais Zait Pay.</p></div>`; }
function pix() { return `<div class="card"><h3>Módulo Avançado de Infraestrutura PIX</h3><p class="muted">Ajustes operacionais de chaves DICT e limites.</p></div>`; }
function cartao() { return `<div class="card"><h3>Adquirência Geral de Cartões</h3><p class="muted">Configurações de taxas da adquirente.</p></div>`; }
function boletos() { return `<div class="card"><h3>Monitoramento de Lotes de Boletos</h3><p class="muted">Registros de lotes CIP.</p></div>`; }
function links() { return `<div class="card"><h3>Rastreamento de Links Gerados</h3><p class="muted">Auditoria de links ativos no gateway.</p></div>`; }
function api() { return `<div class="card"><h3>Configuração do Endpoint Gateway BAAS e Adquirentes</h3><p class="muted">Camada técnica para conexões de parceiros via API rest.</p></div>`; }
function webhooks() { return `<div class="card"><h3>Disparadores de Webhooks de Eventos</h3><p class="muted">Gerenciamento de callbacks de notificações.</p></div>`; }
function bolsao() { return `<div class="card"><h3>Contas Bolsão Pool (PJ/PF)</h3><p class="muted">Controle de carteiras agregadoras e liquidação financeira simplificada.</p></div>`; }
function split() { return `<div class="card"><h3>Split Automatizado de Pagamentos</h3><p class="muted">Configurações e auditoria de divisões automáticas de recebíveis.</p></div>`; }

// ======================== MÓDULO EXCLUSIVO DO CLIENTE ========================

function client_dashboard() {
  const cl = userLedger();
  const inputs = cl.transactions.filter(t => t.type === 'Entrada').reduce((s, t) => s + t.value, 0);
  const outputs = cl.transactions.filter(t => t.type === 'Saída').reduce((s, t) => s + t.value, 0);
  
  return `
    <div class="grid cards">
      <div class="card"><span class="pill ok">Seu Saldo Disponível</span><div class="metric" style="color:var(--active-primary)">${money(cl.balance)}</div><span class="muted">Disponível para movimentar</span></div>
      <div class="card"><span class="pill ok">Entradas</span><div class="metric">${money(inputs)}</div><span class="muted">Faturado</span></div>
      <div class="card"><span class="pill warn">Saídas</span><div class="metric">${money(outputs)}</div><span class="muted">Pago</span></div>
    </div>
    <br>
    <div class="grid two">
      <div class="card">
        <h3>Ações Rápidas</h3>
        <button class="btn full" onclick="openPage('client_pix')">⚡ Transferência PIX</button><br>
        <button class="btn ghost full" onclick="openPage('client_boletos')">🧾 Emitir Boleto Bancário</button><br>
        <button class="btn ghost full" onclick="openPage('client_links')">🔗 Novo Link de Cobrança</button>
      </div>
      <div class="card"><h3>Últimos Lançamentos</h3>${tableTransactions(cl.transactions.slice(-3))}</div>
    </div>
  `;
}

function client_extrato() {
  return `<div class="card"><h3>Histórico Detalhado da Conta</h3>${tableTransactions(userLedger().transactions)}</div>`;
}

function client_pix() {
  return `
    <div class="card" style="max-width: 500px;">
      <h3>Área PIX</h3>
      <form onsubmit="processClientPix(event)">
        <label>Operação</label>
        <select id="pixType"><option value="Saída">Pagar/Transferir para Alguém</option><option value="Entrada">Receber/Simular Depósito</option></select>
        <label>Valor (R$)</label>
        <input id="pixValue" type="number" step="0.01" required />
        <label>Chave do Destinatário</label>
        <input id="pixDesc" placeholder="CPF, CNPJ ou E-mail" required />
        <button class="btn full">Confirmar PIX</button>
      </form>
    </div>
  `;
}

function processClientPix(e) {
  e.preventDefault();
  const type = document.getElementById('pixType').value;
  const val = Number(document.getElementById('pixValue').value);
  const desc = document.getElementById('pixDesc').value;
  const ledger = db.ledgers[currentUser.id][account];

  if(type === 'Saída' && ledger.balance < val) {
    alert('Saldo insuficiente para enviar este PIX.');
    return;
  }

  ledger.transactions.push({ id: uid('PIX'), method: 'PIX', type, value: val, description: `PIX: ${desc}`, date: new Date().toLocaleString('pt-BR') });
  ledger.balance += type === 'Entrada' ? val : -val;
  save();
  showToast('PIX efetuado com sucesso!');
  openPage('client_dashboard');
}

function client_boletos() {
  const bList = userLedger().boletos || [];
  const rows = bList.map(b => `<tr><td>${b.id}</td><td>${b.desc}</td><td>${money(b.value)}</td><td><button class="btn ghost" style="padding:4px 8px; font-size:11px;" onclick="alert('PDF baixado com sucesso.')">Baixar PDF</button></td></tr>`).join('');
  
  return `
    <div class="grid two">
      <form class="card" onsubmit="generateClientBoleto(event)">
        <h3>Emissão de Boleto</h3>
        <label>Valor (R$)</label>
        <input id="bolValue" type="number" step="0.01" required />
        <label>Sacado / Descrição</label>
        <input id="bolDesc" required />
        <button class="btn full">Gerar Cobrança</button>
      </form>
      <div class="card">
        <h3>Seus Boletos</h3>
        <table><thead><tr><th>ID</th><th>Descrição</th><th>Valor</th><th>PDF</th></tr></thead><tbody>${rows || '<tr><td colspan="4" class="muted">Nenhum emitido.</td></tr>'}</tbody></table>
      </div>
    </div>
  `;
}

function generateClientBoleto(e) {
  e.preventDefault();
  const val = Number(document.getElementById('bolValue').value);
  const desc = document.getElementById('bolDesc').value;
  const userSpace = db.ledgers[currentUser.id][account];

  if(!userSpace.boletos) userSpace.boletos = [];
  const bId = uid('BOL');
  
  userSpace.boletos.push({ id: bId, value: val, desc });
  userSpace.transactions.push({ id: bId, method: 'BOLETO', type: 'Entrada', value: val, description: `Boleto Registrado: ${desc}`, date: new Date().toLocaleString('pt-BR') });
  userSpace.balance += val;
  
  save();
  showToast('Boleto emitido e creditado.');
  openPage('client_dashboard');
}

function client_links() {
  const lList = userLedger().links || [];
  const rows = lList.map(l => `<tr><td>${l.desc}</td><td>${money(l.value)}</td><td>Até ${l.parc}x</td></tr>`).join('');

  return `
    <div class="grid two">
      <form class="card" onsubmit="createClientLink(event)">
        <h3>Novo Link de Pagamento</h3>
        <label>Valor (R$)</label>
        <input id="lnkValue" type="number" step="0.01" required />
        <label>Nome do Link</label>
        <input id="lnkDesc" required />
        <label>Parcelamento</label>
        <select id="lnkParc"><option value="1">À vista</option><option value="12">Até 12x no Cartão</option></select>
        <button class="btn full">Gerar Link</button>
      </form>
      <div class="card">
        <h3>Links Criados</h3>
        <table><thead><tr><th>Nome</th><th>Valor</th><th>Parcelas</th></tr></thead><tbody>${rows || '<tr><td colspan="3" class="muted">Nenhum criado.</td></tr>'}</tbody></table>
      </div>
    </div>
  `;
}

function createClientLink(e) {
  e.preventDefault();
  const val = Number(document.getElementById('lnkValue').value);
  const desc = document.getElementById('lnkDesc').value;
  const parc = document.getElementById('lnkParc').value;
  const userSpace = db.ledgers[currentUser.id][account];

  if(!userSpace.links) userSpace.links = [];
  userSpace.links.push({ value: val, desc, parc });
  save();
  showToast('Link de pagamento criado!');
  render();
}

function tableTransactions(rows) {
  if(!rows || !rows.length) return '<p class="muted">Nenhum lançamento.</p>';
  return `<table><thead><tr><th>ID</th><th>Método</th><th>Fluxo</th><th>Descrição</th><th>Valor</th></tr></thead><tbody>${rows.map(t=>`<tr><td><small>${t.id}</small></td><td>${t.method}</td><td><span class="pill ${t.type==='Entrada'?'ok':'warn'}">${t.type}</span></td><td>${t.description}</td><td>${money(t.value)}</td></tr>`).join('')}</tbody></table>`;
}

// INICIALIZADOR AUTOMÁTICO
if(currentUser) {
  document.getElementById('authScreen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  render();
}