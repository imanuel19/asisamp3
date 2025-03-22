import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import config from "@/config/default/config.json"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const footerCopyright = config.footer_copyright
    .replace("%year%", currentYear.toString())
    .replace("%site_name%", config.site_name)

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <Link href="/page/about">About</Link>
              </li>
              <li className="footer-link">
                <Link href="/page/contact">Contact</Link>
              </li>
              <li className="footer-link">
                <Link href="/page/dmca">DMCA</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Explore</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <Link href="/">Home</Link>
              </li>
              <li className="footer-link">
                <Link href="/playlist/top-hits">Playlists</Link>
              </li>
              <li className="footer-link">
                <Link href="/functions">Functions</Link>
              </li>
              <li className="footer-link">
                <Link href="/api-docs">API Documentation</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li className="footer-link">
                <Link href="/page/terms">Terms of Service</Link>
              </li>
              <li className="footer-link">
                <Link href="/page/privacy">Privacy Policy</Link>
              </li>
              <li className="footer-link">
                <Link href="/page/copyright">Copyright</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{footerCopyright}</p>
        </div>
      </div>
    </footer>
  )
}

