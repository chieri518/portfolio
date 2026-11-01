import { Link } from "react-router-dom";
import { email as emailIcon, linkedin as linkedinIcon } from "../assets";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-primary py-6 mt-10 border-t border-secondary/40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="text-primary font-semibold hover:text-secondary transition-colors"
        >
          © {new Date().getFullYear()} Chieri Abe
        </Link>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="mailto:chieriabe518@gmail.com"
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <img
              src={emailIcon}
              alt="Email"
              className="w-4 h-4 object-contain"
            />
            <span className="truncate">chieriabe518@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/chieriabe/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-4 h-4 object-contain"
            />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
