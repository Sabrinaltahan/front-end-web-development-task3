document.getElementById("mode-toggle").addEventListener("click", function() {
    // Toggle theme class on body
    document.body.classList.toggle("dark");
});
// Automatically apply dark mode if user preference is dark
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) document.body.classList.add("dark");

//# sourceMappingURL=index.de158e3a.js.map
