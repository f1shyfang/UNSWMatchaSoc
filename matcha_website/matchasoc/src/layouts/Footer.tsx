import React from 'react';
import Image from 'next/image';
// Social media icons are now served from public folder

const Footer: React.FC = () => {
  return (
    // bg-[#1B397E], padding py-3 (12px ~ 10px) px-5 (20px)
    <footer className="FooterContainer bg-green-800 py-3 px-5 text-white"> 
      {/* Flex layout, responsive direction, space-between */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="FooterCopyright mb-3 md:mb-0 text-white/50"> 
          © 2025 UNSW Matcha Society. All Rights Reserved.
        </div>
        {/* Social links using flex and space-x instead of margin */}
        {/* space-x-12 approximates the 50px margin */}
        <div className="SocialLinkFoot flex items-center space-x-12"> 
          <a href="https://www.facebook.com/UNSWMatchaSoc" target="_blank" rel="noopener noreferrer"> 
             {/* height: 30px -> h-7 (28px) or h-8 (32px). Let's use h-7. w-auto */}
            <Image src="/images/assets/facebook_icon.svg" alt="Facebook" width={28} height={28} className="transition-opacity duration-200 hover:opacity-75" /> 
          </a>
          <a href="https://www.instagram.com/unswmatchasoc/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/assets/instagram_icon.svg" alt="Instagram" width={28} height={28} className="transition-opacity duration-200 hover:opacity-75" />
          </a>
          <a href="https://www.linkedin.com/company/unsw-matcha-society/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/assets/linkedin_icon.svg" alt="LinkedIn" width={28} height={28} className="transition-opacity duration-200 hover:opacity-75" />
          </a>
          <a href="https://www.arc.unsw.edu.au/get-involved/opportunity?name=UNSW%20Matcha%20Society" target="_blank" rel="noopener noreferrer">
            <Image src="/images/assets/Arc_icon.png" alt="Arc UNSW" width={28} height={28} className="transition-opacity duration-200 hover:opacity-75" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;