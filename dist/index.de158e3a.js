document.getElementById("mode-toggle").addEventListener("click", function() {
    const body = document.body;
    // Check the current mode
    if (body.classList.contains("dark-mode")) {
        console.log("the body has dart mode");
        // Switch to light mode
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    } else {
        console.log("the body has light mode");
        // Switch to dark mode
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    }
});
// Automatically apply the system preference on initial load
window.addEventListener("load", ()=>{
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) document.body.classList.add("dark-mode");
    else document.body.classList.add("light-mode");
});

//# sourceMappingURL=index.de158e3a.js.map
