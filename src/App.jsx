import { Navbar } from "./components";
import {
  Hero,
  Reviews,
  Offers,
  GlobalLocation,
  Websolutions,
  Webspeed,
  CustomerSupport,
  SecurityFeatures,
  Migration,
  ClientsStories,
  Footer,
} from "./pages";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Reviews />
      <Offers />
      <GlobalLocation />
      <Websolutions />
      <Webspeed />
      <CustomerSupport />
      <SecurityFeatures />
      <Migration />
      <ClientsStories />
      <Footer />
    </div>
  );
}
