/* =====================================================================
   CONTENT FILE: edit everything on the website here.
   ---------------------------------------------------------------------
   - Change any text between the quotes "like this".
   - Keep the commas, quotes and brackets in place. If the page goes
     blank after an edit, a comma or quote is usually missing.
   - Image paths are relative to this folder, e.g. "images/bajaj/03.jpg".
   - Leave a link as "" (empty) to hide it from the site.
   - See EDITING-GUIDE.md for step-by-step help.
   ===================================================================== */

window.SITE = {

  /* ---------- About you / general ---------- */
  name: "Daniel Ray Philip",
  wordmark: "drd.",
  role: "Industrial Designer & Design Strategist",
  eyebrow: "Industrial Design",                 // small lime text above "Portfolio"
  heroTitle: "Portfolio",
  positioning: "Industrial Designer & Design Strategist. Taking products from research to manufacture.",
  location: "Based in London, UK. Graduate visa with full right to work in the UK.",

  /* ---------- Contact links ---------- */
  email: "danielrayphilip@gmail.com",
  instagram: { label: "@danraydesigns", url: "https://instagram.com/danraydesigns" },
  // TODO: paste your LinkedIn profile URL between the quotes, e.g. "https://www.linkedin.com/in/your-name/"
  //       While it is empty, the LinkedIn link is hidden.
  linkedin: { label: "Daniel Philip", url: "" },
  // TODO: put your CV PDF in the "files" folder and write its path here, e.g. "files/Daniel-Ray-Philip-CV.pdf"
  //       While it is empty, the "Download CV" button is hidden.
  cv: "",

  /* ---------- Home page ---------- */
  aboutTeaser: "Industrial Designer with over four years of professional experience across corporate and consultancy environments, with an MA in Design Strategy & Innovation from Brunel University London.",
  otherWork: { image: "images/other/other-work.jpg", alt: "Other work by Daniel Ray Philip" },

  /* ---------- Projects ----------
     The order here is the order on the site (home grid, numbering and "Next project").
     id    = the web address of the page: project.html?p=ID (letters, numbers, dashes only)
     cover = the image used on the home page card
     slides: each slide is { image, title, caption }. title and caption are optional. */
  projects: [
    {
      id: "pepsodent-5-star",
      title: "Pepsodent 5 Star",
      subtitle: "Ergonomic Toothbrush For Pepsodent Unilever",
      description: "Creating a premium-feeling toothbrush for Southeast Asia demanded high usability, strong visual appeal, and lower material usage without increasing cost. Unilever needed a product that stood out, performed better, and scaled efficiently across mass markets.",
      outcome: "Now on shelves in Indonesia in 5 colours.",
      badge: "",
      client: "Unilever",
      year: "2024-2025",
      designers: ["Daniel Ray Philip", "Vikrant Mishra", "Adil Lokhandwala", "Yash Gupta"],
      tags: ["Mid-level Designer", "Ideation", "Concept development", "CAD development", "Renders", "Design for Manufacture"],
      cover: "images/pepsodent/04.jpg",
      slides: [
        { image: "images/pepsodent/01.jpg" },
        { image: "images/pepsodent/02.jpg", title: "Concept & Strategy", caption: "Cost-efficient, lightweight toothbrush that enhances comfort, control, and accessibility for daily users." },
        { image: "images/pepsodent/03.jpg", title: "Engineering & Prototyping", caption: "Focused on refining structure, material efficiency, and balanced weight for reliable performance." },
        { image: "images/pepsodent/04.jpg", title: "The Pepsodent 5 Star Toothbrush", caption: "Exudes confidence and determination, reflecting the story of those who face life head-on." },
        { image: "images/pepsodent/05.jpg", title: "Ergonomic Contours", caption: "Crafted with a bold silhouette and gentle contours, 5 Star is made to feel like it was made for you." },
        { image: "images/pepsodent/06.jpg", title: "Constant Companion", caption: "The personalised fit and three angled neck cradle your hand like a gentle wave, guiding you through your daily oral care ritual with ease, precision and comfort." },
        { image: "images/pepsodent/07.jpg", caption: "As the day winds down, 5 Star transforms into a gentle companion, inviting you to slow down and indulge in moments of self-care." },
        { image: "images/pepsodent/08.jpg", title: "Now on Shelves", caption: "Marvel 5 Star now available in the Indonesian market in 5 different colours." },
        { image: "images/pepsodent/09.jpg", title: "Slowing Down Is The Greatest Luxury." }
      ]
    },
    {
      id: "bajaj-radical",
      title: "Bajaj Radical",
      subtitle: "Range of Consumer Products for Bajaj",
      description: "Developed for Bajaj Electronics, this range of consumer products explored the theme of radical design by rethinking conventional forms and user interactions. The project focused on creating distinctive, market-forward products that addressed key usability challenges while introducing fresh aesthetics, improved functionality, and stronger user experiences across the product range.",
      outcome: "",
      badge: "",
      client: "SODA",
      year: "2023-2024",
      designers: ["Daniel Ray Philip", "Kshitij Rajput", "Ken Gershom"],
      tags: ["Mid-level Designer", "Ideation", "Concept development", "CAD development", "Renders", "Design for Manufacture"],
      cover: "images/bajaj/04.jpg",
      slides: [
        { image: "images/bajaj/01.jpg" },
        { image: "images/bajaj/02.jpg", title: "Mixer Grinders", caption: "A fresh take on the mixer grinder, combining a bold new aesthetic with solutions for spillage, reduced noise, and enhanced user protection." },
        { image: "images/bajaj/03.jpg", title: "Bajaj Qubo", caption: "Designed to minimise noise and prevent spillage, while offering intuitive, easy-to-use controls for a seamless experience." },
        { image: "images/bajaj/04.jpg" },
        { image: "images/bajaj/05.jpg", title: "Bajaj Robu", caption: "Designed for improved balance and leak prevention, with intuitive controls and integrated safety for a more secure user experience." },
        { image: "images/bajaj/06.jpg" },
        { image: "images/bajaj/07.jpg", title: "Radical Cooling", caption: "A fresh reinterpretation of the desert coolers, combining a distinctive design with optimised airflow, reduced noise, and enhanced heat dissipation." },
        { image: "images/bajaj/08.jpg", title: "Bajaj Airflow", caption: "A portable inspired design that enhances stability and delivers powerful, low-noise cooling with a wide, evenly distributed airflow." },
        { image: "images/bajaj/09.jpg" },
        { image: "images/bajaj/10.jpg", title: "Bajaj Razer", caption: "A contemporary approach to cooling that enhances airflow distribution, simplifies controls, and improves portability through a clean, modern design." },
        { image: "images/bajaj/11.jpg" }
      ]
    },
    {
      id: "boat-audio",
      title: "Boat Audio",
      subtitle: "Collection of TWS earbuds for Boat",
      description: "A collection of TWS earbuds designed to blend ergonomic comfort, innovative form, and rapid prototyping into modern consumer electronics.",
      outcome: "",
      badge: "",
      client: "Boat",
      year: "2023",
      designers: ["Daniel Ray Philip", "Ken Gershom"],
      tags: ["Mid-level Designer", "Ideation", "Concept development", "CAD development", "Renders", "Design for Manufacture"],
      cover: "images/boat/05.jpg",
      slides: [
        { image: "images/boat/01.jpg" },
        { image: "images/boat/02.jpg", title: "Shaping the Experience", caption: "Exploring the relationship between the case and earbuds to refine ergonomics, intuitive handling, and the experience of storing and retrieving the buds." },
        { image: "images/boat/03.jpg", title: "Neo", caption: "An open-form case designed for effortless pocketability and quick access, keeping the earbuds protected while making everyday use more intuitive." },
        { image: "images/boat/04.jpg", title: "Finding the Right Fit", caption: "Testing different proportions to balance pocketability, comfort, accessibility, and effortless earbud removal." },
        { image: "images/boat/05.jpg" },
        { image: "images/boat/06.jpg", title: "Rock Your Boat", caption: "A playful case designed to rock back and forth, turning the everyday earbud case into a tactile fidget experience." },
        { image: "images/boat/07.jpg", title: "Concept to Production", caption: "A detailed technical package, defining components, dimensions, materials, and manufacturing requirements for production." },
        { image: "images/boat/08.jpg", title: "Listen, interact, and play." }
      ]
    },
    {
      id: "sleep-mask",
      title: "Sleep Mask",
      subtitle: "Eye mask for Geniyes",
      description: "An innovative sleep mask designed to block light and sound while promoting healthier breathing for deeper rest and recovery.",
      outcome: "Kickstarter-funded product.",
      badge: "Kickstarter",
      client: "WishNew",
      year: "2025",
      designers: ["Daniel Ray Philip", "Vikrant Mishra", "Adil Lokhandwala", "Neeraj Prabhu"],
      tags: ["Mid-level Designer", "Ideation", "Concept development", "CAD development", "Renders", "Design for Manufacture"],
      cover: "images/sleep-mask/07.jpg",
      slides: [
        { image: "images/sleep-mask/01.jpg" },
        { image: "images/sleep-mask/02.jpg", title: "Exploring Rest", caption: "Exploring how light, sound, and breath can work together to create a deeper, more restorative sleep experience." },
        { image: "images/sleep-mask/03.jpg", title: "Deeper Sleep", caption: "An enhanced sleep mask combining noise-isolation dampeners, a chin strap, and a nose strip to enable quieter, deeper, more restorative sleep." },
        { image: "images/sleep-mask/04.jpg", title: "Prototype Testing", caption: "The first prototypes were produced for testing, enabling the evaluation of fit, comfort, and core functionality before refinement." },
        { image: "images/sleep-mask/05.jpg", title: "Design Refinement", caption: "Insights from testing drove a series of refinements, optimising form, fit, and functionality to shape the final product." },
        { image: "images/sleep-mask/06.jpg", title: "Component Breakdown", caption: "Highlighting the key components and design decisions that work together to deliver comfort, functionality, and performance." },
        { image: "images/sleep-mask/07.jpg", title: "Designed for Sleepmaxing." }
      ]
    }
  ],

  /* ---------- About page ---------- */
  about: {
    photo: "images/about/profile.jpg",
    yearsOfExperience: "4+",
    bio: "Industrial Designer with over four years of professional experience across corporate and consultancy environments, holding a Bachelor's degree in Product Design and an MA in Design Strategy & Innovation from Brunel University London. I bring a strong balance of creative problem-solving, practical design execution, and clear communication, translating design ideas into compelling, market-ready propositions.",
    experience: [
      {
        role: "Mid-level Industrial Designer", org: "Analogy Design, Bangalore", dates: "Apr 2022 - Aug 2025",
        text: "Consumer electronics, home appliances and soft goods for corporates, startups and founders, including Unilever, Mondelez Cadbury and Bajaj Electronics.",
        bullets: [
          "Kickstarter funding for the Sleepmaxxer Mask",
          "Marvel Unilever toothbrush (end-to-end, research to market)",
          "IF Design Award and NY Product Design Awards for IDIYA (visuals and renders)",
          "Contributed to IBDA Best Design Studio in India 2023, 2024, 2025"
        ]
      },
      { role: "Industrial Designer Intern", org: "Butterfly Kitchen Appliances, Chennai", dates: "Aug 2021 - Feb 2022",
        text: "Elektra Wet Grinder (research to market) and a hand blender for the US and European markets." },
      { role: "Industrial Designer Intern", org: "PupilMesh, Bangalore", dates: "Aug 2020 - Jul 2021",
        text: "AR wearables: Armor (visual identity and visualisation of AR glasses) and Navisor (audio-visual navigation and safety system for helmets)." },
      { role: "Design Intern", org: "Foley Designs, Bangalore", dates: "Jun - Aug 2017", text: "" }
    ],
    education: [
      { title: "MA Design Strategy and Innovation", detail: "Brunel University London · 2026" },
      { title: "BSc Product Design", detail: "Strate School of Design, Bangalore · 2022" }
    ],
    skills: [
      { group: "3D", list: "SolidWorks, Rhino 3D, Fusion 360" },
      { group: "2D", list: "Photoshop, Illustrator, Procreate, Figma" },
      { group: "Visualisation", list: "KeyShot, Premiere Pro" },
      { group: "AI", list: "Vizcom, Midjourney, Sora" }
    ],
    awards: [
      { title: "TVS N-torq Competition", detail: "6th place national award" }
    ],
    clients: ["Unilever", "Pepsodent", "Decathlon", "Cadbury", "Mondelez", "Ultrahuman", "boAt", "TVS", "Butterfly", "Bajaj"]
  }
};
