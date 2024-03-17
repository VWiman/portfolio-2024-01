import Link from "next/link";

export default function Portfolio() {
	return (
		<main className="main">
			<section id="projects" name="projects" className="projects-section">
				<ul id="facts-list" name="facts-list" className="facts-list">
					<li className="fact-item">
						<span className="fact-text">
							<Link href="https://portfolio-user-profile.vercel.app/">User Profile - Portfolio Project</Link>
						</span>
					</li>
					<hr className="fact-line" />
				</ul>
			</section>
		</main>
	);
}
