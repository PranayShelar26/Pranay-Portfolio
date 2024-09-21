import project1img from "./project_sampleimg.png";
import ProfileImg from "./Profilepicture.jpg";
import Htmllogo from "./HtmlCssLogo.png";
import JSlogo from "./javascript-logo.png";
import Reactlogo from "./React-Logo.png";
import Bootstraplogo from "./bootstrap-logo.png";
import Tailwindlogo from "./tailwind-logo.png";
import Pythonlogo from "./python-logo.png";
import NewsAilogo from "./NewsAI-logo.png";
import TranslateHublogo from "./Translatehub-logo.png";
import Elearninglogo from './elearninglogo.png'
import { useForm } from "react-hook-form";
import axios from "axios";
import pranayresume from './Pranay_Resume.pdf'
import { delay, easeIn, motion } from "framer-motion"


const Main = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  axios.defaults.withCredentials=true;
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://pranay-portfolio-api.vercel.app/", {
        username: data.username,
        email: data.email,
        message: data.messages,
      });
      console.log("Server Response", response.data);
      alert("Thank you for reaching out! Your message has been sent successfully. I'll get back to you soon.");
      reset();
    } catch (e) {
      console.log(e);
      alert("Error submitting form");
    }
  };

  const skills = [
    { id: 1, imgSrc: Htmllogo, title: "HTML/CSS" },
    { id: 2, imgSrc: JSlogo, title: "JavaScript" },
    { id: 3, imgSrc: Reactlogo, title: "React" },
    { id: 4, imgSrc: Bootstraplogo, title: "BootStrap" },
    { id: 5, imgSrc: Tailwindlogo, title: "TailwindCSS" },
    { id: 6, imgSrc: Pythonlogo, title: "Python" },
  ];

  return (
    <>
      <main className="font-Raleway">
        {/* Home */}
        <div
          id="Home"
          className="h-auto min-h-screen  bg-gradient-to-r from-zinc-950 to-purple-950 flex flex-col lg:flex-row items-center py-5 lg:py-10 px-5 lg:px-[160px]"
        >
          <div className="pt-[40px] lg:pt-[40px] pb-5 lg:pb-0  mx-auto w-full lg:w-1/2 flex flex-col">
            <motion.div
            initial={{y: 50,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:0.5,easeIn}}
            viewport={{once:true}}
            className="block text-[50px] lg:text-[50px] mt-10 lg:mt-0  font-semibold font-Raleway text-white ">
              Hi, I am Pranay
            </motion.div>
            <motion.div
            initial={{y: 50,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:0.8,easeIn}}
            viewport={{once:true}}
            className="block pt-2 text-[50px] leading-none lg:text-[70px] font-bold font-Raleway bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-violet-200">
              Web Developer +
            </motion.div>
            <motion.div
            initial={{y: 50,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:1,easeIn}}
            viewport={{once:true}}
            className="block text-[50px] lg:text-[70px] mt-[-10px] lg:mt-[-20px] font-bold font-Raleway bg-clip-text text-transparent bg-gradient-to-r   from-violet-600 to-violet-200">
              Designer
            </motion.div>
            <motion.div
            initial={{y: 50,opacity:0}}
            whileInView={{y:0,opacity:1}}
            viewport={{once:true}}
            transition={{delay:1.2,easeIn}}
            className="hidden lg:block py-3 font-Raleway text-[18px] lg:w-[90%] text-white">
              I specialize in building responsive, user-friendly interfaces with
              a focus on seamless functionality and efficient performance.<br></br>
              Welcome to my portfolio!Welcome
            </motion.div>
            <div  className="hidden lg:block py-5 text-violet-400  ">
              <ul className="flex flex-row  gap-5">
                <motion.li 
                 initial={{x:-100,opacity:0}}
                 whileInView={{x:0,opacity:1}}
                 transition={{delay:2,easeIn}}
                 viewport={{once:true}}
                 > 
                  <a
                    href="https://www.linkedin.com/in/pranay-shelar-381070284"
                    target="_blank"
                    className="px-4 py-3 border-2 rounded-full border-violet-400 text-2xl transition-all duration-300 ease-in-out hover:bg-violet-400 hover:text-slate-950 fab fa-linkedin"
                  ></a>
                </motion.li>
                <motion.li
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{delay:1.8,easeIn}} 
                viewport={{once:true}}
                >
                  <a
                    href="https://github.com/PranayShelar26"
                    target="_blank"
                    className="px-4 py-3 border-2 rounded-full border-violet-400  text-3xl transition-all duration-300 ease-in-out hover:bg-violet-400 hover:text-slate-950 fab fa-github"
                  ></a>
                </motion.li>
                <motion.li
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{delay:1.6,easeIn}}
                viewport={{once:true}}
                >
                  <a
                    target="_blank"
                    href={pranayresume}
                    download={pranayresume}
                    className="px-4 py-3 border-2 rounded-full border-violet-400 text-2xl transition-all duration-300 ease-in-out hover:bg-violet-400 hover:text-slate-950 fab fa-google-drive"
                  ></a>
                </motion.li>
              </ul>
            </div>
          </div>

          <motion.div
          initial={{y:100,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{delay:2.5,easeIn}}
          viewport={{once:true}}
          id="profileimg" className="flex justify-center items-center my-5 lg:pt-8 lg:mt-[70px] w-full lg:w-1/2">
            <div  className="w-[450px] h-[500px] my-5 lg:mb-0 lg:w-[380px] lg:h-[480px] flex items-center rounded-xl rotate-0 hover:rotate-2 overflow-hidden bg-slate-800 border-4 border-violet-950 transition-all ease-in-out duration-200  hover:border-4 hover:border-violet-400 group">
              <img
                src={ProfileImg}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:"
                alt=""
              />
            </div>
          </motion.div>
          <div className="block lg:hidden">
            <motion.div
            initial={{y:50,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:3,easeIn}}
            viewport={{once:true}}
            className=" mx-auto pt-3  text-[20px] text-white">
              I specialize in building responsive, user-friendly interfaces with
              a focus on seamless functionality and efficient performance.
              Welcome to my portfolio!
            </motion.div>
            <div className=" py-4 text-violet-400  ">
              <ul className="flex flex-row gap-5">
                <motion.li
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{delay:3.6,easeIn}}
                viewport={{once:true}}
                >
                  <a
                    href="https://www.linkedin.com/in/pranay-shelar-381070284"
                    target="_blank"
                    className="px-4 py-3 border-2 rounded-full border-violet-400 text-2xl transition-all duration-300 ease-in-out hover:bg-violet-400 hover:text-slate-950 fab fa-linkedin"
                  ></a>
                </motion.li>
                <motion.li
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{delay:3.6,easeIn}}
                viewport={{once:true}}
                >
                  <a
                    href="https://github.com/PranayShelar26"
                    target="_blank"
                    className="px-4 py-3 border-2 rounded-full border-violet-400 text-2xl transition-all duration-300 ease-in-out hover:bg-violet-400 hover:text-slate-950 fab fa-github"
                  ></a>
                </motion.li>
                <motion.li
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{delay:3.4,easeIn}}
                viewport={{once:true}}
                >
                  <a
                    href=""
                    className="px-4 py-3 border-2 rounded-full border-violet-400  text-3xl transition-all duration-300 ease-in-out hover:bg-violet-400 hover:text-slate-950 fab fa-google-drive"
                  ></a>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div
        
          id="Projects"
          className="min-h-screen bg-[#180326] flex flex-col items-center lg:px-[160px] py-10  "
        >
          <motion.div 
          initial={{y:50,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{delay:0.2,easeIn}}
          viewport={{once:true}}
          className="project-text">
            <h1 className="text-center py-2 mt-5  text-[35px] lg:text-[64px] font-semibold font-Raleway bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-violet-100">
              My Projects
            </h1>
          </motion.div>
          {/* <div className="flex flex-row flex-wrap justify-between gap-5  mt-5 lg:mt-10">
              <div className="lg:w-[800px] lg:h-[500px] relative rounded-3xl ">
                  <div className="lg:w-[800px] lg:h-[500px]  relative overflow-hidden">
                    <img className="w-full h-full object-cover" src={project1img} alt="projectimg" />
                  </div>
                  <div className="absolute inset-0 flex flex-col transition-all duration-200 ease-in-out hover:bg-black   hover:opacity-30">
                    Hellp
                  </div>
              </div>
            
          </div> */}
          <div className="grid lg:grid-flow-row md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 whitespace-break-spaces gap-5 lg:gap-5 lg:p-8">
            <motion.div 
            initial={{y:100,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:0.5,easeIn}}
            viewport={{once:true}}
            >
            <a
              
              href="https://github.com/PranayShelar26/TranslateHub.git"
              target="_blank"
              className="col-span-1 mx-auto w-[90%] md:mx-auto md:w-[80%] lg:w-[500px] bg-purple-950 p-5 rounded-lg transition-all duration-300 ease-in-out relative h-[600px] flex flex-col gap-2 group"
            >
              <div className="rounded-lg transition-all duration-300 flex justify-center ease-in-out relative h-[440px] overflow-hidden">
                <img
                  className="w-full h-full relative object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
                  src={TranslateHublogo}
                  alt=""
                />
              </div>
              <div className="flex flex-row justify-between pt-5 items-center">
                <div className="flex flex-col gap-1">
                  <div className="text-2xl lg:text-3xl font-semibold tracking-wide text-violet-200">
                    TranslateHub
                  </div>
                  <div className="text-xl lg:text-xl font-light pt-1 text-gray-300">
                    A Multi-Language Translation Website.
                  </div>
                </div>
                <div>
                  <span className="material-symbols-outlined text-2xl lg:text-3xl text-gray-300 transition-all duration-200 ease-in-out hover:text-white rotate-0 group-hover:rotate-45">
                    arrow_outward
                  </span>
                </div>
              </div>
            </a>
            </motion.div>

            <motion.div 
            initial={{y:100,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:0.8,easeIn}}
            viewport={{once:true}}
            >
            <a
              id="project-box2"
              href="https://github.com/PranayShelar26/News-AI.git"
              target="_blank"
              className="col-span-1 mx-auto w-[90%] md:mx-auto md:w-[80%] lg:w-[500px] bg-purple-950 p-5 rounded-lg transition-all duration-300 ease-in-out relative h-[600px] flex flex-col gap-2 group"
            >
              <div className="rounded-lg transition-all duration-300 ease-in-out relative h-[440px] overflow-hidden">
                <img
                  className="w-full h-full relative object-fill flex justify-center transition-all duration-300 ease-in-out group-hover:scale-110"
                  src={NewsAilogo}
                  alt=""
                />
              </div>
              <div className="flex flex-row justify-between pt-5 items-center">
                <div className="flex flex-col gap-1">
                  <div className="text-2xl lg:text-3xl font-semibold tracking-wide text-violet-200">
                    News AI
                  </div>
                  <div className="text-xl lg:text-xl font-light pt-1 text-gray-300">
                    A real-time news aggregator website.
                  </div>
                </div>
                <div>
                  <span className="material-symbols-outlined text-2xl lg:text-3xl text-gray-300 transition-all duration-200 ease-in-out hover:text-white rotate-0 group-hover:rotate-45">
                    arrow_outward
                  </span>
                </div>
              </div>
            </a>
            </motion.div>
            
            <motion.div
            initial={{y:50,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:1,easeIn}}
            viewport={{once:true}}
            >
              
            <a
              id="project-box3"
              href="https://github.com/PranayShelar26/Techplement_Assesment.git"
              target="_blank"
              className="col-span-1 mx-auto w-[90%] md:mx-auto md:w-[80%] lg:w-[500px] bg-purple-950 p-5 rounded-lg transition-all duration-300 ease-in-out relative h-[600px] flex flex-col gap-2 group"
            >
              <div className="rounded-lg transition-all duration-300 ease-in-out relative h-[440px] overflow-hidden">
                <img
                  className="w-full h-full relative object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
                  src={Elearninglogo}
                  alt=""
                />
              </div>
              <div className="flex flex-row justify-between pt-5 items-center">
                <div className="flex flex-col gap-1">
                  <div className="text-2xl lg:text-3xl font-semibold tracking-wide text-violet-200">
                    E-Learning
                  </div>
                  <div className="text-xl lg:text-xl font-light pt-1 text-gray-300">
                    An E-learning Website (Front End).
                  </div>
                </div>
                <div>
                  <span className="material-symbols-outlined text-2xl lg:text-3xl text-gray-300 transition-all duration-200 ease-in-out hover:text-white rotate-0 group-hover:rotate-45">
                    arrow_outward
                  </span>
                </div>
              </div>
            </a>
            </motion.div>
          </div>
        </div>

        {/*About me*/}
        <div id="aboutme" className="aboutme bg-[#1d062c] px-5 lg:px-[160px] py-5 lg:py-10">
          <div className="flex flex-col">
            <motion.div
            initial={{y:100,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:0.2,easeIn}}
            viewport={{once:true}}
            className="">
              <h1 className="pt-2 mt-5  text-[44px] lg:text-[64px] font-semibold font-Raleway bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-100">
                About Me
              </h1>
            </motion.div>
            <div className="about-section">
              <div className=" grid lg:grid-cols-4 lg:grid-flow-row gap-5 my-2 lg:my-4">
                <motion.div
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{delay:0.6,easeIn}}
                viewport={{once:true}}
                className="p-5 lg:p-8  rounded-3xl flex justify-center items-center   col-span-1 bg-[#350b52] ">
                  <motion.div
                  initial={{opacity:0}}
                  whileInView={{opacity:1}}
                  transition={{delay:0.8,easeIn}}
                  viewport={{once:true}}
                  className="w-[250px] h-[250px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden">
                    <img
                      className="w-100 h-100 object-cover object-center w-100%"
                      src={ProfileImg}
                    ></img>
                  </motion.div>
                </motion.div>
                <motion.div
                initial={{y:100,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{delay:0.8,easeIn}}
                viewport={{once:true}}
                className="p-5 lg:p-8  rounded-3xl   lg:col-span-3 bg-[#350b52]">
                  <div className="flex flex-col  gap-3">
                    <motion.div
                    initial={{y:50,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{delay:1.2,easeIn}}
                    viewport={{once:true}}
                    className="text-3xl lg:text-4xl font-Raleway font-bold text-gray-300">
                      Welcome! Explore {" "}
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-100">
                        my Story
                      </span>
                    </motion.div>
                    <motion.div
                    initial={{y:50,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{delay:1.4,easeIn}}
                    viewport={{once:true}}
                    className="text-l lg:text-xl font-Raleway py-2 lg:py-4 text-gray-300">
                      I am a recent BCA graduate from Amity University Mumbai
                      with a strong passion for web development. I enjoy
                      creating responsive, user-friendly websites that provide
                      excellent user experiences.
                    </motion.div>
                    <motion.div
                    initial={{y:50,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{delay:1.6,easeIn}}
                    viewport={{once:true}}
                    className="text-l lg:text-xl font-Raleway py-2 lg:py-4 text-gray-300">
                      I have a strong talent for creating front-end designs that
                      are both visually appealing and highly functional,
                      ensuring an intuitive user experience. My designs not only
                      attract users but also keep them engaged with seamless
                      interactions and user-friendly interfaces.
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              <div
                id="experience"
                className="grid lg:grid-cols-4 grid-flow-row gap-5 my-4 "
              >
                <motion.div
                initial={{y:100,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{delay:1.9,easeIn}}
                viewport={{once:true}}
                className="p-5 lg:p-8  rounded-3xl col-span-2 row-span-1  bg-[#350b52]">
                  <motion.div
                  initial={{y:50,opacity:0}}
                  whileInView={{y:0,opacity:1}}
                  transition={{delay:2.1,easeIn}}
                  viewport={{once:true}}
                  
                  className="text-2xl lg:text-3xl font-Raleway font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-100">
                    Experience
                  </motion.div>
                  <div className="flex flex-col font-Raleway pt-2 lg:pt-5 text-gray-300">
                    <motion.div
                    initial={{y:100,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{delay:2.3,easeIn}}
                    viewport={{once:true}}
                    
                    className="text-l lg:text-xl font-semibold  lg:font-medium">
                      Front-End WebDevelopment Intern
                    </motion.div>
                    <div className="flex flex-row justify-between flex-wrap text-gray-400">
                      <motion.div
                      initial={{opacity:0}}
                      whileInView={{opacity:1}}
                      transition={{delay:2.5,easeIn}}
                      viewport={{once:true}}
                      
                      className="text-xl">Techplement</motion.div>
                      <motion.div
                      initial={{opacity:0}}
                      whileInView={{opacity:1}}
                      transition={{delay:2.7,easeIn}}
                      viewport={{once:true}}
                      
                      className="text-xl lg:px-2">Aug 2024 - Sep 2024</motion.div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                initial={{y:50,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{delay:4.2,easeIn}}
                viewport={{once:true}}
                  id="ceritifications"
                  className="p-5 lg:p-8 rounded-3xl col-span-2 row-span-3 bg-[#350b52] "
                >
                  <motion.div
                  initial={{y:50,opacity:0}}
                  whileInView={{y:0,opacity:1}}
                  transition={{delay:4.4,easeIn}}
                  viewport={{once:true}} className="text-2xl lg:text-3xl font-Raleway font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-100">
                    Certifications
                  </motion.div>
                  <div className="text-gray-300">
                    <div className="py-4 lg:py-5">
                      <div className="flex flex-col text-gray-300">
                        <motion.div
                        initial={{y:50,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        transition={{delay:4.6,easeIn}}
                        viewport={{once:true}}
                        className="text-l font-semibold lg:text-xl lg:font-medium">
                          Career Essentials in Software Development
                        </motion.div>
                        <div className="flex flex-row justify-between mt-1 flex-wrap text-gray-400">
                          <motion.div
                          initial={{opacity:0}}
                          whileInView={{opacity:1}}
                          transition={{delay:4.9,easeIn}}
                          viewport={{once:true}}
                          className="text-xl">Linkedin Learning</motion.div>
                          <motion.div
                          initial={{opacity:0}}
                          whileInView={{opacity:1}}
                          transition={{delay:5.1,easeIn}}
                          viewport={{once:true}}
                          className="text-xl lg:px-2">June 2024 </motion.div>
                        </div>
                      </div>
                    </div>
                    <div className=" py-4 lg:py-5">
                      <div className="flex flex-col ">
                        <motion.div
                        initial={{y:50,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        transition={{delay:5.3,easeIn}}
                        viewport={{once:true}}
                        className="text-l font-semibold lg:text-xl lg:font-medium">
                          Front-End Web Development
                        </motion.div>
                        <div className="flex flex-row flex-wrap justify-between mt-1 text-gray-400 ">
                          <motion.div
                          initial={{opacity:0}}
                          whileInView={{opacity:1}}
                          transition={{delay:5.5,easeIn}}
                          viewport={{once:true}}
                          className="text-xl">Udemy</motion.div>
                          <motion.div
                          initial={{opacity:0}}
                          whileInView={{opacity:1}}
                          transition={{delay:5.7,easeIn}}
                          viewport={{once:true}}
                          className="text-xl lg:px-2">January 2024 </motion.div>
                        </div>
                      </div>
                    </div>
                    <div className=" py-4 lg:py-5">
                      <div className="flex flex-col">
                        <motion.div
                        initial={{y:50,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        transition={{delay:6,easeIn}}
                        viewport={{once:true}}
                        className="text-l font-semibold lg:text-xl lg:font-medium">
                          Fullstack Django WebDevelopment
                        </motion.div>
                        <div className="flex flex-row flex-wrap justify-between mt-1 text-gray-400">
                          <motion.div
                          initial={{opacity:0}}
                          whileInView={{opacity:1}}
                          transition={{delay:6.2,easeIn}}
                          viewport={{once:true}}
                          className="text-xl">LearnCodeOnline</motion.div>
                          <motion.div
                          initial={{opacity:0}}
                          whileInView={{opacity:1}}
                          transition={{delay:6.4,easeIn}}
                          viewport={{once:true}}
                          className="text-xl lg:px-2">June 2023 </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                initial={{y:100,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{delay:3,easeIn}}
                viewport={{once:true}}
                
                  id="education"
                  className="p-5 lg:p-8 rounded-3xl col-span-2 row-span-2 bg-[#350b52]"
                >
                  <motion.div
                  initial={{y:100,opacity:0}}
                  whileInView={{y:0,opacity:1}}
                  viewport={{once:true}}
                  transition={{delay:3.2,easeIn}}
                  
                  className="text-2xl lg:text-3xl font-Raleway font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-100">
                    Education
                  </motion.div>
                  <div className="flex flex-col font-Raleway pt-5 text-gray-300">
                    <motion.div
                    initial={{y:100,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    viewport={{once:true}}
                    transition={{delay:3.4,easeIn}}
                    
                    className="text-l lg:text-xl font-semibold lg:font-medium">
                      Bachelor's in Computer Applications(BCA)
                    </motion.div>
                    <div className="flex flex-row  flex-wrap justify-between ">
                      <motion.div
                      initial={{opacity:0}}
                      whileInView={{opacity:1}}
                      viewport={{once:true}}
                      transition={{delay:3.6,easeIn}}
                      
                      className="text-xl text-gray-400">
                        Amity University Mumbai
                      </motion.div>
                      <motion.div
                      initial={{opacity:0}}
                      whileInView={{opacity:1}}
                      viewport={{once:true}}
                      transition={{delay:3.8,easeIn}}
                      
                      className="text-xl text-gray-400 lg:px-2">
                        Sep 2021 -June,2024
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{delay:6.8,easeIn}}
              viewport={{once:true}}
              className="grid lg:grid-cols-4 grid-flow-col  lg:grid-flow-row lg:gap-5 lg:my-4">
                <div className="p-12 rounded-3xl col-span-4  bg-[#350b52]">
                  <motion.div
                  initial={{y:50,opacity:0}}
                  whileInView={{y:0,opacity:1}}
                  transition={{delay:2,easeIn}}
                  viewport={{once:true}}
                  className="text-2xl lg:text-3xl font-Raleway font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-100">
                    Skills
                  </motion.div>
                  <div className="main-skills flex flex-row flex-wrap mt-5 gap-5 justify-center lg:justify-start">
                    {skills.map((item) => (
                      <motion.div
                      initial={{x:50,opacity:0}}
                      whileInView={{x:0,opacity:1}}
                      transition={{delay:7,easeIn}}
                      viewport={{once:true}}
                        key={item.id}
                        className="p-5 lg:p-8 bg-[#5a2981] rounded-3xl"
                      >
                        <div className="w-[100px] h-[100px]">
                          <img
                            className="object-contain"
                            src={item.imgSrc}
                            alt={item.title}
                          />
                        </div>
                        <div className="lg:text-xl font-semibold text-gray-300 text-center mt-2">
                          {item.title}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Contact Me */}
        <div id="Contact" className=" bg-slate-950 py-10 md:px-5 lg:px-[160px]">
          <div className="flex flex-col justify-between ">
            <motion.div
            initial={{y:100,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.5,delay:0.5,easeIn}}
            viewport={{once:true}}
            className="block pt-2 mt-5  text-[44px] lg:text-[64px] font-semibold text-center font-Raleway bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-violet-300 py-2 lg:py-5">
              Contact Me
            </motion.div>

            <div className="flex flex-col-reverse  mt-5 lg:mt-0 md:flex-row lg:flex-row px-5  lg:px-0 md:justify-between  lg:justify-evenly items-start ">
              <motion.div
              initial={{x:-100,opacity:0}}
              whileInView={{x:0,opacity:1}}
              transition={{delay:1,easeIn}}
              viewport={{once:true}}
              className=" bg-gradient-to-r from-[#311147] to-[#43046e] mb-5 lg:mb-0 px-1 mx-auto md:mx-0 lg:mx-0 lg:px-[30px] w-auto md:w-[500px] lg:w-[600px] rounded-xl lg:h-auto py-5">
                <motion.div
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{delay:1.3,easeIn}}
                viewport={{once:true}} className="block text-3xl lg:text-4xl font-semibold font-Raleway bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-100 py-2 lg:pt-6 lg:pb-2 pl-2 mr-20 lg:mx-0">
                  Have any queries ?
                </motion.div>
                <motion.div
                initial={{y:-50,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{delay:1.5,easeIn}}
                viewport={{once:true}}
                className="font-Raleway text-xl lg:text-xl mx-3 lg:mx-0 text-gray-300 lg:pl-2 pb-2 lg:pb-8">
                  Fill the form
                </motion.div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col"
                >
                  {/* Username Input */}
                  <motion.div
                  initial={{y:100,opacity:0}}
                  whileInView={{y:0,opacity:1}}
                  transition={{delay:1.7,easeIn}}
                  viewport={{once:true}}
                  className="mb-2 mx-2 lg:mx-0 lg:mb-[18px]">
                    <input
                      type="text"
                      placeholder="Username"
                      className={`px-2 lg:px-4 py-2 lg:py-4  bg-slate-900 text-white text-lg lg:text-xl w-full rounded-2xl ${
                        errors.username
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-slate-700 focus:border-violet-500 focus:ring-violet-500"
                      } focus:outline-none focus:ring-2`}
                      {...register("username", {
                        required: { value: true, message: "Enter Username" },
                        pattern: {
                          value: /^[A-Za-z\s]+$/,
                          message:
                            "Username should not include numbers or special characters",
                        },
                      })}
                    />
                    {errors.username && (
                      <div className="text-lg lg:text-[20px] font-medium mt-0 px-2 text-red-600">
                        {errors.username.message}
                      </div>
                    )}
                  </motion.div>

                  {/* Email Input */}
                  <motion.div
                  initial={{y:100,opacity:0}}
                  whileInView={{y:0,opacity:1}}
                  transition={{delay:1.9,easeIn}}
                  viewport={{once:true}}
                  className="mb-2 mx-2 lg:mx-0 lg:mb-[18px]">
                    <input
                      type="email"
                      placeholder="Email"
                      className={`px-2 lg:px-4 py-2 lg:py-4 text-lg lg:text-xl w-full rounded-2xl bg-slate-900 border-1 text-slate-200 ${
                        errors.email
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-slate-700 focus:border-violet-500 focus:ring-violet-500"
                      } focus:outline-none focus:ring-2`}
                      {...register("email", {
                        required: { value: true, message: "Enter Email" },
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Enter a valid email!",
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="text-lg lg:text-[20px] font-medium mt-0 px-2 text-red-600">
                        {errors.email.message}
                      </div>
                    )}
                  </motion.div>

                  {/* Message Input */}
                  <motion.div
                  initial={{y:100,opacity:0}}
                  whileInView={{y:0,opacity:1}}
                  transition={{delay:2.1,easeIn}}
                  viewport={{once:true}}
                  className="mb-2 mx-2 lg:mx-0 lg:mb-[18px]">
                    <textarea
                      type="text"
                      rows="6"
                      className={`w-full px-2 lg:px-4 py-2 lg:py-4 text-lg lg:text-xl rounded-2xl bg-slate-900 border-1 text-slate-200 ${
                        errors.messages
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-slate-700 focus:border-violet-500 focus:ring-violet-500"
                      } focus:outline-none focus:ring-2`}
                      placeholder="Message/Queries"
                      {...register("messages", {
                        required: {
                          value: true,
                          message: "Enter your message/query",
                        },
                      })}
                    ></textarea>
                    {errors.messages && (
                      <div className="text-lg lg:text-[20px] font-medium mt-0 px-2 text-red-600">
                        {errors.messages.message}
                      </div>
                    )}
                  </motion.div>

                  {/* Submit Button */}
                  <motion.input
                  initial={{y:100,opacity:0}}
                  whileInView={{y:0,opacity:1}}
                  transition={{delay:2.2,easeIn}}
                  viewport={{once:true}}
                    type="submit"
                    disabled={isSubmitting}
                    value={isSubmitting ? "Submitting.." : "Submit"}
                    className="px-6 py-3 lg:text-xl disabled:bg-violet-900 disabled:text-gray-500 text-white font-semibold font-Raleway tracking-wider mx-auto rounded-3xl cursor-pointer bg-violet-500 lg:mb-[18px]"
                  />
                </form>
              </motion.div>

              <div className="flex flex-col justify-start items-start my-5 lg:my-0 md:mt-[140px] lg:mt-[180px] md:mx-5 lg:mx-[150px] ">
                <div className="flex flex-row justify-center items-center align-middle mb-5 lg:mb-[50px]">
                  <motion.span
                  initial={{x:-100,opacity:0}}
                  whileInView={{x:0,opacity:1}}
                  transition={{delay:2.5,easeIn}}
                  viewport={{once:true}}
                  className="material-symbols-outlined bg-gradient-to-r from-violet-700 to-violet-400 rounded-full text-white font-semibold mr-3 lg:mr-5 text-xl lg:text-2xl py-2 lg:py-3 px-3 lg:px-4  ">
                    call
                  </motion.span>
                  <div className="flex  flex-col text-white font-Raleway">
                    <motion.h1
                    initial={{x:100,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{delay:2.7,easeIn}}
                    viewport={{once:true}}
                    className="text-[20px] lg:text-[20px] lg:mb-1">
                      Phone Number
                    </motion.h1>
                    <motion.div
                    initial={{y:50,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{delay:2.9,easeIn}}
                    viewport={{once:true}}
                    >
                    <p
                    
                    className="text-[22px] font-NotoSans hover:text-violet-400 hover:cursor-pointer transition-all duration-200 ease-in-out lg:text-[24px] ">
                      +91 9082532449
                    </p>
                    </motion.div>
                  </div>
                </div>

                <div className="flex flex-row justify-center  items-center mb-4 align-middle lg:mb-6">
                  <motion.span
                  initial={{x:-100,opacity:0}}
                  whileInView={{x:0,opacity:1}}
                  transition={{delay:3.2,easeIn}}
                  viewport={{once:true}}
                  className="material-symbols-outlined bg-gradient-to-r from-violet-700 to-violet-400 rounded-full text-white font-semibold mr-3 lg:mr-5 text-xl lg:text-2xl py-2 lg:py-3 px-3 lg:px-4   ">
                    mail
                  </motion.span>
                  <div className="flex  flex-col text-white  font-Raleway">
                    <motion.h1
                    initial={{x:100,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{delay:3.4,easeIn}}
                    viewport={{once:true}}
                    className="text-[20px] lg:text-[20px]  lg:mb-1">
                      Email
                    </motion.h1>
                    <motion.div
                    initial={{y:50,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{delay:3.6,easeIn}}
                    viewport={{once:true}}
                    >
                    <a
                      href="https://mail.google.com/mail/u/0/#compose"
                      className="text-[22px]  lg:text-[24px] hover:text-violet-400 hover:cursor-pointer transition-all duration-200 ease-in-out"
                    >
                      shelarpranay2611@gmail.com
                    </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
