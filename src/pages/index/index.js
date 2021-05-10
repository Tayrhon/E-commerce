import React from 'react';
import Bouton from '../../components/Bouton/bouton';
import {
 Title,
 Container,
 Stitle,
 Stitlegauche,
 Titlegauche,
 Img,
} from './indexElement';
import Photo from '../../images/Photo.jpeg'

const Home = () => {
  return (
    <>
    <Container>
      <Title>I'm John Carter,<br/>
        a NFT Artist</Title>
      <Stitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel <br />
       purus cras curabitur eget facilisis nisl. Neque a porttitor .</Stitle>
       <Bouton />
    </Container>

    <Container>
      <Img src={Photo} style={{float: 'right',}}></Img>
      <Titlegauche style={{diplay: 'flex'}}>About me</Titlegauche>
      <Stitlegauche style={{diplay: 'flex'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel <br />
       purus cras curabitur eget facilisis nisl. Neque a porttitor .</Stitlegauche>
       <Bouton />
    </Container>

    </>
  );
};

export default Home;