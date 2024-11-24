import { useState } from 'react'
import Globe from 'react-globe.gl';
import Button from '../components/Button';

const About = () => {

  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('taibashaikh025@gmail.com');
    setHasCopied(true);
    setTimeout (() => {
        setHasCopied(false);
    }, 2000);
  }
  return (
    <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="xl:row-span-3 col-span-1">
                <div className="grid-container">
                    <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain " />
                    <div>
                      <p className="grid-headtext">Hi, I'm Taiba Shaikh</p>
                      <p className="grid-subtext">Passionate data scientist and full-stack developer with expertise in AI/ML, creative web design, and data analytics. Combining tech leadership and innovative problem-solving to deliver impactful solutions and immersive experiences</p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">
                        Proficient in Python, JavaScript, C, C++, and R, with expertise in data structures, algorithms, full-stack development, and database management. Skilled in AI/ML frameworks, data analytics, cloud platforms (AWS, Google Cloud), and tools like Git, Docker, and Kafka for efficient development and deployment.</p>

                    </div>
                </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className='grid-container'>
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe 
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                    </div>
                    <div>
                        <p className="grid-headtext">
                            I'm very flexible with time zone communications & locations
                        </p>
                        <p className="grid-subtext">
                            I'm based in Maharashtra, India and open to remote work worldwide.
                        </p>
                        <a href="#contact">
                        <Button name="Contact Me" isBeam={true} containerClass="w-full mt-10" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">My Passion for Coding</p>
                        <p className="grid-subtext">Programming isn't just my profession - it's my passion. i love to code and I am always looking for new ways to improve my skills. I am constantly learning new technologies, languages, and techniques to stay ahead of the curve. I am a firm believer in the power of technology to change the world and I am excited to be a part of that change.</p>

                    </div>
                </div>
            </div>
            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                    <div className="space-y-2">
                        <p className="grid-subtext text-center">Contact me</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" className="w-6 h-6" />
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">Copy Email</p>
                            
                        </div>
                        <a href="https://drive.google.com/file/d/1-6o4A446iHlsMe1Uzg5l0-HswFP3B1Bx/view?usp=sharing">
                        <Button name="View Resume" isBeam={true} containerClass="w-full mt-10" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;