import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Calendar, useDisclosure } from "@chakra-ui/react";

function BookingPopup({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Book Your Week</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{}</ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Book Now</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default BookingPopup;
