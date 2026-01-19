

import { ArrowUpRight, Github } from 'lucide-react';
import React from 'react'
import { AnimatedBorderButton } from '../components/AnimatedButton';

const Projects = () => {
 
  const projects = [
      {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
    image: "/projects/gocart.png",
    tags: ["Next.js", "Stripe", "Prisma", "Tailwind"],
    link: "https://gocart-phi-five.vercel.app",
    github: "https://github.com/shri-rang/gocart",
  },
  {
    title: "Stock Tracker App",
    description:
      "A modern stock market app built with Next.js, Shadcn, Better Auth, and Inngest! Track real-time prices, set personalized alerts, explore company insights.",
    image: "/projects/signalist.png",
    tags: ["React", "Typescript", "NodeJS", "MongoDB"],
    link: "https://signalist-stock-tracker-git-vercel-r-2b1e06-shri-rangs-projects.vercel.app/sign-in",
    github: "https://github.com/shri-rang/signalist_stock-tracker",
  },
   {
    title: "Woloo Admin Panel",
    description:
      "Worked on the Woloo Admin Panel to manage end-to-end operational setup and analytics.Implemented client setup modules including location, facility, and cluster    management.",
    image: "/projects/wolooadmin.png",
    tags: ["React", "TypeScript", "Next.js",  ],
    link: "https://staging-portal.woloo.in/sign-in",
    github: "",
  },

   {
    title: "MO RISE",
    description:
      "Using this app user is able to invest in Indian stocks, US stocks, Mutual Funds also user can do trading.",
    image: "/projects/rise.jpg",
    tags: ["Flutter", "Dart", "Github", "Git"],
    link: "https://play.google.com/store/apps/details?id=com.mosl.mobile&pcampaignid=web_share",
    github: "#",
  },
  
  {
    title: "Woloo Smart Hygiene",
    description:
      "Woloo smart Hygiene is app for janitor and supervisor. supervisor can assign task to janitor and janitor will get those task.",
    image: "/projects/smart.jpg",
    tags: ["Flutter", "Dart", "Github", "Git"],
    link: "https://play.google.com/store/apps/details?id=com.woloo.smarthygiene&pcampaignid=web_share",
    github: "#",
  },

   {
    title: "Samruddhi - TMart Loyalty App",
    description:
      "Its Loyalty app for recognize and reward the loyalty and trust of its Influencers",
    image: "/projects/samrudhi.png",
    tags: ["Flutter", "Dart", "Github", "Git"],
    link: "https://play.google.com/store/apps/details?id=com.tmart.samruddhi",
    github: "#",
  },
  
];


  return (
    <section id='projects' className='py-32 relative overflow-hidden'> 
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
     <div className='container mx-auto px-6 relative z-10' >
       {/* Section Header */}
       <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-sceondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-sceondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projets Grid */}
                <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

          {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>


     </div>
    </section>
  )
}

export default Projects