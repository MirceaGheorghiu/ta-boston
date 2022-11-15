import Footer from '../components/common/footer/Footer';
import Header from '../components/common/header/Header';
import HomeCatalogPreview from '../components/homepage/HomeCatalogPreview';
import HomeNewsletter from '../components/homepage/HomeNewsletter';
import HomePayment from '../components/homepage/HomePayment';
import HomeSocial from '../components/homepage/HomeSocial';

export default function Home() {
  return (
    <div>
      <header className="header container mt-lg-5">
        <Header></Header>
      </header>

      <main className="content">
        <div className="content-main">
          <HomeCatalogPreview></HomeCatalogPreview>
          <HomeCatalogPreview></HomeCatalogPreview>
          <HomeCatalogPreview></HomeCatalogPreview>
          <HomeCatalogPreview></HomeCatalogPreview>

          <HomeSocial></HomeSocial>
          <HomePayment></HomePayment>
          <HomeNewsletter></HomeNewsletter>
        </div>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
