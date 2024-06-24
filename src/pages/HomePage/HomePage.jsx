import Text from "../../components/Text/Text";
import Container from "../../components/common/Container/Container";
import Section from "../../components/common/Section/Section";

const HomePage = () => {
  return (
    <Section type="home-page">
      <Container>
        <Text isCentered accented>
          Welcome to the Modern Contacts App! 📖
        </Text>
        <Text isCentered>
           Manage your contacts easily and securely. 🔒
        </Text>
      </Container>
    </Section>
  );
};

export default HomePage;