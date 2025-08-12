// src/services/downloads.js

// Função para baixar CSV a partir dos dados da campanha (array de objetos)
export function downloadCSV(data = []) {
  if (!data.length) {
    alert('Nenhum dado disponível para exportar CSV.');
    return;
  }
  // Cabeçalhos CSV - pode ser parametrizado conforme estrutura da campanha
  const headers = ['Account', 'Campaign', 'AdGroup', 'Final URL', 'Headline', 'Description'];
  const csvRows = [];

  // Adiciona cabeçalho
  csvRows.push(headers.join(','));

  // Itera pelos dados criando linhas CSV
  data.forEach(item => {
    const row = headers.map(header => {
      const key = header.toLowerCase().replace(/ /g, '_'); // exemplo: 'Final URL' -> 'final_url'
      // Protege vírgulas e aspas em campos de texto
      const cell = item[key] ? item[key].toString().replace(/"/g, '""') : '';
      return `"${cell}"`;
    });
    csvRows.push(row.join(','));
  });

  const csvString = csvRows.join('\n');
  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'campaign.csv';
  a.click();
  URL.revokeObjectURL(url);
}

// Função para baixar TXT a partir de texto dinâmico
export function downloadTXT(text = '') {
  if (!text) {
    alert('Nenhum dado disponível para exportar TXT.');
    return;
  }
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'campaign.txt';
  a.click();
  URL.revokeObjectURL(url);
}

// Função placeholder para download PDF - implementação futura via backend
export function downloadPDF() {
  alert(
    'Download de PDF ainda não implementado.\n' +
    'Para PDFs reais, use uma biblioteca no backend (ex: pdfkit, puppeteer) ou serviço dedicado.'
  );
}
