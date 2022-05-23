import headerImage from "../assets/home.jpeg";
import Header from "../components/Header/Header";

function NotFound() {
  return (
    <>
      <Header
        title="Page not found"
        image={headerImage}>
        Maybe 
      </Header>
    </>
  );
}

export default NotFound;