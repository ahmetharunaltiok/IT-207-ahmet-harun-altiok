document.addEventListener("DOMContentLoaded", function () {
    function navigateTo(page) {
        fetch(`views/${page}.html`)
            .then(response => response.text())
            .then(html => {
                document.getElementById("content").innerHTML = html;
            })
            .catch(error => {
                document.getElementById("content").innerHTML = `<p>Error loading page: ${error}</p>`;
            });
    }

    // Tüm navigasyon linklerine tıklama eventi ekle
    document.querySelectorAll("a.nav-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const page = this.getAttribute("data-page");
            navigateTo(page);
        });
    });

    // Başlangıç sayfası olarak login'i yükleyelim
    navigateTo("login");
});
