// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

// JOIN IEEE FORM

const joinForm = document.getElementById("joinForm");
const formMessage = document.getElementById("formMessage");

joinForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const email = document.getElementById("studentEmail").value.trim();
    const branch = document.getElementById("studentBranch").value.trim();
    const interest = document.getElementById("studentInterest").value;

    if (!name || !email || !branch || !interest) {
        formMessage.textContent = "Please complete all the fields.";
        return;
    }

    const subject = encodeURIComponent("RRCE IEEE Membership Enquiry");
    const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Department: ${branch}\n` +
        `Interest: ${interest}\n`
    );

    // Replace this address with the official IEEE branch email.
    const officialEmail = "REPLACE_WITH_OFFICIAL_IEEE_EMAIL";

    if (officialEmail === "REPLACE_WITH_OFFICIAL_IEEE_EMAIL") {
        formMessage.textContent =
            "Demo form: please configure the official IEEE email before accepting enquiries.";
        return;
    }

    window.location.href =
        `mailto:${officialEmail}?subject=${subject}&body=${body}`;

    formMessage.textContent = "Your email application should open now.";
});

// SIMPLE SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".section-heading, .info-card, .domain-card, .event-card, .project-card, .team-card"
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});
