import Footer from "../components/common/footer/footer";
import Header from "../components/common/header/Header";
import HomePayment from "../components/homepage/HomePayment";

export default function Home() {
  return (
    <div>
      <header className="header container mt-lg-5">
        <Header></Header>
      </header>

      <main className="content">

        <div className="content-main container">
          <HomePayment></HomePayment>
        </div>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
