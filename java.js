document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('open-menu').addEventListener('click', function() {
        let menu = document.getElementById('menu');
        if (menu.style.display === "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
});

