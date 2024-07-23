import Footer from 'src/layouts/main/footer';
import Header from 'src/layouts/main/header';
import ElearningCourseDetailsTeachersInfo from 'src/sections/_elearning/details/elearning-course-details-teachers-info';
import MarketingTestimonial from 'src/sections/_marketing/testimonial/marketing-testimonial';
import { _testimonials } from 'src/_mock';
import MarketingLandingFreeSEO from 'src/sections/_marketing/landing/marketing-landing-free-seo';
import EcommerceLandingCategories from 'src/sections/_ecommerce/landing/ecommerce-landing-categories';
import Hero from './Hero';


export default function HomeView() {
  const teach = [
    {
        id: "1",
        avatarUrl: "https://cdn-icons-png.flaticon.com/128/8414/8414307.png",
        name: "Web Development",
        role: "Bring your online vision to life with our skilled and experienced web developers who can craft eye-catching, user-friendly, and responsive websites that drive results.",
        ratingNumber1: "LEARN MORE",
    },
    {
        id: "1",
        avatarUrl: "https://cdn-icons-png.flaticon.com/128/4368/4368389.png",
        name: "Software Development",
        role: "Enhance your online presence and streamline operations of your organization with our custom software solutions. We deliver innovative and efficient software products and solutions, from concept to implementation.",
        ratingNumber2: "LEARN MORE",
    },
    {
        id: "3",
        avatarUrl: "https://cdn-icons-png.flaticon.com/128/5266/5266248.png",
        name: "DevOps & Cloud",
        role: "Increase your efficiency and innovation with our seamless DevOps practices. We integrate development and operations in your organization for a faster software delivery pipeline.",
        ratingNumber3: "LEARN MORE",
    },
    {
        id: "4",
        avatarUrl: "https://cdn-icons-png.flaticon.com/128/7075/7075369.png",
        name: "Mobile App Development",
        role: "Transform your ideas into dynamic mobile experiences. Our mobile app development expertise fosters creativity and user interaction, putting your brand in the palm of your users' hands.",
        ratingNumber4: "LEARN MORE",
    },
    {
        id: "5",
        avatarUrl: "https://cdn-icons-png.flaticon.com/128/7440/7440452.png",
        name: "Digital Transformation",
        role: "Lead your company into the digital age with our comprehensive digital transformation services. We guide you on a journey of creativity, efficiency, and growth, from strategy to execution.",
        ratingNumber5: "LEARN MORE",
    },
    {
        id: "6",
        avatarUrl: "https://cdn-icons-png.flaticon.com/128/3875/3875810.png",
        name: "Product Engineering",
        role: "We design and engineer groundbreaking solutions and software products that transform digital industries and empower businesses to thrive in the growing digital age.",
        ratingNumber6: "LEARN MORE",
    },
    {
        id: "7",
        avatarUrl: "https://cdn-icons-png.flaticon.com/128/11229/11229238.png",
        name: "Blockchain Development",
        role: "We are a leading blockchain development company, pioneering solutions for the future. Our expertise unlocks new possibilities for decentralized applications, promoting efficiency, security, and transparency across various sectors.",
        ratingNumber7: "LEARN MORE",
    },
    {
        id: "8",
        avatarUrl: "https://cdn-icons-png.flaticon.com/128/8448/8448908.png",
        name: "UI & UX Design",
        role: "Create unforgettable user experiences with our award-winning UI/UX design services. We combine creativity and usability to craft interfaces that engage and delight users across all digital platforms.",
        ratingNumber8: "LEARN MORE",
    },
    {
        id: "9",
        avatarUrl: "https://cdn-icons-png.flaticon.com/128/11333/11333198.png",
        name: "Full Stack Development",
        role: "Our full-stack developers deliver exceptional digital solutions, ensuring flawless functionality from the user interface to the back-end. We design and build high-quality web projects that meet all your needs.",
        ratingNumber9: "LEARN MORE",
    },
    {
        id: "10",
        avatarUrl: "https://cdn-icons-png.flaticon.com/128/10492/10492966.png",
        name: "Quality Assurance and Testing",
        role: "Deliver flawless digital experiences with our meticulous software testing and quality assurance services. We ensure peak performance and user satisfaction through thorough testing of every aspect of your software.",
        ratingNumber10: "LEARN MORE",
    },
]
  return (
    <>
      <Header /><br/><br/><br/>


      
      <Hero/>
     <ElearningCourseDetailsTeachersInfo teachers={teach}/> 
      <EcommerceLandingCategories/>
      <MarketingTestimonial testimonials={_testimonials}/>
      <MarketingLandingFreeSEO/> 
      <Footer/>
    </>
  );
}
