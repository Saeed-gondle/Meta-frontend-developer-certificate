import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import ProjectCard from './Card';

const projects = [
  {
    title: 'React E-Commerce App',
    description:
      'A full-featured e-commerce application built with React, Redux, and Stripe integration for payments.',
    getImageSrc: () => '/images/photo1.jpg',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Real-time weather application using React hooks and OpenWeather API with geolocation support.',
    getImageSrc: () => '/images/photo2.jpg',
  },
  {
    title: 'Task Management System',
    description:
      'Collaborative task management tool with drag-and-drop functionality using React Beautiful DnD.',
    getImageSrc: () => '/images/photo3.jpg',
  },
  {
    title: 'Recipe Finder App',
    description:
      'Search and save your favorite recipes using React and the Spoonacular API with custom filters.',
    getImageSrc: () => '/images/photo4.jpg',
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#0d9488"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
        width="100%"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
