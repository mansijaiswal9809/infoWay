import Staffing from "../components/AllServices/Staffing";
import CustomApplication from "../components/AllServices/CustomApplication";
import CyberSecurity from "../components/AllServices/CyberSecurity";
import BigData from "../components/AllServices/BigData";
import DigitalTransformation from "../components/AllServices/DigitalTransformation";
import MobileApp from "../components/AllServices/MobileApp";
import ApplicationTransformation from "../components/AllServices/ApplicationTransformation";
import RoboticProcessAutomation from "../components/AllServices/RoboticProceesAutomation";
import UIUX from "../components/AllServices/UIUX";
import Aerospace from "../components/AllIndustries/Aerospace";
import BFSI from "../components/AllIndustries/BFSI";
import HealthCare from "../components/AllIndustries/Healthcare";
import LifeScience  from "../components/AllIndustries/LifeScience";
import Manufacturing from "../components/AllIndustries/Manufacturing";
import Retail from "../components/AllIndustries/Retail";
import Technology  from "../components/AllIndustries/Technology";
import Telecom from "../components/AllIndustries/Telecom";
import TravelHospitality from "../components/AllIndustries/TravelHospitality";
import QuickFacts from "../components/AllAbout/QuickFacts";
import LeaderShipTeam from "../components/AllAbout/LeaderShipTeam";


export const Data = {
  about: [
    { Page: "about", name: "Leadership Team", url: "leadership",component:<LeaderShipTeam/> },
    { Page: "about", name: "Quick Facts", url: "quick", component:<QuickFacts/>  },
  ],

  services: [
    {
      component: <Staffing />,
      Page: "services",
      name: "Staffing service",
      caption:
        "we help our customers with flexible supply of best technical and professional talents aligning with business requirements",
      url: "/staffing",
      img: "https://img.tukuppt.com/ad_preview/00/18/45/5c99e81dc4147.jpg!/fw/980",
      other: [
        { name: "Contract Staffing", url: "contract" },
        { name: "MSP Staffing", url: "msp" },
        { name: "Direct Hiring", url: "directhiring" },
        { name: "Onsite Recruitment", url: "onsite" },
      ],
    },
    {
      component:<CustomApplication/>,
      Page: "services",
      name: "Custom Application",
      img: "https://media.gettyimages.com/id/1256442767/photo/smiling-young-asian-woman-using-smartphone-on-social-media-network-application-while-having.jpg?s=2048x2048&w=gi&k=20&c=tLIFqhs6Qqcy8aJzR7h3JD_9gxKigJD93uyZLIPzHiI=",
      caption:
        "Our end-to-end services, matched with industry-specific skills and processes, help to make your data simpler to access and understand",
      url: "customapp",
    },
    {
      component:<CyberSecurity/>,
      Page: "services",
      name: "Cyber Security Solution",
      caption:
        "We provide next generation cyber security solutions encompassing a holistic approach",
      img: "https://media.gettyimages.com/id/1204339691/vector/secure-hud.jpg?s=612x612&w=0&k=20&c=Pf4Oz5LOL-FNQpyjVD5S-zuz2DdEvcFHBij7udK8vyw=",
      url: "cyberSecurity",
    },
    {
      component:<UIUX/>,
      Page: "services",
      name: "UI/UI development",
      img: "https://cdn.dribbble.com/users/415096/screenshots/14208596/media/935239f77e5f4ca3264d7643bb45619c.png",
      caption:
        "Our creative UI & UX development team works with you to transform your ideas into meaningful user stories.",
      url: "uiux",
    },
    {
      component:<ApplicationTransformation/>,
      Page: "services",
      name: "Application Transformation",
      img: "https://media.gettyimages.com/id/1083077278/photo/girl-checking-maps-on-virtual-hologram-smart-phone.jpg?s=612x612&w=0&k=20&c=eMC-cv2cWNbYqxt6aHfKSZtURXaAOLUoDw-UTDWUbNo=",
      caption:
        "We help enterprises transform their IT landscape by streamlining the IT processes",
      url: "apptransformation",
    },
    {
      component:<MobileApp/>,
      Page: "services",
      name: "mobile application development",
      img: "https://static.vecteezy.com/system/resources/previews/000/523/194/original/mobile-application-creation-web-development-testing-release-icon-and-user-interface-for-smartphone-3d-concept-vector.jpg",
      caption:
        "We help you to maximize your existing resources and we strive to complement your strengths with our knowledge and commitment.",
      url: "mobileapp",
      other: [
        {
          name: "Android",
          url: "android",
        },
        {
          name: "IOS",
          url: "ios",
        },
      ],
    },
    {
      component:<RoboticProcessAutomation/>,
      Page: "services",
      name: "Robotic Process Automation",
      img: "https://www.cybiant.com/wp-content/uploads/2020/06/3378.jpg",
      caption:
        "We provide RPA solutions together with a unique continuous improvement methodology that simplifies routine and repetitive processes for clients",
      url: "robotic",
    },
    {
      component:<BigData/>,
      Page: "services",
      name: "Big Data",
      img: "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1578710070/1578710068.jpg",
      caption:
        "Our end-to-end services, matched with industry-specific skills and processes, help to make your data simpler to access and understand",
      url: "bigdata",
    },
    {
      component:<DigitalTransformation/>,
      Page: "services",
      name: "Digital Transformation",
      img: "https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1623055116/itpro/2021/06/Digital_Transformation_shutterstock_1814154806.jpg",
      caption:
        "We provide a road map and formalized transformation plan to make strategic upgrades to core systems and processes. ",
      url: "digital",
    },
  ],

  industries: [
    {
      Page: "industries",
      name: "BFSI",
      url: "bfsi",
      component:<BFSI/>
    },
    {
      Page: "industries",
      name: "Healthcare",
      url: "health",
      component:<HealthCare/>
    },
    {
      Page: "industries",
      name: "Technology",
      url: "technology",
      component:<Technology/>
    },
    {
      Page: "industries",
      name: "Aerospace and defence",
      url: "aerospace",
      component:<Aerospace/>
    },
    {
      Page: "industries",
      name: "Life Science",
      url: "lifescience",
      component:<LifeScience/>
    },
    {
      Page: "industries",
      name: "Manufacturing",
      url: "manufacturing",
      component:<Manufacturing/>
    },
    {
      Page: "industries",
      name: "Telecom",
      url: "telecom",
      component:<Telecom/>
    },
    {
      Page: "industries",
      name: "Retail",
      url: "retail",
      component:<Retail/>
    },
    {
      Page: "industries",
      name: "Travel & Hospitality",
      url: "travel",
      component:<TravelHospitality/>
    },
  ],
};
