import Header from "../components/Header/Header";
import headerImage from "../assets/contacts.jpeg";

function Contacts() {
  return (
    <>
      <Header
        title="Order your coffee!"
        image={headerImage}>
       So take a deep dive into our collection this season to find some serious swim favorites you can’t ignore—trust us, when it’s time to hit the waves, you’ll be glad you found this collection.
      </Header>
    </>
  );
}

export default Contacts;