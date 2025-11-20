import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react';
import { useAlertContext } from '../context/alertContext';

const AlertComponent = () => {
  const { isOpen, type, message, onClose } = useAlertContext();

  return isOpen ? (
    <Alert status={type} position="fixed" top={0} zIndex={20} width="100%">
      <AlertIcon />
      <AlertTitle mr={2}>{type === 'success' ? 'Success!' : 'Error!'}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" onClick={onClose} />
    </Alert>
  ) : null;
};

export default AlertComponent;
