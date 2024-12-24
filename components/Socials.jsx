import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaStackOverflow } from "react-icons/fa"
const SocialsLink = [
    { icon: <FaGithub />, path: "" },
    { icon: <FaLinkedinIn />, path: "" },
    { icon: <FaYoutube />, path: "" },
    { icon: <FaTwitter />, path: "" },
    { icon: <FaStackOverflow />, path: "" },
]
const Socials = ({ containerStyles, iconStyles }) => {

    return <div className={containerStyles}>
        {SocialsLink.map((item, index) => {
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        })}
    </div>
}
export default Socials;
