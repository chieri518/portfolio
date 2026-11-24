// ── Spacing rules ─────────────────────────────────────────────────────────
// Every page follows these, so edges and gaps match from page to page:
//  1. Side edge: 24px on phones, 64px from `sm` up, inside a 1280px max width.
//     The navbar, page content and footer all share it (`container`).
//  2. Page top/bottom: 40px on phones, 64px from `sm` up (`paddingY`).
//  3. Between sections: 64px on phones, 96px from `sm` up. Each section pads
//     32px / 48px above and below (`sectionY`), so neighbours add up to that.
// Pages either sit in the standard box (SectionWrapper, or `padding` +
// max-w-7xl), or are full-bleed (SectionWrapper with { fullBleed: true })
// with each band using `container` so its content keeps the same edge.
// Nothing inside a page adds its own side padding on top of these.
const styles = {
  paddingX: "px-6 sm:px-16",
  paddingY: "py-10 sm:py-16",
  // Opening section of a full-bleed page: page top (rule 2), section bottom (rule 3).
  introY: "pt-10 sm:pt-16 pb-8 sm:pb-12",
  padding: "px-6 sm:px-16 py-10 sm:py-16",
  // Exception: the home hero sits closer to the navbar so the first screen
  // is balanced (rule 2 otherwise).
  heroPadding: "px-6 sm:px-16 pt-6 sm:pt-10 pb-8 sm:pb-12",
  // Home-page sections stacked under the hero use the section rhythm (rule 3).
  stackedPadding: "px-6 sm:px-16 py-8 sm:py-12",
  container: "max-w-7xl mx-auto px-6 sm:px-16",
  // A narrower, centred reading column with the same phone edge.
  containerNarrow: "max-w-4xl mx-auto px-6 sm:px-16",

  // Landing hero (home page only)
  heroHeadText:
    "font-black text-gray-900 lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-secondary font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  // Page header — kicker (eyebrow) + big page title at the top of every page
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  sectionHeadText:
    "text-gray-900 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",

  // In-page section heading (H2 inside a page)
  subHeadText: "text-3xl md:text-4xl font-bold text-gray-900",

  // Card / list-item title (H3)
  cardTitle: "text-xl md:text-2xl font-bold text-gray-900",

  // Body copy / paragraphs
  bodyText:
    "text-secondary text-[16px] md:text-[17px] leading-[28px] md:leading-[30px]",

  // Vertical rhythm between sections of a long page
  sectionY: "py-8 sm:py-12",
};

export { styles };
