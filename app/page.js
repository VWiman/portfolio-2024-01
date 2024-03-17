import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const currentDate = new Date().getFullYear();
	const currentMonth = new Date().getMonth();
	return (
		<main className="main">
			<section id="hero" name="hero" className="hero-section">
				<ul id="facts-list" name="facts-list" className="facts-list">
					<li className="fact-item">
						<span className="fact-label">Age:</span>
						<span className="fact-text">{currentMonth > 2 ? currentDate - 1989 : currentDate - 1988}</span>
					</li>
					<hr className="fact-line" />
					<li className="fact-item">
						<span className="fact-label">Location:</span>
						<span className="fact-text">
							<Link
								href={"https://maps.app.goo.gl/BjzwrZ3xbp1Tsh4V9"}
								aria-label="Open Google Maps location for Vallentuna"
								className="fact-text-link">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
									<path
										fillRule="evenodd"
										d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
										clipRule="evenodd"
									/>
								</svg>
								Vallentuna
							</Link>
						</span>
					</li>
					<hr className="fact-line" />
					<li className="fact-item">
						<span className="fact-label">Profession:</span>
						<span className="fact-text">Web Developer (Student)</span>
					</li>
					<hr className="fact-line" />
					<li className="fact-item">
						<span className="fact-label">Highlighted skills:</span>
						<span className="fact-text">React, NextJS, Redux, Tailwind</span>
					</li>
					<hr className="fact-line" />
					<li className="fact-item">
						<span className="fact-label">Languages:</span>
						<span className="fact-text">English, Swedish</span>
					</li>
					<hr className="fact-line" />
				</ul>
				<Image aria-label="Animated character looking like Viktor Wiman" src="/hero_bg.png" className="hero-image" width={"448"} height={"672"} />
			</section>
		</main>
	);
}