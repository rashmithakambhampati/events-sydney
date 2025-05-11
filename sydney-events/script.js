const events = [
    {
        title: "Warren Ellis Live Performance",
    date: "2025-06-08 7:00 PM",
    location: "City Recital Hall, Sydney",
    description: "Join reowned musician Warren Ellis for an unforgettable Live Performance!",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=60",
    link: "https://tickets.cityrecitalhall.com/7377"
  },
  {
    title: "Tech Expo Sydney",
    date: "2025-07-15",
    location: "Sydney Convention Centre",
    description: "Explore the latest in tech innovation at the Sydney Convention Centre.",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=600&q=60",
    link: "tech-expo.html"
    },
    {
        title: "Sydney Music Festival 2025",
        date: "2025-06-21",
        location: "Sydney Opera House",
        description: "A Celebration of music at the iconic Sydney Opera House.",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=600&q=60",
        link: "music-festival.html"
      },
      {
        title: "Music Gala 2025",
        date: "2025-08-01",
        location: "Sydney Opera House",
        description: "Join us for a spectacular night of classical music performed by world-class musicians.",
        image: "images/musicgala.jpg",
        link: "music-gala.html"
      },
      {
        title: "Sydney Theatre Night 2025",
        date: "2025-10-05",
        location: "Capitol Theatre, Sydney",
        description: "Experience stunning live performances and drama at Sydney’s iconic theatre night.",
        image: "images/movietheatre.jpg",
        link: "theatre-night.html"
      },
      {
        title: "Sydney Arts Festival 2025",
        date: "2025-11-20",
        location: "The Rocks, Sydney",
        description: "Celebrate creativity at the Sydney Arts Festival with exhibits, workshops, and more.",
        image: "images/artfestival.jpg",
        link: "arts-festival.html"
      }
  ];
  
  let currentLink = "";
  
  function renderEvents() {
    const container = document.getElementById("events-container");
    container.innerHTML = "";
  
    events.forEach(event => {
      const eventCard = document.createElement("div");
      eventCard.className = "event-card";
      eventCard.innerHTML = `
        <img src="${event.image}" alt="${event.title}" />
        <h2>${event.title}</h2>
        <p>${event.description}</p>
        <p><strong>Date:</strong> ${event.date}</p>
        <button onclick="openPopup('${event.link}')">GET TICKETS</button>
      `;
      container.appendChild(eventCard);
    });
  }
  
  function openPopup(link) {
    currentLink = link;
    document.getElementById("email-popup").classList.remove("hidden");
  }
  
  function closePopup() {
    document.getElementById("email-popup").classList.add("hidden");
  }
  
  function submitEmail() {
    const email = document.getElementById("user-email").value;
    if (email && email.includes("@")) {
      window.open(currentLink, "_blank");
      closePopup();
    } else {
      alert("Please enter a valid email address!");
    }
  }
  
  renderEvents();