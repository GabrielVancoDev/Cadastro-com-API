# 🌐 NG Music

Este projeto é um **site estático responsivo** com foco em uma navegação moderna e adaptável a dispositivos móveis. Ele utiliza HTML, CSS e JavaScript puro para criar uma experiência fluida, incluindo um menu tipo "hambúrguer" que se adapta ao tamanho da tela.

---

## 📸 Imagens do Projeto

> *(Adicione suas capturas de tela depois nos locais indicados)*

### 🖥️ Versão Desktop
![image](https://github.com/user-attachments/assets/7a50d3be-87b6-4f0e-9d36-ea69858ba914)


### 📱 Versão Mobile com menu fechado
![image](https://github.com/user-attachments/assets/dfefc7cc-8c3a-4485-b5dd-07d7b632a115)


### 📱 Versão Mobile com menu aberto
![image](https://github.com/user-attachments/assets/b892c8d0-8079-42d7-a5c7-07ccb4b4398f)


---

## 🚀 Funcionalidades

- Layout responsivo com media queries
- Menu de navegação mobile com botão de alternância
- Navegação fluida entre seções da página
- Ícones integrados com Font Awesome
- Estrutura clara e moderna com HTML5 e CSS3

---


## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript Vanilla (puro)**
- **Font Awesome** (para os ícones)

---

## 📲 Como Funciona o Menu Mobile?

O botão com o ícone "hambúrguer" (`<i class="fas fa-bars"></i>`) dispara um evento que adiciona ou remove a classe `active` na tag `<nav>`, revelando ou escondendo os links de navegação.

```javascript
const toggleBtn = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
```

💡 Próximas Melhorias (ideias)
Animação deslizante no menu mobile

- Scroll suave para seções internas

- Versão em Dark Mode

- SEO básico (títulos, meta tags)

- Integração com formulário de contato

- Implementação de Back-End

- Implementação de APIs

📜 Licença
Este projeto está sob a licença MIT. Sinta-se livre para usá-lo, modificá-lo e distribuí-lo como quiser.

🙋‍♂️ Autor
Desenvolvido com 💻 por Gabriel Gandolfi.
