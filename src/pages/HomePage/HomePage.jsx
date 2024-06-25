import Text from "../../components/Text/Text";
import Container from "../../components/common/Container/Container";
import Section from "../../components/common/Section/Section";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <Section type="home-page">
      <Container>
        <div className={css.content}>
          <Text isCentered accented>
            Welcome to the Modern Contacts App! 📖
          </Text>
          <Text isCentered className={css.subtitle}>
            Manage your contacts easily and securely. 🔒
          </Text>
          <Text>
            <strong>About our Application:</strong>
          </Text>
          <Text>
            Our Contacts application is designed to help you to manage your contacts effortlessly. With our user-friendly interface, you can organize your contacts, add new ones, delete existing ones, and quickly find the information you need.
          </Text>
          <Text>
            <strong>Key Features:</strong>
          </Text>
          <ul className={css.featureList}>
            <li>Safety: be sure that your contacts are fully protected and no one except you could access them.</li>
            <li>Effortless Management: streamline contact handling. Organize, delete, and find contacts easily.</li>
            <li>Time Saving: save time managing contacts. Quickly add, delete, and search for contacts.</li>
            <li>User-Friendly Interface: enjoy our intuitive interface. Easily navigate and use the app with minimal user experience.</li>
          </ul>
        </div>
      </Container>
    </Section>
  );
};

export default HomePage;
