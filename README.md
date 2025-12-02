# Template do Site - Projeto de Sistemas Digitais

Este repositório contém um template para documentar um projeto da disciplina de Sistemas Digitais. O objetivo é fornecer uma estrutura pronta (HTML/CSS/JS) para que a equipe preencha informações, imagens, código e links.

Como usar
- Abra `index.html` no navegador.
- Edite os textos diretamente nas áreas editáveis (alguns elementos têm `contenteditable` para facilitar): motivação, objetivo, contextualização, autores, passos, lições.
- Substitua os arquivos em `assets/` pelos seus arquivos reais (diagramas, fotos, `project.zip`).
- Atualize os links `repo-link` e `repo-full` no `index.html` para apontar ao repositório GitHub.

Arquivos incluídos
- `index.html` - estrutura do site e conteúdo inicial.
- `style.css` - estilos responsivos.
- `script.js` - interações (copiar código, baixar .zip, preenchimento do ano).
- `assets/` - arquivos de placeholder (diagramas, fotos e .zip placeholder).

Substituições recomendadas antes da entrega
- Trocar `assets/project.zip` por um arquivo .zip real contendo todos os códigos e documentação.
- Atualizar `iframe` do YouTube com o `VIDEO_ID` correto.
- Trocar imagens `assets/profile-placeholder.svg` e `assets/diagram.svg` pelos arquivos reais.

Gerar o .zip (Windows PowerShell)
```powershell
Compress-Archive -Path path\to\project\* -DestinationPath assets\project.zip -Force
```

Se quiser, eu posso:
- Adicionar uma página de index automática listando múltiplos projetos.
- Gerar um exemplo de README com padrões de documentação técnica.
