import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
	return (
		<main className="main">
			<section id="projects" name="projects" className="projects-section">
				<ul id="projects-list" name="projects-list" className="projects-list">
					<p className="year-text">2024</p>
					<li>
						<Link href="https://userprofile.viktorwiman.com" className="project-item group">
							<div className="project-text-link">
								<Image
									priority={true}
									alt="A mockup of user profile website"
									src="/usermockup.png"
									className="user-mockup-image group-hover:scale-105"
									width={"512"}
									height={"512"}
								/>

								<p className="project-label">User Profile - Portfolio Project</p>
							</div>
						</Link>
					</li>
				</ul>
			</section>
		</main>
	);
}
