import News from "../components/News";
import Title from "../components/Title";

const Home = () => {
  return (
    <div className="home">
      <div className="home-title">
        <Title title="Players" fadeAnimation="right" />
        <Title title="Auction" fadeAnimation="left" />
      </div>
      <News />
    </div>
  );
};

export default Home;
