import { Code2, Lightbulb, Rocket, Users } from "lucide-react";



const About = () => {

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

  return (
    <section id='about' className='py-32 relative overflow-hidden ' >
  <div className='contaier mx-auto px-6 relative z-10' >
    <div className='grid lg:grid-cols-2 gap-16  items-center'>

      {/* left column */}
       

      <div className='space-y-8' >
        <div className='animate-fade-in' >
            <span className='text-sceondary-foreground text-sm font-medium tracking-wider uppercase' >About Me</span>
        </div>
      
     

       <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-sceondary-foreground ' >
        {/* Building the future, */}
        From vision to 
        <span className='font-serif italic font-normal text-white ' > production-ready software.</span>

        </h2>

        <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200 ' >
            <p>
              I’m Shrirang Jangam, a software engineer specializing in React, Next.js, TypeScript, and Flutter. 
              I build scalable, high-performance web and mobile applications with a strong focus 
              on clean architecture, maintainable code, and thoughtful user experiences.
              </p>
              <p>
               I enjoy turning complex problems into simple, elegant solutions.
                Whether it’s crafting responsive interfaces, optimizing performance, or building cross-platform mobile apps with Flutter,
                I focus on delivering products that are reliable, efficient.
              </p>
              <p>
              I’m continuously learning and evolving as a developer, 
              always exploring better ways to build modern digital experiences with precision.
              </p>

        </div>

        {/* <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300' >
          <p> "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."</p>
        </div>      */}
    </div>

     {/* Right Column Hightlight */}
        <div className="grid sm:grid-cols-2 gap-6" >
           {highlights.map((item, idx)=>(
             <div key={idx} className="glass  p-6 rounded-2xl group animate-fade-in"
              style={{
                animationDelay: `${(idx+1)*100}ms`
              }}
             >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4  hover:bg-primary/20 " > <item.icon className="w-6 h-6 text-primary " /> </div>  
              <h3  className="text-lg font-semibold mb-2"  >{item.title}</h3>
              <p className="text-sm text-muted-foreground " >{item.description}</p>
            </div>
           ))}
        </div>
     </div>
  </div>
    </section>
  )
}

export default About