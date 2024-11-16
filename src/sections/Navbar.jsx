import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transitions-colors">Taiba.</a>
                    <button>
                        <img src={"assets/menu.svg"} alt="toggle" className="w-6 h-6"/>
                    </button>
                </div>

            </div>
        </header>
    
    )
}

export default Navbar;