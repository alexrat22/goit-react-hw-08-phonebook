import { Container, Image } from './HomeView.styled';
import imagePhone from '../images/image-homepage.jpg';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

export default function HomeView() {
  return (
    <Suspense fallback={<Loader />}>
      <Container>
        Your personal Phonebook!
        <Image src={imagePhone}></Image>
      </Container>
    </Suspense>
  );
}
