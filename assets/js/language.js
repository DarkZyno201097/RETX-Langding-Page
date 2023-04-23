let locale

getLocale();

// modal languagle
let buttonLanguage = document.getElementById('buttonLanguage')
let labelLanguage = document.getElementById('labelLanguage')
let chevonLanguage = document.getElementById('chevonLanguage')
let languageVi = document.getElementById('languageVi')
let languageEn = document.getElementById('languageEn')

buttonLanguage.addEventListener('click', () => {
  labelLanguage.classList.toggle('hidden')
  chevonLanguage.classList.toggle('rotate-180')
})

document.querySelector('#buttonLang1').addEventListener('click', () => {
  changeLocale("vi")
  getLocale();
  languageVi.classList.add('active')
  languageEn.classList.remove('active')
  assignDataTeam('vi')
  assignDataPartner('vi')
  assignDataNews('vi')
})

document.querySelector('#buttonLang2').addEventListener('click', () => {
  changeLocale("en")
  getLocale();
  languageEn.classList.add('active')
  languageVi.classList.remove('active')
  assignDataTeam('en')
  assignDataPartner('en')
  assignDataNews('en')
})

//mobile meenu language
let selectLanguage = document.getElementById('selectLanguage')
let mobileRootMenu = document.getElementById('mobileRootMenu')
let mobileSubMenu = document.getElementById('mobileSubMenu')
let btnBackSubMenu = document.getElementById('btnBackSubMenu')
let currentlanguage = document.getElementById('currentLanguage')

selectLanguage.addEventListener('click', () => {
  mobileRootMenu.style.display = 'none'
  mobileSubMenu.style.display = 'flex'
})

btnBackSubMenu.addEventListener('click', () => {
  mobileRootMenu.style.display = 'flex'
  mobileSubMenu.style.display = 'none'
})

document.querySelectorAll("input[name='selectLanguage']").forEach((element) => {
  element.addEventListener('change', (e) => {
    changeLocale(e.target.value)
    getLocale()
    mobileRootMenu.style.display = 'flex'
    mobileSubMenu.style.display = 'none'
  })
})

/**
 * Handle
 */

function handleLanguageDisplay() {
  switch (localStorage.getItem('locale')) {
    case "en":
      document.getElementById('languageMobile').innerHTML = locale.header.language.langEn;
      document.querySelector('#buttonLanguage span').innerHTML = locale.header.language.langEn;
      break;
    default:
      document.getElementById('languageMobile').innerHTML = locale.header.language.langVi;
      document.querySelector('#buttonLanguage span').innerHTML = locale.header.language.langVi;
      break;
  }
}

function getLocale() {
  localStorage.getItem('locale') == null ? setLocale('vi') : null

  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      locale = JSON.parse(this.responseText)
      handleLanguageDisplay();
      loadLocaleContent(locale)
    }
  }
  xhttp.open(
    'GET',
    '/assets/locales/' + localStorage.getItem('locale') + '.json',
    true
  )
  xhttp.send()
}

function setLocale(lang) {
  localStorage.setItem('locale', lang)
}

function changeLocale(lang) {
  setLocale(lang)
}

function loadLocaleContent(locale) {
  //header
  document.getElementById('menuEcosystem').innerHTML = locale.header.menu.ecosystem;
  document.getElementById('menuTeam').innerHTML = locale.header.menu.aboutus;
  document.getElementById('menuPartner').innerHTML = locale.header.menu.partner;
  document.getElementById('menuNews').innerHTML = locale.header.menu.news;

  document.getElementById('languageVi').innerHTML = locale.header.language.langVi;
  document.getElementById('languageEn').innerHTML = locale.header.language.langEn;

  document.getElementById('mobileMenuEcosystem').innerHTML = locale.header.menu.ecosystem;
  document.getElementById('mobileMenuTeam').innerHTML = locale.header.menu.aboutus;
  document.getElementById('mobileMenuPartner').innerHTML = locale.header.menu.partner;
  document.getElementById('mobileMenuNews').innerHTML = locale.header.menu.news;

  document.getElementById('languageTitle').innerHTML = locale.header.language.langMobile;
  document.getElementById('mobileMenuTitle').innerHTML = locale.header.language.chooseLang;
  document.getElementById('langVi').innerHTML = locale.header.language.langVi;
  document.getElementById('langEn').innerHTML = locale.header.language.langEn;

  //banner
  document.getElementById('bannerTitle1').innerHTML = locale.banner.title;
  document.getElementById('bannerTitle2').innerHTML = locale.banner.subTitle;

  //history
  document.getElementById('historyTitle').innerHTML = locale.history.title;

  document.getElementById('historyContent1').innerHTML = locale.history.content.t1;
  document.getElementById('historyContent2').innerHTML = locale.history.content.t2;
  document.getElementById('historyContent3').innerHTML = locale.history.content.t3;
  document.getElementById('historyContent4').innerHTML = locale.history.content.t4;

  document.getElementById('historyMobileTitle').innerHTML = locale.history.title;

  document.getElementById('historyMobileContent1').innerHTML = locale.history.content.t1;
  document.getElementById('historyMobileContent2').innerHTML = locale.history.content.t2;
  document.getElementById('historyMobileContent3').innerHTML = locale.history.content.t3;
  document.getElementById('historyMobileContent4').innerHTML = locale.history.content.t4;

  //ecosystem
  document.getElementById('ecosystemTitle').innerHTML = locale.ecosystem.title;

  document.getElementById('ecosystemContent1').innerHTML = locale.ecosystem.content.t1;
  document.getElementById('ecosystemContent2').innerHTML = locale.ecosystem.content.t2;
  document.getElementById('ecosystemContent3').innerHTML = locale.ecosystem.content.t3;

  document.getElementById('ecosystemMobileTitle').innerHTML = locale.ecosystem.title;

  //teams
  document.getElementById('teamTitle1').innerHTML = locale.team.title;

  // document.getElementById('memberName1').innerHTML = locale.team.t1;
  // document.getElementById('memberName2').innerHTML = locale.team.t2;
  // document.getElementById('memberName3').innerHTML = locale.team.t3;
  // document.getElementById('memberName4').innerHTML = locale.team.t4;
  // document.getElementById('memberName5').innerHTML = locale.team.t5;
  // document.getElementById('memberName6').innerHTML = locale.team.t6;
  // setTimeout(() => {
  //   document.getElementById('memberMobileName1').innerHTML = locale.team.t1;
  //   document.getElementById('memberMobileName2').innerHTML = locale.team.t2;
  //   document.getElementById('memberMobileName3').innerHTML = locale.team.t3;
  //   document.getElementById('memberMobileName4').innerHTML = locale.team.t4;
  //   document.getElementById('memberMobileName5').innerHTML = locale.team.t5;
  //   document.getElementById('memberMobileName6').innerHTML = locale.team.t6;
  // }, 2000);


  //vision
  document.getElementById('visionTitle').innerHTML = locale.vision.title;

  document.getElementById('vision').innerHTML = locale.vision.vision;
  document.getElementById('visionContent').innerHTML = locale.vision.content.t1;

  document.getElementById('mission').innerHTML = locale.vision.mission;
  document.getElementById('missionContent').innerHTML = locale.vision.content.t2;

  //partner
  document.getElementById('partnerTitle').innerHTML = locale.partner.title;
  document.getElementById('partnerSubTitle').innerHTML = locale.partner.subTitle;

  //news
  document.getElementById('newsTitle').innerHTML = locale.news.title;

  //footer
  document.getElementById('footerMenu1').innerHTML = locale.header.menu.ecosystem;
  document.getElementById('footerMenu2').innerHTML = locale.header.menu.aboutus;
  document.getElementById('footerMenu3').innerHTML = locale.header.menu.partner;
  document.getElementById('footerMenu4').innerHTML = locale.header.menu.news;

  document.getElementById('footerTitle1').innerHTML = locale.footer.title;
  document.getElementById('address').innerHTML = locale.footer.address;
  document.getElementById('phone').innerHTML = locale.footer.phone;

  document.getElementById('footerCoyright').innerHTML = locale.footer.copyright;
  document.getElementById('terms').innerHTML = locale.footer.term;
  document.getElementById('policy').innerHTML = locale.footer.policy;
}
