// script.js - interações mínimas para o template
document.addEventListener('DOMContentLoaded', function(){
  // ano no rodapé
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // botões de download (.zip placeholders)
  const downloadBtns = [document.getElementById('download-zip'), document.getElementById('download-zip-2')];
  downloadBtns.forEach(btn => {
    if(!btn) return;
    btn.addEventListener('click', function(){
      // href para arquivo placeholder em assets/
      const href = 'assets/project.zip';
      const a = document.createElement('a');
      a.href = href;
      a.download = href.split('/').pop();
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  });

  // link do repositório (coloque o href real no index.html ou com JS)
  const repoLink = document.getElementById('repo-link');
  const repoFull = document.getElementById('repo-full');
  [repoLink, repoFull].forEach(el=>{ if(el) el.addEventListener('click', e=>{/* abre nova aba normalmente */}); });
});

function copyCode(id){
  const el = document.getElementById(id);
  if(!el) return alert('Trecho de código não encontrado.');
  const text = el.innerText || el.textContent;
  navigator.clipboard.writeText(text).then(()=>{
    showToast('Código copiado para a área de transferência');
  }).catch(()=>{ alert('Não foi possível copiar o código.'); });
}

function showToast(message){
  const t = document.createElement('div');
  t.textContent = message;
  t.style.position='fixed'; t.style.right='16px'; t.style.bottom='16px';
  t.style.background='rgba(0,0,0,0.8)'; t.style.color='white'; t.style.padding='10px 14px';
  t.style.borderRadius='8px'; t.style.zIndex=9999; document.body.appendChild(t);
  setTimeout(()=>{ t.style.transition='opacity 300ms'; t.style.opacity='0'; setTimeout(()=>t.remove(),300); },1500);
}
