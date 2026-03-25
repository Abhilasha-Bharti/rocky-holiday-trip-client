import { Link } from "react-router-dom";
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { useSelector } from "react-redux";
import { FOOTER_LINKS, CONTACT_INFO } from "@/data/footerLinks";
import FooterColumn from "./FooterColumn";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  const user = useSelector((state) => state.auth?.user); // Redux ready

  return (
    <footer className="bg-[#0d0d0d] text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          <FooterColumn title="Quick Links" links={FOOTER_LINKS.quickLinks} />
          <FooterColumn title="Bike Trips" links={FOOTER_LINKS.bikeTrips} />
          <FooterColumn title="Popular Trips" links={FOOTER_LINKS.popularTrips} />
          <FooterColumn title="Useful Links" links={FOOTER_LINKS.usefulLinks} />

          {/* CONTACT */}
          <div>
            <h4 className="footer-title">Contact Info</h4>

            <ul className="space-y-4 text-sm mt-6">
              <li className="flex gap-3">
                <MapPin className="text-orange-500" size={18} />
                <span>{CONTACT_INFO.address}</span>
              </li>

              {CONTACT_INFO.phones.map((phone, i) => (
                <li key={i} className="flex gap-3">
                  <Phone className="text-orange-500" size={18} />
                  <span>{phone}</span>
                </li>
              ))}

              <li className="flex gap-3">
                <Mail className="text-orange-500" size={18} />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="mt-16 border-t border-slate-800 pt-10 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">
            Subscribe to Newsletter
          </h3>

          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-slate-900 border border-slate-700 text-white focus:outline-none"
            />
            <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-md text-white font-medium">
              Subscribe
            </button>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="mt-12 flex flex-col items-center gap-5">
          <div className="flex gap-4">
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Youtube} />
          </div>

          <p className="text-sm text-slate-400">
            © 2026 Rocky Holiday Trips. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* WHATSAPP */}
      <a href="https://wa.me/yournumber" target="_blank" 
      className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] p-3 text-white shadow-lg hover:scale-110 transition-transform" > 
      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"> 
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/> 
      </svg> 
      </a>
    </footer>
  );
};

export default Footer;