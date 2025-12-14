import React from 'react';
import { motion } from 'framer-motion';
import { USER_DATA, SOCIAL_LINKS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 scroll-mt-20">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-12">
          
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
              Let's start<br />a project
            </h2>
             <a 
              href={`mailto:${USER_DATA.email}`} 
              className="inline-flex items-center gap-4 text-xl md:text-2xl hover:opacity-60 transition-opacity border-b border-current pb-1"
            >
              {USER_DATA.email}
              <ArrowUpRight className="w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-col gap-8 lg:text-right">
             <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest opacity-50">Location</span>
                <p className="text-xl font-medium">{USER_DATA.location}</p>
             </div>
             
             <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest opacity-50">Socials</span>
                <div className="flex lg:justify-end gap-6">
                   {SOCIAL_LINKS.map(link => (
                      <a 
                        key={link.platform} 
                        href={link.url}
                        className="text-lg hover:underline underline-offset-4"
                      >
                        {link.label}
                      </a>
                   ))}
                </div>
             </div>
          </div>
        </div>
        
        <div className="mt-32 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex justify-between text-sm uppercase tracking-widest opacity-40">
           <span>© {USER_DATA.copyrightYear} FN.</span>
           <span>All Rights Reserved.</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;