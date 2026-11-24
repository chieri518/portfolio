import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import { styles } from "../styles";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-primary py-6 border-t border-secondary/40">
      <div
        className={`${styles.container} flex flex-col sm:flex-row items-center justify-between gap-4 text-sm`}
      >
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="text-primary font-semibold hover:text-secondary transition-colors"
        >
          © {new Date().getFullYear()} Chieri Abe
        </Link>

        <SocialLinks size="w-6 h-6" />
      </div>
    </footer>
  );
};

export default Footer;
