import { Menu, X } from "lucide-react"
import Button from "../components/Button"

import { useEffect, useState } from "react"

const navLinks = [
   {href:'#about', lable: "About" },
   {href:'#projects', lable: "Projects" },
    {href:'#experience', lable: "Experience" },
    //  {href:'#te', lable: "About" }
]

const Navbar = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
     const [isScrolled, setIsScrolled] = useState(false);


     useEffect( ()=>{

      const   handleScroll = ()=>{
          // if(window.scrollY > 50 ){
             setIsScrolled(window.scrollY > 50)
          //  }

      } 
       
      window.addEventListener("scroll", handleScroll)

      return ()=> window.removeEventListener("scroll", handleScroll)

     }, [] )

   
  return (
    <header className={`fixed top-0 left-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3"  :"bg-transparent  py-5"}   right-0 z-50`} >
        <nav className="container mx-auto px-6 flex items-center justify-between" >
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary " >
              SH<span className="text-primary">.</span>
            </a>

            {/* Nav */}
            <div className="hidden md:flex items-center gap-1 "  >
            <div className=" flex gap-1 glass px-2 py-1 rounded-full"  >
             {navLinks.map( (link, index)=>( <a key={index} href={link.href} 
             className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full  hover:bg-surface " >{link.lable}</a>) )}  
            </div>  
            </div>
            {/* CTA Button */}
            <div className="hidden md:block"  >
                <Button size="sm" >Contact Me</Button>
            </div>
               {/* Mobile Menu Button */}
           <button  onClick={ ()=> setIsMobileMenuOpen( (prev)=>  !prev )} className="md:hidden p-2 text-foreground " >
                { isMobileMenuOpen ? <X   size={24} />  : <Menu size={24} /> }
                

           </button>
       
        </nav>
             {
              isMobileMenuOpen && (<div className="md:hidden glass-strong animate-fade-in" >
               <div className="container mx-auto px-6 py-6 flex flex-col gap-4 " >
            {navLinks.map( (link, index)=>( <a key={index} href={link.href} 
                className="text-lg text-muted-foreground hove:text-foreground py-2" >{link.lable}</a>) )}  
                     <Button >Contact Me</Button>
               </div>
             
            </div>)
             }
        

    </header>
  )
}

export default Navbar

