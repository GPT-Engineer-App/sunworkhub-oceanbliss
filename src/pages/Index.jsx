import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import BookingPopup from "../components/BookingPopup";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Book Now
      </Button>
      <BookingPopup isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Index;
