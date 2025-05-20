
const articles = [
  { title: "Article 1", content: "Contenu SEO de l'article 1..." },
  { title: "Article 2", content: "Contenu SEO de l'article 2..." },
  { title: "Article 3", content: "Contenu SEO de l'article 3..." },
  { title: "Article 4", content: "Contenu SEO de l'article 4..." }
];

let currentIndex = 0;

function renderPages() {
  const left = articles[currentIndex] || { title: "", content: "" };
  const right = articles[currentIndex + 1] || { title: "", content: "" };
  document.getElementById('leftPage').querySelector('h2').innerText = left.title;
  document.getElementById('leftPage').querySelector('p').innerText = left.content;
  document.getElementById('rightPage').querySelector('h2').innerText = right.title;
  document.getElementById('rightPage').querySelector('p').innerText = right.content;
}

function nextPage() {
  if (currentIndex + 2 < articles.length) {
    currentIndex += 2;
    renderPages();
  }
}

function prevPage() {
  if (currentIndex - 2 >= 0) {
    currentIndex -= 2;
    renderPages();
  }
}

renderPages();
