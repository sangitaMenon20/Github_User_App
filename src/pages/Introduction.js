
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../globalStyles';
import {InfoSec,InfoRow,InfoColumn,TextWrapper,TopLine,Heading,Subtitle, ImgWrapper, Img} from '../components/InfoSection.elements';


const Introduction = () => {

    const img=require('../svg-1.svg').default
    return (
      <>
   <InfoSec lightBg='true'>
        <Container>
          <InfoRow imgStart=''>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine='true'>Home Challenge</TopLine>
                <Heading lightText='true'>Introduction</Heading>
                <Subtitle lightTextDesc='true'> 'We help to access GitHub User Information. User will be guided through the checkout process to collect detailed GIT hub Information.</Subtitle>
                <Link to='/userDetails'>
                  <Button big fontBig primary='true'>
                    Get Started
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              { <ImgWrapper start=''>
                <Img src={img} alt='GitHub' />
              </ImgWrapper> }
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
      </>
    );
 
};
export default Introduction;
