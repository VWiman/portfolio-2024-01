import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
	return (
		<main className="main">
			<section id="projects" name="projects" className="projects-section">
				
				<ul id="projects-list" name="projects-list" className="projects-list">
					<span className="year-text">2024</span>
					<li className="project-item">
						<Link href="https://userprofile.viktorwiman.com">
							<span className="project-text-link">
								<Image
									priority={true}
									alt="A mockup of user profile website"
									src="/usermockup.png"
									className="user-mockup-image"
									width={"512"}
									height={"512"}
								/>

								<span className="project-label">User Profile - Portfolio Project</span>
							</span>
						</Link>
					</li>
				</ul>
			</section>
		</main>
	);
}
