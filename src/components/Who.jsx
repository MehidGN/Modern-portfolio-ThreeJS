import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
`


const Title = styled.h1`   
    font-size: 74px;
`
const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`


const Line = styled.img`   
    height: 5px;
`
const Subtitle = styled.h2`
    color: #da4ea2;
`
const Desc = styled.p`   
    font-size: 24px;
    color: lightgray;

`
const Button = styled.button`
    background-color: #da4ea2;
    color: white;
    font-weight: 500;
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`



const Left = styled.div`   
    flex: 1;
    position: relative;
`

const Who = () => {
    return (
        <Section>
            <Container>
                <Left>
                </Left>
                <Right>
                    <Title>Think Outside the Square Space</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" />
                        <Subtitle>What We Are</Subtitle>
                    </WhatWeDo>
                    <Desc>A Creative group of designers and developers with a passion for the arts.</Desc>
                    <Button>Learn More</Button>
                </Right>
            </Container>
        </Section>
    );
}

export default Who;
