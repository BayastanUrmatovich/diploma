import Header from "../components/Header/Header";
import headerImage from "../assets/home.jpeg";

function Home() {
  return (
    <>
      <Header
        title="Welcome to our anime shop!"
        image={headerImage}>
       
Hear us out—your pad is the place to express yourself. If it’s not filled with all the fandom faves you love, it’s basically just a place to lay your head at night. Don’t you want to make that house a home? We bet you do. That’s why we’ve stepped it up and created the ultimate collection your space has been missing—meet the Hot Topic Home collection, a carefully curated selection of cool posters, bedding, homewares, board games, collectibles, and fun home décor that’s all about turning your space into your fan-favorite kingdom.
      </Header>
    </>
  );
}

export default Home;