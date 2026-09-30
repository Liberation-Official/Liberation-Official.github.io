const colors = [["Violet","#8b7cff","#c2b9ff"],["Blue","#4c8dff","#a9c8ff"],["Cyan","#2fd3e6","#a2eef7"],["Green","#3ddc97","#a6f1cf"],
  ["Pink","#ff6fb5","#ffb8da"],["Red","#ff5c7a","#ffa9b8"],["Orange","#ffa24c","#ffd0a0"],["Gold","#f2cb3d","#fbe79a"]];
const box = document.getElementById("swatches");
colors.forEach(([name, a, hi], i) => {
  const b = document.createElement("button");
  b.style.setProperty("--c", a); b.title = name; b.setAttribute("aria-label", name);
  b.setAttribute("aria-pressed", i === 0);
  b.onclick = () => {
    document.documentElement.style.setProperty("--accent", a);
    document.documentElement.style.setProperty("--accent-hi", hi);
    box.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b));
  };
  box.appendChild(b);
});

const p2 = document.getElementById("p2");
function fade() {
  const max = document.documentElement.scrollHeight - innerHeight;
  p2.style.opacity = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
}
addEventListener("scroll", fade, { passive: true }); addEventListener("resize", fade); fade();
