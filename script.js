
let articles = [
  { title: "Article d'exemple", content: "Voici un exemple de contenu SEO présenté dans un style ancien." }
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

document.getElementById('fileInput').addEventListener('change', function(event) {
  const files = event.target.files;
  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function(e) {
      articles.push({ title: file.name.replace('.txt', ''), content: e.target.result });
      renderPages();
    };
    reader.readAsText(file);
  });
});

renderPages();
