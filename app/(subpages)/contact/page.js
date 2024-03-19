"use client";
import Image from "next/image";
import Link from "next/link";
export default function contact() {
	const links = [
		{ id: "linkedin", href: "https://www.linkedin.com/in/viktor-wiman/", label: "linkedin.com/in/viktor-wiman" },
		{ id: "github", href: "https://github.com/VWiman", label: "github.com/VWiman" },
	];
	return (
		<main className="main">
			<section id="contact" className="contact-section">
				<ul className="contact-list">
					<span className="contact-label">CONTACT</span>
					{links.map((link) => (
						<li key={link.id} className="contact-item group">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="w-4 h-4 group-hover:text-white text-transparent">
								<path
									fillRule="evenodd"
									d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
									clipRule="evenodd"
								/>
							</svg>
							<Link href={link.href}>{link.label}</Link>
						</li>
					))}
				</ul>
				<Image priority={true} alt="An image of a letter" src="/mail.png" className="screen-image" width={"512"} height={"512"} />
			</section>
		</main>
	);
}
