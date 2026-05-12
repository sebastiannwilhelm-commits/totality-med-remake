/**
 * Canonical URLs from the live Totality Medispa site (totalitymed.com),
 * so CTAs match where patients land today.
 */
export const OFFICIAL = {
  booking: "https://portal.mypatientnow.com/practice/1135/home",
  site: "https://www.totalitymed.com/",
  contactPage: "https://www.totalitymed.com/contact-medical-spa-office/",
  contactLocations:
    "https://www.totalitymed.com/contact-medical-spa-office/#locations",
  phoneDisplay: "843-900-6161",
  phoneTel: "tel:843-900-6161",
  email: "info@totalitymed.com",
  mailto: "mailto:info@totalitymed.com",
  instagram: "https://www.instagram.com/totality_medispa/",
  facebook: "https://www.facebook.com/totalitymed/",
  /** Hero / video: “Thought about Totality Medispa - Customized and Comprehensive Skin Care Plans” */
  youtubeConsultVideoId: "gGjl3f4vRO0",
  services: {
    fillers:
      "https://www.totalitymed.com/medical-spa-services/face-treatments/fillers/",
    toxins: "https://www.totalitymed.com/wrinkle-treatment-charleston/",
    lasers:
      "https://www.totalitymed.com/medical-spa-services/face-treatments/co2re-laser/",
    body: "https://www.totalitymed.com/medical-spa-services/body-treatments/",
  },
  locations: {
    danielIsland: "https://maps.app.goo.gl/n2WXqANMH481P3hm7",
    downtown: "https://maps.app.goo.gl/MgiW98bSTmjB2VtX8",
    hiltonHead: "https://maps.app.goo.gl/4auGwaRnb8nZ1Zvd8",
  },
  press: [
    {
      title: "Kathryn Dennis just got new lips",
      subtitle: "See her plumped-up pout",
      href: "https://www.bravotv.com/southern-charm/lookbook/kathryn-dennis-gets-lip-fillers-xeomin-injections",
    },
    {
      title: "Kathryn Dennis transformed her cheeks with fillers",
      subtitle: "See the before and after",
      href: "https://www.bravotv.com/southern-charm/style-living/kathryn-dennis-shares-before-and-after-shots-of-cheek-fillers",
    },
    {
      title: "Kathryn Dennis just gave her eyebrows a full makeover",
      subtitle: "Southern Charm lookbook",
      href: "https://www.bravotv.com/southern-charm/lookbook/kathryn-dennis-gets-eyebrows-microbladed-southern-charm",
    },
  ],
} as const;

export function youtubeWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function youtubeEmbedUrl(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}`;
}
