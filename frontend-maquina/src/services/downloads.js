export function downloadCSV(data){
  const csv = 'Account,Campaign,AdGroup,Final URL,Headline,Description\n' +
    '210-208-3947,Demo Campaign,Grupo Principal,https://example.com,Headline demo,Description demo\n'
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'campaign.csv'; a.click(); URL.revokeObjectURL(url);
}
export function downloadTXT(){ const txt='Demo TXT export'; const b=new Blob([txt], {type:'text/plain'}); const u=URL.createObjectURL(b); const a=document.createElement('a'); a.href=u;a.download='campaign.txt';a.click();URL.revokeObjectURL(u);}
export function downloadPDF(){ alert('Download PDF: use backend or server-side lib to render real PDF. This is placeholder.'); }
