import React, { useState } from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import BookingPopup from "../components/BookingPopup";

function IndexPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookingClose = () => setIsBookingOpen(false);
  const handleBookingOpen = () => setIsBookingOpen(true);

  return (
    <>
      <Button onClick={handleBookingOpen}>Book Now</Button>
      <BookingPopup isOpen={isBookingOpen} onClose={handleBookingClose} />
    </>
  );
}

export default IndexPage;
