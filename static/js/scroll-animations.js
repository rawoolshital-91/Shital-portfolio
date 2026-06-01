document.addEventListener("DOMContentLoaded", function () {
    const revealSelectors = [
        ".about .profile-img",
        ".about .about-text",
        ".skills .section-title",
        ".skills .skills-grid",
        ".works .section-title",
        ".works .work-card",
        ".education .education-title",
        ".education .education-card",
        ".contact .contact-title",
        ".contact .contact-info-card",
        ".contact .contact-form",
        ".project-info-card",
        ".project-gallery",
        ".gallery-heading",
        ".gallery-card",
        ".skill-detail-grid > div",
        ".about-detail-text p",
        ".about-detail-links a"
    ];

    const revealItems = document.querySelectorAll(revealSelectors.join(","));

    revealItems.forEach(function (item, index) {
        if (item.classList.contains("slick-cloned")) {
            return;
        }

        item.classList.add("scroll-reveal");

        if (!item.style.getPropertyValue("--reveal-delay")) {
            item.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 0.08}s`);
        }
    });

    if (!("IntersectionObserver" in window)) {
        revealItems.forEach(function (item) {
            item.classList.add("is-visible");
        });
        return;
    }

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.16,
        rootMargin: "0px 0px -70px 0px"
    });

    revealItems.forEach(function (item) {
        observer.observe(item);
    });
});
