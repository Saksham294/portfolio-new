import React,{useEffect} from 'react'
import './Navbar.css'

const Navbar = () => {
    useEffect(() => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        const navLink = document.querySelectorAll(".nav-link");

        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }

        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }

        if (hamburger) {
            hamburger.addEventListener("click", mobileMenu);
        }

        navLink.forEach(n => n.addEventListener("click", closeMenu));

        // Cleanup event listeners on component unmount
        return () => {
            if (hamburger) {
                hamburger.removeEventListener("click", mobileMenu);
            }
            navLink.forEach(n => n.removeEventListener("click", closeMenu));
        };
    }, []);

    return (
        <div className="nav-header">
            <nav className="navbar">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">About</a>
                    </li>
                </ul>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar