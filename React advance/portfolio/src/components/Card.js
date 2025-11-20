import React from 'react';
import { Heading, HStack, Image, Text, VStack, Card, CardBody } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ title, description, imageSrc }) => {
  return (
    <Card borderRadius="lg" overflow="hidden">
      <Image src={imageSrc} alt={title} objectFit="cover" />
      <CardBody>
        <VStack spacing={4} alignItems="flex-start">
          <Heading as="h3" size="md" color="black">
            {title}
          </Heading>
          <Text color="gray.600" fontSize="sm">
            {description}
          </Text>
          <HStack spacing={2} alignItems="center">
            <Text fontSize="sm" fontWeight="bold" color="black">
              See more
            </Text>
            <FaArrowRight size={14} />
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
