const scholarships = [
  {
    title: "Global Scholars Program",
    description: "Full tuition for international students.",
    category: "Undergraduate"
  },
  {
    title: "Women in STEM",
    description: "Support for women pursuing STEM degrees.",
    category: "Postgraduate"
  },
 {
    title: "Research Excellence Award",
    description: "Funding for outstanding research proposals.",
    category: "Research"
  },
  {
    title: "Merit-Based Scholarship",
    description: "Awarded to top-performing students.",
    category: "Undergraduate"
  },
 {
    title: "Leadership Fellowship",
    description: "For students showing exceptional leadership.",
    category: "Postgraduate"
  },
  {
    title: "Innovation Grant",
    description: "Support for innovative student projects.",
    category: "Research"
  }
];
function renderScholarships(list) {
  const container = document.getElementById("scholarshipList");
  container.innerHTML = "";
  list.forEach(s => {
    const card = document.createElement("div");
    card.className = "scholarship-card";
    card.innerHTML = `
      <h4>${s.title}</h4>
      <p>${s.description}</p>
      <p><strong>Category:</strong> ${s.category}</p>
    `;
    container.appendChild(card);
  });
document.getElementById("totalCount").textContent = list.length;
}


