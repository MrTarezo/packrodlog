fetch("reviews/data/list.json")
  .then(res => res.json())
  .then(data => {
    const rodList = document.getElementById("review-list");
    rodList.innerHTML = "";
    data
      .filter(item => item.type === "rod")
      .forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="reviews/${item.filename}">【${item.title}】</a>`;
        rodList.appendChild(li);
      });
  })
  .catch(err => {
    console.error("レビュー読み込み失敗:", err);
    document.getElementById("review-list").innerText = "レビューの読み込みに失敗しました。";
  });
