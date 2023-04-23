let dataTeam = []
let dataPartner = []
let dataNews = []


const lang = localStorage.getItem('locale')
const dataTeamUI = document.getElementById('dataTeam')
const dataTeamSplideUI = document.getElementById('dataTeamSplideUI')
const dataPartnerUI = document.getElementById('dataPartner')
const dataPartnerSplideUI = document.getElementById('dataPartnerSplideUI')
const dataNewsUI = document.getElementById('dataNews')
const endpoint = document.location.hostname == 'metadap.io' ? 'https://gateway.metadap.io' : 'https://dev.gateway.metadap.io'

async function loadDataTeam() {
    let res = await fetch(`${endpoint}/metadap/api/v1/team`)
    dataTeam = await res.json()
    dataTeam?.reverse()
    assignDataTeam(lang)
}

async function loadDataPartner() {
    let res = await fetch(`${endpoint}/metadap/api/v1/partner`)
    dataPartner = await res.json()
    dataPartner?.reverse()
    assignDataPartner(lang)
}

async function loadDataNews() {
    let res = await fetch(`${endpoint}/metadap/api/v1/news`)
    dataNews = await res.json()
    assignDataNews(lang)
}


function assignDataTeam(language) {
    dataTeamUI.innerHTML = ''
    dataTeamSplideUI.innerHTML = ''
    dataTeam.forEach(item => {
        dataTeamUI.innerHTML += `
            <div
                class="flex flex-col items-center max-w-[144px] lg:max-w-[193px] z-[2]">
                <img
                    src="${item.avatarURL}"
                    class="w-[120px] h-[120px] lg:w-[176px] lg:h-[176px] rounded-full"
                    alt="" />
                <span
                    class="body-16-bold lg:body-18-bold text-grey-800 text-center w-full mt-4 lg:mt-6"
                    >${item.fullname[language]}</span
                >
                <span
                    class="body-12-regular lg:body-14-medium text-black opacity-[0.85] text-center w-full mt-1 lg:mt-3"
                    >${item.position[language]}</span
                >
            </div>
        `
        dataTeamSplideUI.innerHTML += `
            <li class="splide__slide">
                <div
                    class="flex flex-col items-center max-w-[144px] lg:max-w-[193px] z-[2]">
                    <img
                        src="${item.avatarURL}"
                        class="w-[120px] h-[120px] lg:w-[176px] lg:h-[176px] rounded-full "
                        alt="" />
                    <span
                        class="body-16-bold lg:body-18-bold text-grey-800 text-center w-full mt-4 lg:mt-6" id="memberMobileName2"
                        >${item.fullname[language]}</span
                    >
                    <span
                        class="body-12-regular lg:body-14-medium text-black opacity-[0.85] text-center w-full mt-1 lg:mt-3"
                        >${item.position[language]}</span
                    >
                </div>
            </li>
        `
    })

    let teamSplide = new Splide('#teamSplide', {
        type: 'loop',
        drag: 'free',
        arrows: false,
        perPage: 4,
        breakpoints: {
            525: {
                perPage: 2,
            },
        },
        autoplay: true,
        interval: 1500,
    });
    teamSplide.mount();
}

function assignDataPartner(language) {
    dataPartnerUI.innerHTML = ''
    dataPartner.forEach(item => {
        dataPartnerUI.innerHTML += `
            <img
                src="${item.imageURL}"
                class="max-w-[240px] max-h-[134px]"
                alt="" 
                style="border-radius:20px"
            />
        `
    })

    dataPartnerSplideUI.innerHTML = ''
    for (let i = 0; i <= dataPartner.length; i = i + 2) {
        if (dataPartner[i]?.imageURL)
        dataPartnerSplideUI.innerHTML += `
            <li class="splide__slide">
                <div class="flex flex-col gap-4">
                    <img src="${dataPartner[i]?.imageURL}" class="" alt="" style="border-radius:20px"/>
                    <img src="${dataPartner[i + 1]?.imageURL}" class="" alt="" style="border-radius:20px"/>
                </div>
            </li>
        `
    }
    let partnerSplide = new Splide('#partnerSplide', {
        type: 'loop',
        drag: 'free',
        arrows: false,
        perPage: 2,
        autoplay: true,
        interval: 1500,
    });
    partnerSplide.mount();
}

function assignDataNews(language) {
    dataNewsUI.innerHTML = ''
    dataNews.forEach(item => {
        dataNewsUI.innerHTML += `
            <li class="splide__slide">
                <div
                    class="max-w-[258px] lg:max-w-[527px] p-5 lg:p-6 rounded-3xl bg-white z-[2]">
                    <div class="flex flex-col">
                        <img
                            src="${item?.imageURL}"
                            class="rounded-lg"
                            alt="" />
                        <a
                            href="${item?.link}"
                            class="body-14-bold lg:heading-h4 text-black mt-4 lg:mt-8 clip-2-line"
                            target="_blank"
                            >${item?.name[language]}</a
                        >
                        <span
                            class="body-12-medium lg:body-16-medium text-grey-5 mt-1 lg:mt-2"
                            >${new Date(item?.time).toLocaleDateString()}</span
                        >
                    </div>
                </div>
            </li>
        `
    })

    let newSplide = new Splide( '#newSplide', {
        type   : 'loop',
        drag   : 'free',
        arrows: false,
        focus: 'center',
        perPage: 3,
        breakpoints: {
            525: {
                perPage: 1.5,
            },
      },
        autoplay: true,
        interval: 2100,
    } );
    newSplide.mount();
   
}


loadDataTeam()
loadDataPartner()
loadDataNews()