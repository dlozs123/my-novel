// 你的 txt 文件夹路径（相对于网站根目录）
const txtFolder = "txt/";

async function fetchFileList() {
  // 因为 GitHub Pages 不支持直接列目录，
  // 所以你需要手动维护一个 list.json 来记录 txt 文件名
  const res = await fetch(txtFolder + "list.json");
  const files = await res.json();
  const ul = document.getElementById("fileList");
  ul.innerHTML = "";
  files.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    li.addEventListener("click", () => loadTxt(name));
    ul.appendChild(li);
  });
}

async function loadTxt(name) {
  const res = await fetch(txtFolder + name);
  const text = await res.text();
  document.getElementById("fileContent").textContent = text;
}

fetchFileList();
