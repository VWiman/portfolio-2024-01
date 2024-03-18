import Link from "next/link";
import { HeaderLinks } from "./constants";

const Header = () => {
	return (
		<header className="header">
			<h1>Viktor Wiman</h1>
			<ul className="header-ul">
				{HeaderLinks.map((link) => (
					<li id={link.id} key={link.id}>
						<Link href={link.href} className="header-link">{link.text}</Link>
					</li>
				))}
			</ul>
		</header>
	);
};

export default Header;
