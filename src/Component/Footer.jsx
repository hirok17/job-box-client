

const Footer = () => {
    return (
        <section className="bg-black">
              <footer className="footer p-10 text-white">
            <aside>
                 <p className="text-4xl font-bold text-[#007456]">Job Box</p>
                 <p className="text-3xl">Got Talent ? <br /> Meet Opportunity</p>
            </aside>
            <nav>
                <header className="footer-title">job category</header>
                <a className="link link-hover">Web development</a>
                <a className="link link-hover">Graphics Design</a>
                <a className="link link-hover">Digital Marketing</a>
                
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
               
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
           
        </footer>
         <p className="text-center text-white">© 2023 Job Box. All rights reserved.</p>
        </section>
    );
};

export default Footer;