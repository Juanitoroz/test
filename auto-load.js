
const GITHUB_ARTICLES_URL = 'https://raw.githubusercontent.com/juanitoroz/portfolio-livre-seo/main/articles/';
const FILES = [
  'article1.txt',
  'article2.txt',
  'article3.txt',
  't-es.txt',
];

let articles = [];
let currentIndex = 0;

function renderPages() {
  const left = articles[currentIndex] || { title: '', content: '' };
  const right = articles[currentIndex + 1] || { title: '', content: '' };
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

async function loadArticles() {
  for (let file of FILES) {
    try {
      const res = await fetch(GITHUB_ARTICLES_URL + file);
      const text = await res.text();
      const half = Math.floor(text.length / 2);
      articles.push({ title: file.replace('.txt', ''), content: text.slice(0, half) });
      articles.push({ title: file.replace('.txt', ''), content: text.slice(half) });
    } catch (e) {
      console.error('Erreur de chargement pour', file, e);
    }
  }
  renderPages();
}

window.onload = loadArticles;
