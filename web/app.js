// =============================================================================
// DevOps Rooms — Mini app de navigation
// Pas de framework. Vanilla JS.
// =============================================================================

document.addEventListener("DOMContentLoaded", function () {
  // --- Filtrage des rooms ---
  var filterButtons = document.querySelectorAll(".filter-btn");
  var roomCards = document.querySelectorAll(".room-card");

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      // Retirer la classe active de tous les boutons
      filterButtons.forEach(function (b) {
        b.classList.remove("active");
      });
      // Ajouter active au bouton cliqué
      btn.classList.add("active");

      var filter = btn.getAttribute("data-filter");

      roomCards.forEach(function (card) {
        if (filter === "all") {
          card.classList.remove("hidden");
        } else if (filter === "beginner") {
          if (card.classList.contains("beginner")) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        } else if (filter === "advanced") {
          if (card.classList.contains("advanced")) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        } else if (filter === "starred") {
          if (card.classList.contains("starred")) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        }
      });
    });
  });

  // --- Animation d'entrée des cartes ---
  roomCards.forEach(function (card, index) {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.4s ease, transform 0.4s ease";

    setTimeout(function () {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 80 * index);
  });
});
