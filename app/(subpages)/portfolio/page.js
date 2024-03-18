import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
	return (
		<main className="main">
			<section id="projects" name="projects" className="projects-section">
				<ul id="projects-list" name="projects-list" className="projects-list">
					<span className="year-text">2024</span>
					<li className="project-item">
						<span className="project-text-link">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="w-4 h-4 hidden md:block">
								<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
							</svg>
							<Link href="https://portfolio-user-profile.vercel.app/">User Profile - Portfolio Project</Link>
						</span>
						
					</li>
					<hr className="fact-line" />
				</ul><Image
							alt="An image of an animated computer screen"
							src="/screen.png"
							className="screen-image"
							width={"584"}
							height={"594"}
							priority={true}
						/>
			</section>
		</main>
	);
}
