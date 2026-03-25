import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="footer-title">{title}</h4>

    <ul className="mt-6 space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            to={link.href}
            className="flex items-center gap-2 text-sm hover:text-orange-500 transition"
          >
            <ChevronRight size={14} /> {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
export default FooterColumn;