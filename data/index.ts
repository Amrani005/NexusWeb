import { desc } from "framer-motion/client";

export const navItems = [
  {name: "About", link: "#about"},
  {name: "Projects", link: "#project"},
  {name: "Testimonials", link: "#testimonials"},
  {name: "Contact", link: "#contact"},
];


export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: " md:row-span-3 lg:col-span-3 lg:row-span-3 min-h-[60vh] ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    // بطاقة صغيرة فوق على اليمين
    className: "lg:col-span-2 md:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    // تحت البطاقة الصغيرة، تمتد عرضاً في lg
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2 relative",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "  lg:col-span-2 md:col-span-1 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Coffee Shop",
    des: "A high-performance, visually appealing Jamstack website for 'The Daily Grind' boutique coffee shop.",
    img: "/coffee1.png",
    imgList:["/coffee1.png","/coffee3.png","/coffee4.png","/coffee5.png"],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
    videoUrl: '',
    desc:'desc_1',
    industry: 'Restaurants, coffee',
    services: 'UI/UX Design, Frontend Integration, CMS Integration',
    completionDate: 'May 2025',
  },
  {
    id: 2,
    title: "Modern E-commerce",
    des: "A high-performance, headless e-commerce store for 'Athletix' with an app-like feel and instant page loads.",
    img: "/Screenshot 2025-11-14 102454.png",
    imgList:["/Screenshot 2025-11-14 102928.png","/Screenshot 2025-11-14 102801.png","Screenshot 2025-11-14 102749.png","/Screenshot 2025-11-14 102710.png","/Screenshot 2025-11-14 102642.png","/Screenshot 2025-11-14 102602.png","/Screenshot 2025-11-14 102542.png","/Screenshot 2025-11-14 102532.png","/Screenshot 2025-11-14 102454.png"],
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
    desc:'desc_2',
    videoUrl: '',
    industry: 'Retail, E-commerce',
    services: 'UI/UX Design, Frontend Integration, CMS Integration',
    completionDate: 'March 2025',
  },
  {
    id: 3,
    title: "Medical Website",
    des: "A professional, secure, and content-driven website for the 'Silva Law' firm, establishing trust and authority.",
    img: "/medic1.png",
    imgList:["/medic1.png","/medic2.png","/medic3.png","/medic4.png","/medic5.png","/medic6.png","/medic7.png","/medic8.png","/medic9.png","medic10.png","medic11.png",],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
    desc:'desc_3',
    videoUrl: '',
    industry: 'Law',
    services: 'UI/UX Design, Frontend Integration, CMS Integration',
    completionDate: 'August 2025',
  },
  {
    id: 4,
    title: "Hotel website",
    des: "A dynamic, full-stack real estate portal featuring advanced property search, filtering, and map integration.",
    img: "/Hotel1.png",
    imgList: ["/Hotel1.png", "/hotel2.png", "/hotel3.png", "/hotel4.png", "/hotel5.png", "/hotel6.png", "/hotel7.png", "/hotel8.png", "/hotel9.png"],
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    desc:'desc_4',
    videoUrl: '',
    industry: 'Real Estate',
    services: 'UI/UX Design, Frontend Integration, CMS Integration',
    completionDate: 'April 2025',
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with nexus was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Darson driginove",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with nexus was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "mahmoud kossai",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with nexus was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Jeff Darson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with nexus was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with nexus was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
