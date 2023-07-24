import { Container, Image } from './HomeView.styled';
import imagePhone from '../images/image-homepage.jpg';

export default function HomeView() {
  return (
    <Container>
      Your personal Phonebook!
      <Image src={imagePhone}></Image>
    </Container>
  );
}
