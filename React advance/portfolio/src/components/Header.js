import React, { useEffect, useRef } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const socials = [
  {
    icon: FaEnvelope,
    url: 'mailto:saeedgondle@gmail.com',
  },
  {
    icon: FaGithub,
    url: 'https://github.com/Saeed-gondle',
  },
  {
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/muhammad-saeed-jt',
  },
  {
    icon: FaStackOverflow,
    url: 'https://stackoverflow.com',
  },
];

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      
      if (!headerElement) {
        return;
      }

      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = 'translateY(0)';
      } else {
        headerElement.style.transform = 'translateY(-200px)';
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#1f2937"
      zIndex={10}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((social) => (
                <a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects" onClick={handleClick('projects')}>
                Projects
              </a>
              <a href="#contactme" onClick={handleClick('contactme')}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
