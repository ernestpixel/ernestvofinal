export const translations = {
  en: {
    voiceDemos: "Voiceover Demos",
    about: "About",
    contact: "Contact",
    heroRole: "Voiceover Actor",
    demoCommercial: "COMMERCIAL",
    demoVideoGames: "VIDEO GAMES",
    demoAudiobook: "AUDIOBOOK",
    demoCorporate: "CORPORATE",
    demoELearning: "E-LEARNING",
    demoNetworkPromo: "NETWORK PROMO",
    demoEvery: "EVERY",
    demoStory: "STORY",
    demoHasA: "HAS A",
    demoVoice: "VOICE",
    about1: "ABOUT",
    aboutBio1: "Theatre actor, musician, and entrepreneur. I graduated in Acting from the West University of Timișoara, and since 2018 I've been passionately performing on stage, connecting deeply with audiences and fellow artists through authentic moments.",
    aboutBio2: "Beyond acting, I lead a Web Design and Marketing Agency as CEO, where creativity and storytelling remain central to my work. Music also plays a significant role in my life—I sing, play guitar, and regularly perform with my band, thriving on creating moments of harmony and shared energy.",
    aboutBio3: "Voice acting became a natural extension of my journey because I believe every story deserves to be heard, felt, and truly experienced. Giving voice to stories feels like part of what I am meant to do. Above all, I deeply love and believe in people, trusting the inherent goodness within us all.",
    },

  ro: {
    voiceDemos: "Demo Voiceover",
    about: "Despre",
    contact: "Contact",
    heroRole: "Actor Voiceovers",
    demoCommercial: "RECLAMĂ",
    demoVideoGames: "JOCURI VIDEO",
    demoAudiobook: "AUDIOBOOK",
    demoCorporate: "CORPORATE",
    demoELearning: "E-LEARNING",
    demoNetworkPromo: "PROMO TV",
    demoEvery: "ORICE",
    demoStory: "POVESTE",
    demoHasA: "ARE O",
    demoVoice: "VOCE",
    about1: "DESPRE",
    aboutBio1: "Actor de teatru, muzician și antreprenor. Am absolvit Facultatea de Actorie la Universitatea de Vest din Timișoara, iar din 2018 joc cu pasiune pe scenă, conectându-mă profund cu publicul și colegii artiști prin momente autentice.",
    aboutBio2: "Dincolo de actorie, conduc o agenție de Web Design și Marketing, unde creativitatea și arta povestirii ocupă un rol central în activitatea mea. Muzica este, de asemenea, o parte esențială din viața mea—cânt, compun la chitară și concertez constant alături de trupa mea, creând momente pline de armonie și energie comună.",
    aboutBio3: "Voice acting-ul a devenit o extensie firească a parcursului meu artistic, deoarece cred că fiecare poveste merită să fie auzită, simțită și trăită pe deplin. Să dau voce poveștilor simt că este parte din menirea mea. Mai presus de toate, iubesc oamenii și am încredere profundă în bunătatea fiecăruia dintre noi.",
  },
};

export function getTranslation(locale: string, key: string): string {
  return translations[locale as keyof typeof translations]?.[key] || translations["en"][key] || key;
}
