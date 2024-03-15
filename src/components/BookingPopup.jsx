import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Image,
  Text,
} from "@chakra-ui/react";

const BookingPopup = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Book Your Kekova, Turkey Retreat</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            src="https://images.unsplash.com/photo-1605908580997-35c41f1a0d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxLZWtvdmElMjBUdXJrZXl8ZW58MHx8fHwxNzEwNTMxMzg4fDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Kekova, Turkey"
            mb={4}
          />
          <Text mb={4}>
            Embark on a unique workation experience in the stunning Kekova region of Turkey. Enjoy a perfect blend of work, wellness, and adventure while sailing along the turquoise coast.
          </Text>
          <form onSubmit={handleSubmit}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email" mt={4} isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="message" mt={4}>
              <FormLabel>Additional Notes</FormLabel>
              <Textarea />
            </FormControl>
            <Button colorScheme="teal" type="submit" mt={4}>
              Submit
            </Button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BookingPopup;