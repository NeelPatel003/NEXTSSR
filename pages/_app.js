import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "componant/layout/navBar";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navigation />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
