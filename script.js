let currentLang = 'id'; // 'id' for Indonesian, 'en' for English

const planetData = {
  sun: {
    en: { name: "Sun", type: "Yellow Dwarf Star", distance: "0 km", mass: "1.989 × 10^30 kg", moons: "0", temp: "5,500 °C (Surface)", desc: "The Sun is the giant star at the center of our Solar System. Its immense gravitational pull is what keeps all the planets, asteroids, and comets in orbit. It's essentially a massive ball of glowing, burning hydrogen and helium plasma. The energy it releases makes life on Earth possible, providing warmth, driving the weather, and enabling photosynthesis." },
    id: { name: "Matahari", type: "Bintang Katai Kuning", distance: "0 km", mass: "1.989 × 10^30 kg", moons: "0", temp: "5.500 °C (Permukaan)", desc: "Matahari adalah bintang raksasa yang menjadi pusat Tata Surya kita. Tarikan gravitasinya yang luar biasa menahan semua planet, asteroid, dan komet agar tetap pada orbitnya. Pada dasarnya, matahari adalah bola plasma hidrogen dan helium yang terus terbakar. Energi yang dipancarkannya memungkinkan adanya kehidupan di Bumi, mengatur cuaca, dan membantu tanaman berfotosintesis." }
  },
  mercury: {
    en: { name: "Mercury", type: "Terrestrial Planet", distance: "57.9 million km", mass: "3.285 × 10^23 kg", moons: "0", temp: "-173 °C to 427 °C", desc: "Mercury is the smallest planet and the closest to the Sun. Because it lacks a significant atmosphere to trap heat, it experiences the most extreme temperature fluctuations in the Solar System—burning hot during the day and freezing cold at night. Its surface is rocky and heavily cratered, resembling Earth's Moon." },
    id: { name: "Merkurius", type: "Planet Terestrial", distance: "57.9 juta km", mass: "3.285 × 10^23 kg", moons: "0", temp: "-173 °C hingga 427 °C", desc: "Merkurius adalah planet terkecil dan terdekat dengan Matahari. Karena tidak memiliki atmosfer yang tebal untuk menahan panas, Merkurius mengalami perubahan suhu paling ekstrem di Tata Surya—sangat panas di siang hari dan sangat beku di malam hari. Permukaannya berbatu dan penuh kawah, mirip seperti Bulan milik Bumi." }
  },
  venus: {
    en: { name: "Venus", type: "Terrestrial Planet", distance: "108.2 million km", mass: "4.867 × 10^24 kg", moons: "0", temp: "462 °C", desc: "Venus is the second planet from the Sun and is considered Earth's 'toxic twin' due to their similar size and gravity. However, Venus has a crushing atmosphere full of carbon dioxide and clouds of sulfuric acid. This creates a runaway greenhouse effect, making it the hottest planet in the Solar System, even hotter than Mercury." },
    id: { name: "Venus", type: "Planet Terestrial", distance: "108.2 juta km", mass: "4.867 × 10^24 kg", moons: "0", temp: "462 °C", desc: "Venus adalah planet kedua dari Matahari dan sering disebut sebagai 'kembaran beracun' Bumi karena ukurannya yang mirip. Namun, Venus memiliki atmosfer tebal yang berisi karbon dioksida pekat dan awan asam sulfat. Hal ini menciptakan efek rumah kaca yang parah, menjadikannya planet paling panas di Tata Surya, bahkan mengalahkan Merkurius." }
  },
  earth: {
    en: { name: "Earth", type: "Terrestrial Planet", distance: "149.6 million km", mass: "5.972 × 10^24 kg", moons: "1", temp: "15 °C (Average)", desc: "Earth is the third planet from the Sun and the only place in the known universe confirmed to harbor life. It is an ocean world, with water covering over 70% of its surface. Earth’s perfect distance from the Sun, its protective atmosphere, and its magnetic field provide a highly balanced environment where millions of species can thrive." },
    id: { name: "Bumi", type: "Planet Terestrial", distance: "149.6 juta km", mass: "5.972 × 10^24 kg", moons: "1", temp: "15 °C (Rata-rata)", desc: "Bumi adalah planet ketiga dari Matahari dan satu-satunya tempat di alam semesta yang diketahui memiliki tanda kehidupan. Sekitar 70% permukaan Bumi ditutupi oleh air lautan. Jaraknya yang sempurna dari Matahari, atmosfer pelindungnya, dan medan magnetnya memberikan lingkungan seimbang tempat jutaan spesies makhluk hidup dapat berkembang biak." }
  },
  mars: {
    en: { name: "Mars", type: "Terrestrial Planet", distance: "227.9 million km", mass: "6.39 × 10^23 kg", moons: "2", temp: "-60 °C (Average)", desc: "Mars is a cold desert world covered in iron oxide (rust), which gives it its iconic red color. It is home to Olympus Mons, the largest volcano in the Solar System. Scientists have found strong evidence that Mars was once a watery, habitable world in the ancient past, making it a primary target for future human exploration." },
    id: { name: "Mars", type: "Planet Terestrial", distance: "227.9 juta km", mass: "6.39 × 10^23 kg", moons: "2", temp: "-60 °C (Rata-rata)", desc: "Mars adalah planet gurun yang sangat dingin dan permukaannya tertutup besi oksida (karat), memberikannya warna kemerahan yang khas. Disinilah letak Olympus Mons, gunung berapi terbesar di Tata Surya. Para ilmuwan meyakini Mars dulunya adalah planet berair yang bisa dihuni miliaran tahun lalu, menjadikannya target utama penjelajahan manusia." }
  },
  jupiter: {
    en: { name: "Jupiter", type: "Gas Giant", distance: "778.5 million km", mass: "1.898 × 10^27 kg", moons: "79", temp: "-110 °C", desc: "Jupiter is the colossal King of the Planets. It is so giant that over 1,300 Earths could fit inside it. Being a gas giant, it doesn't have a solid surface; it's mostly swirling hydrogen and helium. Jupiter is famous for the Great Red Spot, a massive cyclonic storm larger than Earth that has been raging for hundreds of years." },
    id: { name: "Yupiter", type: "Raksasa Gas", distance: "778.5 juta km", mass: "1.898 × 10^27 kg", moons: "79", temp: "-110 °C", desc: "Yupiter adalah planet dominan terbesar dalam ranah Tata Surya—saking besarnya, 1.300 buah planet Bumi bisa muat ke dalamnya. Sebagai raksasa gas, Yupiter tidak memiliki permukaan padat karena mayoritas terdiri dari hidrogen. Ciri paling terkenalnya adalah Bintik Merah Besar: badai raksasa tak berujung yang ukurannya lebih besar dari Bumi." }
  },
  saturn: {
    en: { name: "Saturn", type: "Gas Giant", distance: "1.43 billion km", mass: "5.683 × 10^26 kg", moons: "82", temp: "-140 °C", desc: "Saturn is the jewel of the Solar System, celebrated for its spectacular and complex ring system made almost entirely of ice chunks and rocky debris. Like Jupiter, it is a massive gas giant with extreme wind storms. Saturn is remarkably light for its size; it has a lower density than water, meaning it would float in a giant cosmic bathtub." },
    id: { name: "Saturnus", type: "Raksasa Gas", distance: "1.43 miliar km", mass: "5.683 × 10^26 kg", moons: "82", temp: "-140 °C", desc: "Saturnus dikenal sebagai mutiaranya Tata Surya karena memiliki sistem cincin paling rumit dan spektakuler, terbuat dari bongkahan es dan bebatuan angkasa. Sama dengan Yupiter, planet gas ini dipenuhi badai ekstrem. Uniknya, Saturnus memiliki kepadatan paling rendah dari semua planet, yang logikanya ia dapat mengapung jika diletakkan di bak air raksasa." }
  },
  uranus: {
    en: { name: "Uranus", type: "Ice Giant", distance: "2.87 billion km", mass: "8.681 × 10^25 kg", moons: "27", temp: "-195 °C", desc: "Uranus is a strange, freezing ice giant. It is unique because it orbits the Sun on its side, rolling like a barrel—likely due to a colossal collision early in its history. Its atmosphere is made of hydrogen, helium, and methane, which absorbs red light and gives Uranus its pale blue-green glowing color." },
    id: { name: "Uranus", type: "Raksasa Es", distance: "2.87 miliar km", mass: "8.681 × 10^25 kg", moons: "27", temp: "-195 °C", desc: "Uranus adalah raksasa es misterius bersuhu sangat membeku. Satu hal yang membuatnya sangat aneh adalah orientasi putarannya: ia mengorbit matahari dalam keadaan 'berbaring' menyamping, kemungkinan besar akibat tabrakan raksasa di masa lalu. Kandungan metana di atmosfernya memantulkan warna cyan biru-kehijauan yang pucat dan indah." }
  },
  neptune: {
    en: { name: "Neptune", type: "Ice Giant", distance: "4.5 billion km", mass: "1.024 × 10^26 kg", moons: "14", temp: "-200 °C", desc: "Neptune is the dark, cold, and incredibly windy ice giant lying at the very edge of the solar system. It experiences supersonic winds that are the fastest in the Solar System. Despite its incredible distance from the sun, making it bitterly cold, it has an unusually active climate with large dark storm patches across its deep blue atmosphere." },
    id: { name: "Neptunus", type: "Raksasa Es", distance: "4.5 miliar km", mass: "1.024 × 10^26 kg", moons: "14", temp: "-200 °C", desc: "Neptunus merupakan planet kedelapan yang sangat gelap, dingin, dan dikelilingi angin kencang supersonik—angin tercepat di seluruh Tata Surya. Walau berada miliaran kilometer jauhnya, Neptunus beriklim sangat aktif dan sering memiliki bintik badai gelap luar biasa besar yang mengarungi atmosfer biru tuanya." }
  }
};

const labels = {
  id: {
    subtitle: "Peta Edukasi Tata Surya",
    toggle: "Beralih ke Bahasa Inggris",
    type: "Jenis:",
    distance: "Jarak dari Matahari:",
    mass: "Massa:",
    temp: "Suhu Permukaan:",
    moons: "Bulan / Satelit:",
    desc: "Deskripsi",
    hint: "Klik planet untuk mempelajari lebih lanjut!",
    langBtn: "IDN ⟷ ENG",
    menuTitle: "Pilih Planet:",
    aiGreeting: "Inisialisasi RUXX_AI... Apa yang ingin Anda ketahui tentang alam semesta hari ini?",
    aiPlaceholder: "Tanya RUXX_AI..."
  },
  en: {
    subtitle: "Educational Solar System Map",
    toggle: "Switch to Indonesian",
    type: "Type:",
    distance: "Distance from Sun:",
    mass: "Mass:",
    temp: "Surface Temp:",
    moons: "Moons:",
    desc: "Description",
    hint: "Click a planet to learn more!",
    langBtn: "ENG ⟷ IDN",
    menuTitle: "Select Planet:",
    aiGreeting: "Initializing RUXX_AI... How can I assist your space exploration today?",
    aiPlaceholder: "Ask RUXX_AI..."
  }
}

// Sidebar Toggle Logic
function toggleSidebar() {
  const sidebar = document.getElementById('planetMenu');
  sidebar.classList.toggle('hidden');
}

// Generate Stars Background Function
function generateStars(elementId, count, size) {
  const elem = document.getElementById(elementId);
  let boxShadowStr = '';
  // Assuming a max screen width/height of 2500px to cover typical screens
  for(let i = 0; i < count; i++){
    let x = Math.floor(Math.random() * 2500);
    let y = Math.floor(Math.random() * 2500);
    // Give some variance in brightness
    let opacity = Math.random() * 0.8 + 0.2; 
    boxShadowStr += `${x}px ${y}px rgba(255, 255, 255, ${opacity})`;
    if(i !== count - 1) boxShadowStr += ', ';
  }
  elem.style.width = size + 'px';
  elem.style.height = size + 'px';
  elem.style.background = 'transparent';
  elem.style.boxShadow = boxShadowStr;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Generate multiple layers of stars
  generateStars('stars', 800, 1);
  generateStars('stars2', 250, 2);
  generateStars('stars3', 50, 3);

  // Setup Language Toggle
  document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    updateLanguage();
  });
  
  updateLanguage();
});

function updateLanguage() {
  document.getElementById('langToggle').innerText = labels[currentLang].langBtn;
  document.getElementById('subtitle').innerText = labels[currentLang].subtitle;
  document.getElementById('labelType').innerText = labels[currentLang].type;
  document.getElementById('labelDistance').innerText = labels[currentLang].distance;
  document.getElementById('labelMass').innerText = labels[currentLang].mass;
  document.getElementById('labelTemp').innerText = labels[currentLang].temp;
  document.getElementById('labelMoons').innerText = labels[currentLang].moons;
  document.getElementById('labelDesc').innerText = labels[currentLang].desc;
  document.getElementById('hintText').innerText = labels[currentLang].hint;
  document.getElementById('menuTitle').innerText = labels[currentLang].menuTitle;
  document.getElementById('aiInput').placeholder = labels[currentLang].aiPlaceholder;
  
  // Check if first greeting needs translation (only if chat relies on initial greeting)
  const msgs = document.getElementById('aiMessages');
  if(msgs && msgs.children.length === 1 && msgs.children[0].classList.contains('ai-msg')) {
    msgs.children[0].innerText = labels[currentLang].aiGreeting;
  }

  // Update sidebar buttons
  document.getElementById('btn-sun').innerText = planetData['sun'][currentLang].name;
  document.getElementById('btn-mercury').innerText = planetData['mercury'][currentLang].name;
  document.getElementById('btn-venus').innerText = planetData['venus'][currentLang].name;
  document.getElementById('btn-earth').innerText = planetData['earth'][currentLang].name;
  document.getElementById('btn-mars').innerText = planetData['mars'][currentLang].name;
  document.getElementById('btn-jupiter').innerText = planetData['jupiter'][currentLang].name;
  document.getElementById('btn-saturn').innerText = planetData['saturn'][currentLang].name;
  document.getElementById('btn-uranus').innerText = planetData['uranus'][currentLang].name;
  document.getElementById('btn-neptune').innerText = planetData['neptune'][currentLang].name;

  // If a modal is open, update its content too
  const currentOpen = document.body.getAttribute('data-open-planet');
  if(currentOpen) {
    populateModal(currentOpen);
  }
}

function showInfo(planetId) {
  // Pause animations
  document.body.classList.add('info-active');
  document.body.setAttribute('data-open-planet', planetId);
  
  // Populate data
  populateModal(planetId);
  
  // Show Panel
  document.getElementById('infoPanel').classList.add('active');
  
  // Hide Hint
  document.getElementById('hintText').style.display = 'none';
}

function populateModal(planetId) {
  const data = planetData[planetId][currentLang];
  document.getElementById('planetName').innerText = data.name;
  document.getElementById('planetType').innerText = data.type;
  document.getElementById('planetDistance').innerText = data.distance;
  document.getElementById('planetMass').innerText = data.mass;
  document.getElementById('planetTemp').innerText = data.temp;
  document.getElementById('planetMoons').innerText = data.moons;
  document.getElementById('planetDesc').innerText = data.desc;
}

function closeInfo(event, fromButton = false) {
  // Check if click was on overlay (backdrop) or on the close button
  if(fromButton || event.target.id === 'infoPanel') {
    document.body.classList.remove('info-active');
    document.body.removeAttribute('data-open-planet');
    document.getElementById('infoPanel').classList.remove('active');
  }
}

// AI Chat Logic
function toggleAIChat() {
  const panel = document.getElementById('aiChatPanel');
  panel.classList.toggle('active');
  if(panel.classList.contains('active')) {
    document.getElementById('aiInput').focus();
  }
}

function handleAIKeypress(event) {
  if (event.key === 'Enter') {
    sendAIMessage();
  }
}

async function sendAIMessage() {
  const inputEl = document.getElementById('aiInput');
  const text = inputEl.value.trim();
  if (!text) return;
  
  addChatMessage(text, 'user-msg');
  inputEl.value = '';
  
  // Show typing indicator
  const typingId = 'typing-' + Date.now();
  addChatMessage("...", 'ai-msg', typingId);

  // Construct initial prompt logic
  let promptContext = "Sebagai RUXX_AI, asisten sistem navigasi pesawat luar angkasa dengan nada futuristik sci-fi, tolong jawab singkat, informatif: ";
  if(currentLang === 'en') {
    promptContext = "As RUXX_AI, a sci-fi spaceship navigation assistant with a futuristic tone, please answer briefly and engagingly: ";
  }
  const finalPrompt = promptContext + text;

  try {
    const url = "https://api.nexray.web.id/ai/chatgpt?text=" + encodeURIComponent(finalPrompt);
    const response = await fetch(url);
    const data = await response.json();
    
    // Attempt to parse dynamic response format typical of simple apis
    const botReply = data.result || data.data || data.message || "Error processing module. Check connection.";
    
    // Remove typing indicator and add final response
    const typingEl = document.getElementById(typingId);
    if(typingEl) typingEl.remove();
    addChatMessage(botReply, 'ai-msg');
    
  } catch (err) {
    const typingEl = document.getElementById(typingId);
    if(typingEl) typingEl.remove();
    addChatMessage(currentLang === 'id' ? "Gagal terhubung ke pusat server RUXX_AI." : "Failed to connect to RUXX_AI mainframe.", 'ai-msg');
  }
}

function addChatMessage(msg, type, id = null) {
  const container = document.getElementById('aiMessages');
  const div = document.createElement('div');
  div.className = "msg " + type;
  div.innerText = msg;
  if(id) div.id = id;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}
