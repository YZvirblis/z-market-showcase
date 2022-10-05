import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start selling & growing!"
        description="Buy, store. collect NFT's, exchange & store crypto. Join 25+ million people using Z-Market Marketplace"
        showBtn
        mockupImage={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience as buttery UI of Z-Market NFT Marketplace. Smooth constant colors of a fluent UI design"
        mockupImage={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="Z-Market is built using Expo which runs natively on all user devices"
        mockupImage={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT"
        mockupImage={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div
        className={`px-4 py-10 justify-center items-center bg-primary flex-col text-center banner04`}
      >
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by <span className="font-bold">Yuriy Zhvirblis</span>
        </p>
      </div>
    </>
  );
};

export default App;
