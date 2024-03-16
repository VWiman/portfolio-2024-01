const Footer = () => {
	const currentYear = new Date().getFullYear();
	return <footer className="footer">&copy; {currentYear} Viktor Wiman</footer>;
};

export default Footer;
