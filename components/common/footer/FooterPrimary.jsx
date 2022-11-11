import Link from "next/link";

export default function FooterPrimary() {
  return (
    <div className="container footer-primary-inner">
      <nav className="footer-nav">
        <ul>
          <li>
            <Link
              href="/"
              title="Information"
            >Information</Link>
          </li>

          <li>
            <Link
              href="/"
              title="Contact us"
            >Contact us</Link>
          </li>

          <li>
            <Link
              href="/"
              title="Track my order"
            >Track my order</Link>
          </li>

          <li>
            <Link
              href="/"
              title="Shipping"
            >Shipping</Link>
          </li>

          <li>
            <Link
              href="/"
              title="Free returns*"
            >Free returns*</Link>
          </li>

          <li>
            <Link
              href="/"
              title="My account"
            >My account</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link
              href="/"
              title="Services"
            >Services</Link>
          </li>

          <li>
            <Link
              href="/"
              title="Ship to store"
            >Ship to store</Link>
          </li>

          <li>
            <Link
              href="/"
              title="Gift card"
            >Gift card</Link>
          </li>

          <li>
            <Link
              href="/"
              title="Online only"
            >Online only</Link>
          </li>

          <li>
            <Link
              href="/"
              title="Tips & tricks"
            >Tips & tricks</Link>
          </li>

          <li>
            <Link
              href="/"
              title="Home"
            >Home</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link
              href="/"
              title="Loyalty programs"
            >Loyalty programs</Link>
          </li>

          <li>
            <Link
              href="/"
              title="Sign up tot the Simons"
            >Sign up to the Simons</Link>
          </li>

          <li>
            <Link
              href="/"
              title="My account"
            >My account</Link>
          </li>

          <li>
            <Link
              href="/"
              title="Conditions"
            >Conditions</Link>
          </li>

          <li>
            <Link
              href="/"
              title="FAQ"
            >FAQ</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link
              href="/"
              title="Careers"
            >Careers</Link>
          </li>

          <li>
            <Link
              href="/"
              title="About us"
            >About us</Link>
          </li>

          <li>
            <Link
              href="/"
              title="Our story"
            >Our story</Link>
          </li>

          <li>
            <Link
              href="/"
              title="Art & Culture"
            >Art & Culture</Link>
          </li>

          <li>
            <Link
              href="/"
              title="Our private labels"
            >Our private labels</Link>
          </li>

          <li>
            <Link
              href="/"
              title="Stores"
            >Stores</Link>
          </li>
        </ul>
      </nav>

      <section className="footer-contact my-3 my-lg-0">
        <h1>Thread Affair <span>Milano</span></h1>

        <p>
          Largo Augusto 3, Milano, 20122, Milano, IT

          <a
            href="tel:0039 02 760 003 66"
            title="Call us"
          >Tel: 0039 02 760 003 66</a>

          <a
            href="mailto:office@thread-affair.com"
            title="Email us"
          >office@thread-affair.com</a>
        </p>
      </section>

      <nav className="footer-support">
        <ul>
          <li>
            <a
              href="tel:1-877-666-1840"
              title="Support"
            >
              <i class="fa-solid fa-phone"></i>
              <span>Support</span>
            </a>
          </li>

          <li>
            <a
              href="/"
              title="Chat"
            >
              <i class="fa-solid fa-comment"></i>
              <span>Chat</span>
            </a>
          </li>

          <li>
            <a
              href="mailto:office@thread-affair.com"
              title="Email"
            >
              <i class="fa-solid fa-at"></i>
              <span>Email</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
