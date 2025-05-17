import '../assets/Footer.css';
// import { FaFacebookF, FaInstagram, FaX, FaYoutube } from 'react-icons/fa';

    function Footer() {
    return (
    <footer className="footer">
        <div className="footer-top">
        <h2 className="footer-logo">NETFLIX</h2>
        <p>Questions? Call <a href="#">1-800-000-NETFLIX</a></p>
        <div className="footer-socials">
    <a  href="#"><i className="fab fa-facebook-f"></i></a>
    <a href="#"><i className="fab fa-instagram"></i></a>
    <a href="#"><i className="fab fa-twitter"></i></a> 
    <a href="#"><i className="fab fa-youtube"></i></a>
</div>

        </div>

        <div className="footer-links-grid">
        <a href="#">FAQ</a>
        <a href="#">Investor Relations</a>
        <a href="#">Privacy</a>
        <a href="#">Speed Test</a>
        <a href="#">Help Center</a>
        <a href="#">Jobs</a>
        <a href="#">Cookie Preferences</a>
        <a href="#">Legal Notices</a>
        <a href="#">Account</a>
        <a href="#">Ways to Watch</a>
        <a href="#">Corporate Information</a>
        <a href="#">Only on Netflix</a>
        </div>

        <div className="footer-bottom">
        <select>
            <option>English</option>
            <option>አማርኛ</option>
            <option>Spanish</option>
        </select>
        <p className="footer-copy">Netflix TMDB Clone © 2025. All rights reserved.</p>
        </div>
    </footer>
    );
}

export default Footer;
