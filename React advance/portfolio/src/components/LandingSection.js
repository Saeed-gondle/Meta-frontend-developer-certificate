import React from 'react';
import { Avatar, Heading, VStack, Text } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';

const greeting = "Hello, I am Muhammad Saeed!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#1e40af"
  >
    <VStack spacing={4}>
      <Avatar
        size="2xl"
        name="Muhammad Saeed"
        src="/image.jpeg"
      />
      <Heading as="h1" size="md" noOfLines={1}>
        {greeting}
      </Heading>
      <VStack spacing={2}>
        <Heading as="h2" size="xl">
          {bio1}
        </Heading>
        <Heading as="h2" size="xl">
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
