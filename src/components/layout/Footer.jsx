import { Link } from "react-router-dom";
import { 
  ChevronLeft, MapPin, Phone, Mail, 
  Facebook, Instagram, Youtube 
} from "lucide-react";
import { FOOTER_LINKS, CONTACT_INFO } from "@/data/navLinks";

const Footer = () => {
  return (
    <footer className="bg-[#111111] pt-16 pb-8 text-slate-300 font-sans">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-5 text-left">
  
  <FooterColumn title="Quick Links" links={FOOTER_LINKS.quickLinks} />
  <FooterColumn title="Bike Trips" links={FOOTER_LINKS.bikeTrips} />
  <FooterColumn title="Popular Trips" links={FOOTER_LINKS.popularTrips} />
  <FooterColumn title="Useful Links" links={FOOTER_LINKS.usefulLinks} />

  {/* Contact Info Column */}
  <div className="flex flex-col gap-8">
    <h4 className="relative text-[22px] font-extrabold text-white mb-4">
      Contact Info
      {/* The orange underline matches the image width */}
      <span className="absolute -bottom-3 left-0 h-[3px] w-12 bg-[#F37021]"></span>
    </h4>
    
    <ul className="space-y-6 text-[15px] text-slate-300">
      <li className="flex gap-4 items-start">
        <MapPin className="text-[#F37021] shrink-0 mt-1" size={20} fill="#F37021" fillOpacity="0.2" />
        <span className="leading-relaxed">{CONTACT_INFO.address}</span>
      </li>
      
      {CONTACT_INFO.phones.map((phone, idx) => (
        <li key={idx} className="flex gap-4 items-center">
          <Phone className="text-[#F37021] shrink-0" size={20} fill="#F37021" fillOpacity="0.2" />
          <span className="font-medium tracking-wide">{phone}</span>
        </li>
      ))}
      
      <li className="flex gap-4 items-center">
        <Mail className="text-[#F37021] shrink-0" size={20} fill="#F37021" fillOpacity="0.2" />
        <span className="truncate font-medium">{CONTACT_INFO.email}</span>
      </li>
    </ul>
  </div>
</div>

        {/* Social & Copyright */}
        <div className="mt-16 border-t border-slate-800/50 pt-10">
  <div className="flex flex-col items-center justify-center gap-5">
    
    {/* Centered Social Icons */}
    <div className="flex items-center justify-center gap-5">
      <SocialIcon Icon={Facebook} href="#" />
      <SocialIcon Icon={Instagram} href="#" />
      <SocialIcon Icon={Youtube} href="#" />
    </div>

    {/* Centered Copyright Text */}
    <p className="text-[13px] text-slate-400 tracking-normal font-medium opacity-90">
      © 2026 Rocky Holiday Trips. All Rights Reserved.
    </p>
    
  </div>
</div>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/yournumber" 
        target="_blank" 
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] p-3 text-white shadow-lg hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </footer>
  );
};

/* Sub-components for cleaner code */
const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col gap-6">
    <h4 className="relative text-xl font-bold text-white mb-2">
      {title}
      <span className="absolute -bottom-2 left-0 h-[2px] w-10 bg-orange-600"></span>
    </h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <Link to={link.href} className="flex items-center gap-1 text-sm transition-colors hover:text-orange-500">
            <ChevronLeft size={16} className="text-orange-600" /> {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ Icon, href }) => (
  <a 
    href={href} 
    className="rounded-full bg-white p-2 text-black hover:bg-orange-600 hover:text-white transition-colors"
  >
    <Icon size={24} />
  </a>
);

export default Footer;