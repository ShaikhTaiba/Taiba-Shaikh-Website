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
                    <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain " />
                    <div>
                      <p className="grid-headtext">Hi, I'm Taiba Shaikh</p>
                      <p className="grid-subtext">AI/ML Engineer and Data Science graduate from Mumbai, India — GPA 9.15/10. I specialise in building AI systems for public health, e-governance, and education. I developed a Malaysia Government Services Chatbot that uses NLP to improve citizen access to public services, and I am applying to MTCP 2026 to deepen my expertise in digital governance and bring Malaysia's best practices back to India's public sector.</p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">AI for Governance & Development</p>
                        <p className="grid-subtext">
                        Specialised in Python, NLP, LangChain, and transformer-based models for public sector applications. Experienced in deploying AI on AWS, GCP, and Azure. Focused on building solutions that serve citizens, support government decision-making, and advance development goals in South and Southeast Asia.</p>

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
                            Committed to India–Malaysia development cooperation
                        </p>
                        <p className="grid-subtext">
                            Based in Mumbai, India. Applying to MTCP 2026 to study digital governance and AI-for-development in Malaysia. Post-programme, I am committed to returning to India and contributing to national e-governance initiatives and bilateral tech cooperation.
                        </p>
                        <a href="https://drive.google.com/file/d/1-6o4A446iHlsMe1Uzg5l0-HswFP3B1Bx/view?usp=sharing">
                        <Button name="View Resume" isBeam={true} containerClass="w-full mt-10" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">My mission: AI in service of people</p>
                        <p className="grid-subtext">I believe the most meaningful application of AI is not in commercial products — it is in public services that reach the people who need them most. From improving diagnostic access in under-resourced hospitals to streamlining government information for everyday citizens, I build AI tools with development outcomes at their core. My goal through the Malaysia Technical Cooperation Programme is to study how Malaysia's MyDigital Blueprint has successfully integrated AI into governance — and to bring those learnings back to strengthen India's digital public infrastructure.</p>

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
                        <a href="#contact">
                        <Button name="Contact Me" isBeam={true} containerClass="w-full mt-10" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;