import "./portfolio.scss";
import{motion,useScroll , useSpring, useTransform} from "framer-motion";
import React, { useRef } from "react"; 

const items = [{

id:1,
title :"Internship Project",
img:"https://img.freepik.com/vecteurs-libre/technologie-intelligence-artificielle-robotique-apprentissage-intelligent-partir-bigdata_1150-48136.jpg?t=st=1729165973~exp=1729169573~hmac=7ad4a59cfd9f7e47064810cbd9b4f3449e25ea865d24f9c36f4a49c9b1296719&w=900",
desc:"I developed an AI model in Python using Convolutional Neural Networks (CNN) to automatically detect defective products from production images. By utilizing the U-Net architecture, I was able to segment defective areas effectively and optimize quality control processes. I integrated MongoDB to manage image data efficiently and evaluated the model's performance using metrics such as precision and recall.",


},
{

    id:2,
    title :"Profit Pilot",
    img:"https://img.freepik.com/photos-gratuite/beau-concept-crypto-monnaie_23-2149250205.jpg?t=st=1729166159~exp=1729169759~hmac=510e4f27ab740a5a0e8ddc4705e58a2332eda20817d927dd6ceb2c7d246bdb09&w=900",
    desc:"ProfitPilot is a web application designed to provide an immersive trading room simulator with educational modules for beginners and finance enthusiasts. We aim to deliver a realistic experience where users can simulate real-time transactions and access valuable resources to learn how to manage their portfolios effectively. We’ve integrated AI to identify market trends and incorporated actuarial science to assess risks. For this project, I worked on the backend using FastAPI and crafted the front end with Angular, ensuring a smooth and engaging user experience.",
    
    
    },
    {

        id:3,
        title :"Farmease",
        img:"/portfolio2.png",
        desc:"Farmease is a web application designed to connect farmers with banks, facilitating the management of insurance, loans, claims, and a marketplace. This innovative platform aims to address the specific needs of the agricultural sector by providing an integrated solution that simplifies financial transactions and enhances access to vital services.",
        
        
        },
        {

            id:4,
            title :"Khadamni",
            img:"https://finance-freelance.com/wp-content/uploads/2024/01/recruter-freelance-1.jpg",
            desc:"Khadamni is a freelance platform available on web, desktop, and mobile, designed to connect freelancers with clients across various industries. It also offers freelancers the chance to participate in training sessions led by experienced professionals, promoting skill development and networking opportunities. I developed this project using Java for the backend, Symfony for the framework, and MySQL for database management, ensuring a robust and efficient platform.",
            
            
            },
           
];
const Single = ({item}) => {
    const ref =useRef();
    
    
    const {scrollYProgress}=useScroll({
        target:ref,
      //  offset:["start start","end start"]
    });
   
    const y =useTransform(scrollYProgress,[0,1],[-300,300]);
  
    return(
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                <img src={item.img} alt=""/>
                </div>
                <motion.div className="textContainer" style={{y}}>
            
                    <h2 >{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See demo</button>
                </motion.div>
                </div>

            </div>
            </section>
           
    );
};
const Portfolio = () =>{
    const ref= useRef()


    const{scrollYProgress}= useScroll ({ target:ref , 
        offset:["end end","start start"],
    });

    const scaleX = useSpring (scrollYProgress,{
        stiffness: 100,
        damping :30,
    });
return(
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Work</h1>
            <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item)=>(
            <Single item={item} key={item.id} />

    ))}</div>
);


};

export default Portfolio