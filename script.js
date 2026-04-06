document.addEventListener('DOMContentLoaded', () => {
    // --- State ---
    let currentLang = 'id';

    // --- DOM Elements ---
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const btnId = document.getElementById('btn-id');
    const btnEn = document.getElementById('btn-en');
    const planetsWrapper = document.querySelector('.planets-wrapper');
    const sunElement = document.getElementById('sun-element');
    
    // Modal Elements
    const modal = document.getElementById('info-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalVisual = document.getElementById('modal-visual');
    const modalTitle = document.getElementById('modal-title');
    const modalType = document.getElementById('modal-type');
    const modalDesc = document.getElementById('modal-desc');
    const modalDistance = document.getElementById('modal-distance');
    const modalRadius = document.getElementById('modal-radius');
    const modalMass = document.getElementById('modal-mass');
    const modalGravity = document.getElementById('modal-gravity');
    const modalMoons = document.getElementById('modal-moons');
    const modalFact = document.getElementById('modal-fact');

    // --- 1. Splash Screen Logic ---
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
        mainContent.classList.remove('hidden');
        
        // Remove splash from DOM after fade out
        setTimeout(() => {
            splashScreen.remove();
        }, 1500);
    }, 4000); // 4 seconds loading

    // --- 2. Generate Planets & Sun ---
    function renderPlanets() {
        planetsWrapper.innerHTML = '';
        solarSystemData.planets.forEach(planet => {
            const el = document.createElement('div');
            el.className = 'planet-item';
            el.dataset.id = planet.id;
            
            const sphere = document.createElement('div');
            sphere.className = `planet-sphere ${planet.cssClass}`;
            
            const label = document.createElement('span');
            label.className = 'planet-label';
            label.textContent = currentLang === 'id' ? planet.id_name : planet.en_name;
            
            el.appendChild(sphere);
            el.appendChild(label);
            
            el.addEventListener('click', () => openModal(planet));
            
            planetsWrapper.appendChild(el);
        });
    }

    // Attach click for Sun
    sunElement.addEventListener('click', () => {
        openModal(solarSystemData.sun);
    });

    // --- 3. Modal Logic ---
    function openModal(dataObj) {
        // Reset Visual
        modalVisual.className = 'modal-planet-visual planet-sphere';
        modalVisual.classList.add(dataObj.cssClass); // works for .sun or .p-mars
        
        // Remove sphere class if it's the sun so the styles stack correctly
        if(dataObj.id === 'sun') {
            modalVisual.className = 'modal-planet-visual sun';
            modalVisual.style.width = '100px';
            modalVisual.style.height = '100px';
        } else {
            modalVisual.style.width = '80px';
            modalVisual.style.height = '80px';
        }
        
        // Set Data
        updateModalContent(dataObj);
        
        // Show Modal
        modal.classList.remove('hidden');
        
        // Save current open entity on modal instance for translation toggle
        modal.dataset.currentEntity = dataObj.id;
    }

    function closeModal() {
        modal.classList.add('hidden');
    }

    function updateModalContent(data) {
        modalTitle.textContent = currentLang === 'id' ? data.id_name : data.en_name;
        modalType.textContent = currentLang === 'id' ? data.id_type : data.en_type;
        modalDesc.textContent = currentLang === 'id' ? data.id_desc : data.en_desc;
        modalDistance.textContent = currentLang === 'id' ? data.id_distance : data.en_distance;
        modalRadius.textContent = currentLang === 'id' ? data.id_radius : data.en_radius;
        modalMass.textContent = currentLang === 'id' ? data.id_mass : data.en_mass;
        modalGravity.textContent = currentLang === 'id' ? data.id_gravity : data.en_gravity;
        modalMoons.textContent = currentLang === 'id' ? data.id_moons : data.en_moons;
        modalFact.textContent = currentLang === 'id' ? data.id_fact : data.en_fact;
    }

    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // --- 4. Translation Logic ---
    function setLanguage(lang) {
        currentLang = lang;
        
        // Update Buttons
        if (lang === 'id') {
            btnId.classList.add('active');
            btnEn.classList.remove('active');
        } else {
            btnEn.classList.add('active');
            btnId.classList.remove('active');
        }

        // Update static text via data-i18n
        const i18nElements = document.querySelectorAll('[data-i18n]');
        i18nElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (solarSystemData.translations[lang][key]) {
                el.textContent = solarSystemData.translations[lang][key];
            }
        });

        // Update planets (labels)
        renderPlanets();

        // Update modal if open
        if (!modal.classList.contains('hidden')) {
            const currentEntityId = modal.dataset.currentEntity;
            let entity = solarSystemData.planets.find(p => p.id === currentEntityId);
            if (!entity && currentEntityId === 'sun') {
                entity = solarSystemData.sun;
            }
            if (entity) {
                updateModalContent(entity);
            }
        }
    }

    btnId.addEventListener('click', () => setLanguage('id'));
    btnEn.addEventListener('click', () => setLanguage('en'));

    // Initialize
    renderPlanets();
    setLanguage('id'); // Default Language
});
