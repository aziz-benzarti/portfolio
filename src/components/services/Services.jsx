import { useRef } from "react";
import "./services.scss"
import { motion, useInView } from "framer-motion"; // Correct import
const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
       opacity:1,
       y:0,
        transition: {
            duration: 1,
            staggerChildren:0.1,
        },

    },
};
const Services = () => {


const ref = useRef()
const isInView= useInView(ref,{margin:"-100px"});

    return (
        <motion.div className="services" variants={variants} 
        initial="initial" 
        whileInView="animate"
        ref={ref}
        animate={isInView && "animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on enhancing my skills and leveraging
                    <br /> technology to drive impactful solutions
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{color:"orange"}}>Creative</motion.b>Solutions </h1>
                </div>

                <div className="title">
                    <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b>growth </h1>
                    <button>About Me</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box"whileHover={{background:"lightgray",color :"black"}}>
                    <h2>Actuarial Science</h2>
                    <p>
                    I have a solid understanding of life and non-life insurance, risk theory, and financial risks. I’m familiar with Solvency II, reserving, premium calculation, and reinsurance. I’ve explored stochastic modeling, Chen-Laden risk measures, and Monte Carlo simulations for risk management.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box"whileHover={{background:"lightgray",color :"black"}}><h2>Finance </h2>
                    <p>        I’m learning about financial risk management, advanced financial analysis, and project management. I also have a good understanding of asset valuation, management accounting, and I’m getting familiar with IFRS standards.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box"whileHover={{background:"lightgray",color :"black"}}><h2>Development</h2>
                    <p>        I have experience in web development using HTML, CSS, JavaScript, and frameworks like Angular, React.js, PHP, Symfony, Laravel, Node.js, Django, and Spring Boot. I'm also familiar with programming languages like Java, JavaFX, Qt, Python, C# and C/C++. </p>
                    
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray",color :"black"}}><h2>Tools and Technologies  </h2>
                    <p>
                    I’m comfortable working with tools like R Studio, PowerShell, Linux, Ubuntu, Adobe Premiere Pro, and Adobe Illustrator, as well as the Microsoft Office suite. I have experience with databases like MongoDB, MySQL, SQL Oracle, and I’m exploring Big Data technologies.</p>
                    <button>Go</button>
                </motion.div>

            </motion.div>

        </motion.div>
    )
}

export default Services