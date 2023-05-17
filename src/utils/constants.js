import FirstNewsImg from "../assets/news/newsFirst.png";
import SecondNewsImg from "../assets/news/newsSecond.png";
import ThirdNewsImg from "../assets/news/newsThird.png";
import InstagramIcon from "../assets/icons/instagram.png";
import LinkedinIcon from "../assets/icons/linkedin.png";
import TwitterIcon from "../assets/icons/twitter.png";
import FacebookIcon from "../assets/icons/facebook.png";
import TouchIcon from "../assets/icons/touch.png";
import PhoneIcon from "../assets/icons/phone.png";
import MessageIcon from "../assets/icons/message.png";
import LocationIcon from "../assets/icons/locationIcon.png";
import Glob from "../assets/digital/globus.png";
import Chart from "../assets/digital/chart.png";
import Mark from "../assets/digital/marker.png";
import Amy from "../assets/about/Amy.png";
import Choua from "../assets/about/Choua.png";
import Hristina from "../assets/about/Hristina.png";
import James from "../assets/about/James.png";
import Maddy from "../assets/about/Maddy.png";
import Reychael from "../assets/about/Reychael.png";
import Ruby from "../assets/about/Ruby.png";
import Shivani from "../assets/about/Shivani.png";
import Build from "../assets/venture/build.png";
import Discovery from "../assets/venture/discovery.png";
import Dive from "../assets/venture/dive.png";
import Market from "../assets/venture/market.png";
import Support from "../assets/venture/support.png";
import Team from "../assets/venture/team.png";
import Design from "../assets/services/Design.png";
import Details from "../assets/services/Details.png";
import iMacSettings from "../assets/services/iMac Settings.png";
import MedicalMobileApp from "../assets/services/Medical Mobile App.png";
import Prototype from "../assets/services/Prototype.png";
import WaypointMap from "../assets/services/Waypoint Map.png";
import Website from "../assets/services/Website.png";
import Strategy from "../assets/services/Strategy.png";
import Commercial from "../assets/services/Commercial.png";
import Internet from "../assets/services/Internet.png";
import Branding from "../assets/services/Branding.png";
import Podium from "../assets/services/Podium.png";
import Share from "../assets/services/Share.png";
import ProjectManagement from "../assets/services/Project Management.png";
import Media from "../assets/services/Media.png";
import EmailMarketing from "../assets/services/Email Marketing.png";
import WebsiteM from "../assets/services/WebsiteM.png";
import FinancialGrowthAnalysis from "../assets/services/Financial Growth Analysis.png";
import Classroom from "../assets/services/Classroom.png";
import HandshakeHeart from "../assets/services/Handshake Heart.png";
import Consultation from "../assets/services/Consultation.png";
import StackofMoney from "../assets/services/Stack of Money.png";
import Hierarchy from "../assets/services/Hierarchy.png";
import BankBuilding from "../assets/services/Bank Building.png";
import Legal from "../assets/services/legal.png";
import Financial from "../assets/services/dollar.png";
import BuildStucture from "../assets/services/build.png";
import Grants from "../assets/services/grant.png";
import Raising from "../assets/services/raising.png";
import Technology from "../assets/services/technology.png";

export const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://icon-library.com/images/white-menu-icon/white-menu-icon-4.jpg",
};
export const navigation = [
  { name: "Digital", href: "/digital", current: false },
  { name: "Ventures", href: "/ventures", current: false },
  { name: "Marketing", href: "/marketing", current: false },
];
export const dromdown = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "News", href: "#" },
  { name: "Contacts", href: "/contact" },
];

export const steps = [
  { id: "Step 1", name: "Job details", href: "#", status: "upcoming" },
  { id: "Step 2", name: "Application form", href: "#", status: "current" },
  { id: "Step 3", name: "Preview", href: "#", status: "upcoming" },
];

export const defaultMetaData = {
  title: "Ninety",
};

export const news = [
  {
    title: "How to improve Web Design Process",
    img: FirstNewsImg,
    link: "https://medium.com/@meagan_23249/what-web3-tech-startups-needs-to-do-in-order-to-successfully-raise-capital-4dbef035187c",
    description:
      "Once your visitors land on your site (likely through the blog or home page), you need to guide them to places on your website that will help nurture them to conversion. ",
  },
  {
    title: "How to improve Web Design Process",
    img: SecondNewsImg,
    link: "https://medium.com/@meagan_23249/why-startups-fail-and-how-to-avoid-it-66fd7b8c03b4",
    description:
      "Once your visitors land on your site (likely through the blog or home page), you need to guide them to places on your website that will help nurture them to conversion. ",
  },
  {
    title: "How to improve Web Design Process",
    img: ThirdNewsImg,
    link: "https://medium.com/@meagan_23249/why-customer-experience-cx3-is-so-important-for-web3-projects-b6fbf098b934",
    description:
      "Once your visitors land on your site (likely through the blog or home page), you need to guide them to places on your website that will help nurture them to conversion. ",
  },
];
export const footerLinks = [
  {
    title: "Company",
    link: "#",
    categories: [
      { title: "Home", link: "/" },
      { title: "About us", link: "/about" },
      { title: "News", link: "#" },
    ],
  },
  {
    title: "Services",
    categories: [
      { title: "Digital", link: "/digital" },
      { title: "Ventures", link: "/ventures" },
      { title: "Marketing", link: "/marketing" },
    ],
  },
  {
    title: "Contacts",
    link: "#",
    categories: [
      { title: "Get In Touch", icon: TouchIcon, link: "#" },
      { title: "+ 61 414 209 977", icon: PhoneIcon, link: "#" },
      { title: "hello@ninety3.io", icon: MessageIcon, link: "#" },
    ],
  },
  {
    title: "Offices",
    link: "#",
    categories: [
      { title: "Melbourne, Australia", icon: LocationIcon, link: "#" },
      { title: "Sydney, Australia", icon: LocationIcon, link: "#" },
    ],
  },
];
export const socialLinks = [
  { image: InstagramIcon, link: "https://www.instagram.com/ninety3_io/" },
  {
    image: LinkedinIcon,
    link: "https://www.linkedin.com/company/ninety3io/",
  },
  { image: TwitterIcon, link: "https://twitter.com/Ninety3io" },
  {
    image: FacebookIcon,
    link: "https://www.facebook.com/ninety3.io",
  },
];

export const challengesData = [
  {
    img: Glob,
    title: "Research and Discovery",
    desc: "We take a deep dive into your business, industry and customers to fully grasp the problems you are trying to solve. We research, talk to users, analyze data, challenge assumptions, and run experiments to make sure we are on the right path. Our priority is to learn as much as we can, as fast as we can, and move on to the next phase with clarity.",
  },
  {
    img: Mark,
    title: "Design",
    desc: "Once we have nailed the product strategy, it's time to start on the design and build. Using the insights we've identified, our cross-functional team works collaboratively to create and build the product of your dreams. Our product creation process focuses on building products for scale while improving and evolving the product every step of the way. ",
  },
  {
    img: Chart,
    title: "Continuous Improvement ",
    desc: "We act with humility and are driven by data and insights. With feedback from users, we iterate and improve your product. Our highly agile team quickly identifies what’s working and what’s not, and hone in on the features that elevate the true value of your product. ",
  },
];

export const aboutData = [
  {
    img: Choua,
    title: "Choua Lee",
    desc: "Chief Technology Officer",
  },
  {
    img: Amy,
    title: "Amy Voller",
    desc: "Strategy Consultant",
  },
  {
    img: James,
    title: "James Hortsman",
    desc: "General Manager",
  },
  {
    img: Ruby,
    title: "Ruby Wu",
    desc: "Head of Content",
  },
  {
    img: Hristina,
    title: "Hristina Mancheva",
    desc: "Creative Director",
  },
  {
    img: Shivani,
    title: "Shivani Chauhan",
    desc: "UX/UI Designer",
  },
  {
    img: Maddy,
    title: "Maddy Lee",
    desc: "Social Media Assistant",
  },
  {
    img: Reychael,
    title: "Reychael Zabat",
    desc: "Community Manager",
  },
];

export const ventureData = [
  {
    img: Dive,
    title: "Deep Dive",
    desc: "Our product and strategy team will spend time with you to assess the validity and commercial viability of your idea.",
  },
  {
    img: Discovery,
    title: "Discovery",
    desc: "The product discovery process is when your business idea and our expertise come together to shape what your maximum viable product might look like.",
  },
  {
    img: Build,
    title: "Product Design and Build",
    desc: "Once we agree on the go-to-market strategy, we will get busy creating the first version of your product. Our goal is to hone in on your core hypothesis to get to market as quickly as possible.",
  },
  {
    img: Market,
    title: "Product Market Fit",
    desc: "Our focus here is to refine and articulate the product market fit. We test your value proposition and ensure that your target audience's needs are solved.",
  },
  {
    img: Team,
    title: "Advisory Team",
    desc: "At all times during the process, you have us as an extension of your team. From general business, legal, and financial advice through to making introductions to our strategic partners, VC’s and investors, we are here as your sounding board and to make strategic connections that add value to your business.",
  },
  {
    img: Support,
    title: "Ongoing Support",
    desc: "Our typical engagement milestone is around 12-18 months. From this point, we help you become self-sufficient by hiring your own internal team. Don’t worry, even when you have completed this milestone, we remain connected with your business, supporting your journey in an ongoing advisory capacity or at board level.",
  },
];

export const digital = [
  {
    img: Strategy,
    title: "Go-to market strategy",
  },
  {
    img: Website,
    title: "Web 2 to web 3 integration",
  },
  {
    img: Design,
    title: "Product design and development",
  },
  {
    img: WaypointMap,
    title: "Business outcome mapping",
  },
  {
    img: iMacSettings,
    title: "iMac Settings",
  },
  {
    img: Details,
    title: "UX/UI design",
  },
  {
    img: Prototype,
    title: "Rapid prototyping",
  },
  {
    img: MedicalMobileApp,
    title: "Mobile app development",
  },
];

export const marketing = [
  {
    img: Commercial,
    title: "Marketing Strategy",
  },
  {
    img: Internet,
    title: "Web3 Marketing",
  },
  {
    img: Branding,
    title: "Branding",
  },
  {
    img: Podium,
    title: "Public Relations",
  },
  {
    img: Share,
    title: "Social Media",
  },
  {
    img: ProjectManagement,
    title: "Community Management",
  },
  {
    img: Media,
    title: "Content Creation",
  },
  {
    img: EmailMarketing,
    title: "Email Marketing",
  },
  {
    img: WebsiteM,
    title: "Website Creation",
  },
];

export const services = [
  {
    img: FinancialGrowthAnalysis,
    title: "Analysis of market fit",
  },
  {
    img: Classroom,
    title: "Product workshops",
  },
  {
    img: HandshakeHeart,
    title: "Strategic partnerships",
  },
  {
    img: Consultation,
    title: "Advisory and consulting",
  },
  {
    img: StackofMoney,
    title: "Capital raise readiness",
  },
  {
    img: Hierarchy,
    title: "Legal and structuring",
  },
  {
    img: BankBuilding,
    title: "Financial analysis",
  },
];

export const partners = [
  {
    img: Legal,
    title: "Legal Services",
  },
  {
    img: Financial,
    title: "Financial Services",
  },
  {
    img: BuildStucture,
    title: "Corporate Structuring",
  },
  {
    img: Grants,
    title: "Grants",
  },
  {
    img: Raising,
    title: "Capital Raising",
  },
  {
    img: Technology,
    title: "Technology Partners",
  },
];

export const info = [
  {
    first:
      "Our digital product studio combines leading technology and cutting-edge design to create products that are stylish, powerful and functional. We believe great products that work and solve real-world problems is key to long-lasting growth and success.",
    second:
      "Whether you have a bold idea and are just starting out, or an already established business, we partner with you to help you build, elevate your strengths, and realise your vision.",
  },
  {
    first:
      "We team up with ambitious founders to transform their startup ideas into major success stories.",
    second: `As a team of entrepreneurs and founders, we understand the unique challenges of starting a business and running a company. That's why we've created a venture studio model that is designed to prepare your business for success, no matter which stage of the business journey you’re in. Over a period of 12-18 months, we will help your business build, launch, and thrive.`,
  },
  {
    first:
      "We know that creating and executing an impactful go-to market marketing strategy is critical to success. Our full-service of marketing team is here to meet all your marketing needs, including designing a winning launch plan that will not only create the right buzz in the market, but also deliver on your business objectives.",
  },
];

export const items = [`NFT’s`, "Metaverse", "Gaming"];

export const secondItem = ["DeFi", "Token generation", "Blockchain"];
