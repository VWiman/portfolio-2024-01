import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/style/globals.css";
Header
export const metadata = {
	title: "Viktor Wiman Portfolio",
	description: "Portfolio website for web developer Viktor Wiman",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="body">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
