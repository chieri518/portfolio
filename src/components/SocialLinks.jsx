import { socials } from "../constants";

// Email / GitHub / LinkedIn icons, used in the navbar and footer.
const SocialLinks = ({ size = "w-6 h-6", className = "" }) => (
  <ul className={`list-none flex items-center gap-4 ${className}`}>
    {socials.map((social) => {
      // mailto: links open the mail app; only web links get a new tab.
      const external = social.link.startsWith("http");
      return (
        <li key={social.id}>
          <a
            href={social.link}
            aria-label={social.label}
            title={social.label}
            {...(external && { target: "_blank", rel: "noreferrer" })}
            className={`block ${size} hover:-translate-y-1 transition-transform duration-150`}
          >
            <img
              src={social.icon}
              alt=""
              className="w-full h-full object-contain"
            />
          </a>
        </li>
      );
    })}
  </ul>
);

export default SocialLinks;
