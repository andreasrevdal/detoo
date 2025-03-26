document.addEventListener('DOMContentLoaded', () => {
    const clipContainer = document.querySelector('.clips-grid');
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    const scrollToTopButton = document.querySelector('.scroll-to-top');
//Twitch scripts, skal legge til API men stress nå
    const clips = [
        'TriumphantFurtiveRedpandaAMPEnergy-HE86ktr1E7rTLCh7',
        'ImportantBumblingOpossumPastaThat-wpgwBqUEtIQQizWJ',
        'EagerExuberantHawkOhMyDog-CIDFssUi0bSMFwOy',
        'TameCleanShrimpNerfBlueBlaster-3-wLIWl9Yis9RQSm',
        'CrunchyBusyHerdBloodTrail-jKggdLL2oI6pIO7G',
        'NiceLitigiousVampireStinkyCheese--UvK3H9IjKS9woGt',
        'DoubtfulIronicWoodcockBudStar-TCy08JbJdedWoFfP',
        'PeacefulSilkyBoarFunRun-l53qc5yRSrsMpYv2',
        'BlightedAgileGazelleSeemsGood-Wht015kafimEuGUp',
        'NeighborlyPowerfulGarageEagleEye-Lk36TJ7tmJm23tzT',
        'SassyGeniusAirGuitarNerfRedBlaster-vhjRHbWTtC2HsBoE',
        'BovineBumblingStarlingUnSane-2dr6bhqgcW00yTQN',
        'ResourcefulLaconicPrariedogCmonBruh-pqirM1iKub5ErhOo',
        'StormyAliveSnoodSuperVinlin-4J8hDOlHwsZiJ0dT',
        'ObservantSmokyMosquitoGrammarKing-kXMveI1q5YvKTAne',
        'MiniatureDistinctTruffleCoolStoryBob-T44DtVofoOrGv0ZO',
        'AverageCloudyMelonTBTacoRight-XJqoODoboYSC8ySx',
        'SpoopyDaintyAlbatrossTheThing-GzyohFSLkqCRcWL_',
    ];

    let currentClipIndex = 0;

    function updateClip() {
        clipContainer.innerHTML = `
            <div class="clip-card">
                <div class="embed-container">
                    <iframe
                        src="https://clips.twitch.tv/embed?clip=${clips[currentClipIndex]}&parent=detoo.vortx.no"
                        frameborder="0"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        `;
    }

    prevButton.addEventListener('click', () => {
        currentClipIndex = (currentClipIndex - 1 + clips.length) % clips.length;
        updateClip();
    });

    nextButton.addEventListener('click', () => {
        currentClipIndex = (currentClipIndex + 1) % clips.length;
        updateClip();
    });

    updateClip();

// noen "animasjoner" for å få brukerfølelsen litt bedre
    checkStreamStatus();
    setInterval(checkStreamStatus, 5 * 60 * 1000);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});

