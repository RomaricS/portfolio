import sekoia from '@/assets/images/sek1.png';
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';

export const portfolioProjects = [
    {
        company: 'SEKOIA.IO',
        year: '2022',
        title: 'Modern SOC platform',
        results: [
            { title: 'Angular Cypress Playwright' },
            { title: 'Figma Jest Github' },
            { title: 'Joint.js Chart.js' },
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
            { title: 'Figma Jest Github' },
            { title: 'Scrum' },
        ],
        link: 'https://www.convelio.com/fr/accueil/',
        image: lightSaasLandingPage,
    },
    {
        company: 'Capgemini',
        year: '2018',
        title: 'Energy provider client site',
        results: [
            { title: 'Angular JAVA Selenium' },
            { title: 'Adobe Experience Manager' },
            { title: 'SAFe & Scrum' },
        ],
        link: 'https://particulier.edf.fr/fr/accueil.html',
        image: aiStartupLandingPage,
    },
];