import sekoia from '@/assets/images/sek1.png';
import convelio from '@/assets/images/convelio.png';
import edf from '@/assets/images/edf.png';
import ReactIcon from '@/assets/icons/react.svg';
import AngularIcon from '@/assets/icons/angular.svg';
import CloudIcon from '@/assets/icons/cloud.svg';

export const portfolioProjects = [
    {
        company: 'SEKOIA.IO',
        year: '2022',
        title: 'Modern SOC platform',
        results: [
            { title: 'Angular Jest Playwright' },
            { title: 'Figma Storybook Github' },
            { title: 'Joint.js Chart.js d3.Js' },
        ],
        link: 'https://www.sekoia.io/fr',
        image: sekoia,
    },
    {
        company: 'Convelio',
        year: '2021',
        title: 'All in one solution for Art transportation',
        results: [
            { title: 'Angular Karma' },
            { title: 'Figma Jasmin Github' },
            { title: 'Scrum - Teamwork' },
        ],
        link: 'https://www.convelio.com/fr/accueil/',
        image: convelio,
    },
    {
        company: 'Capgemini',
        year: '2018',
        title: 'France\'s #1 energy provider client portal',
        results: [
            { title: 'Angular JAVA Selenium' },
            { title: 'Adobe Experience Manager' },
            { title: 'SAFe & Scrum' },
        ],
        link: 'https://particulier.edf.fr/fr/accueil.html',
        image: edf,
    },
];

export const Goals = [
    {
        name: 'Improve Angular skills',
        position: 'Become an Angular expert',
        text: "I've been working with Angular amost a decade, but I want to take my skills to the next level. My goal is to keep learning and mastering advanced concepts like state management and performance optimization",
        icon: AngularIcon,
    },
    {
        name: 'Elevate my React capabilities to a professional level',
        position: 'Work on enterprise-level projects',
        text: 'I\'ve been working with React for the past few months on small projects, and I genuinely find it engaging. My goal is to become proficient in React and its related technologies, such as Next.js and Redux.',
        icon: ReactIcon,
    },
    {
        name: 'Broaden my impact on the product',
        position: 'Become more than a frontend developer',
        text: "I know I can contribute beyond just frontend development. I want to get involved in backend development, product design, and system architecture, and play a role in shaping the overall direction of the product. To reach these goals, I’m currently learning Python and working to familiarize myself with cloud computing and DevOps practices.",
        icon: CloudIcon,
    }
];