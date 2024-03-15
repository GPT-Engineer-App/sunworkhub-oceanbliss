import React from "react";
import { Box, Heading, Text, Button, Image, Stack, Grid, GridItem, Icon, Flex, Spacer, VStack, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { FaShip, FaCompass, FaYinYang, FaHiking } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex bg="blue.900" p={4} color="white">
        <Box>
          <Heading size="md">SunWorkHub</Heading>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="teal" mr={4}>
            Book Now
          </Button>
          <Button colorScheme="teal">Contact Us</Button>
        </Box>
      </Flex>

      {/* Hero Section */}
      <Box bgImage="https://images.unsplash.com/photo-1499403474843-04e72c14df8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzYWlsaW5nJTIweWFjaHR8ZW58MHx8fHwxNzEwNTMxMzg3fDA&ixlib=rb-4.0.3&q=80&w=1080" bgPosition="center" bgRepeat="no-repeat" bgSize="cover" h="100vh" display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={6} alignItems="center" textAlign="center">
          <Heading as="h1" size="2xl" color="white">
            Redefine Your Workation
          </Heading>
          <Text fontSize="xl" color="white" maxW="600px">
            Escape to warmer, sunlit environments and experience the perfect blend of work, wellness, and adventure aboard SunWorkHub's luxury sailing retreats.
          </Text>
          <Button colorScheme="teal" size="lg">
            Discover More
          </Button>
        </VStack>
      </Box>

      {/* About Section */}
      <Box p={12}>
        <Grid templateColumns="repeat(2, 1fr)" gap={8}>
          <GridItem>
            <Heading as="h2" size="xl" mb={4}>
              About SunWorkHub
            </Heading>
            <Text fontSize="lg">SunWorkHub redefines the coworking space concept by blending the luxury of a week-long sailing experience with the functionality of remote working. Our mission is to provide professionals with a harmonious balance between work, wellness, and adventure, all set against the stunning backdrop of the sea.</Text>
          </GridItem>
          <GridItem>
            <Image src="https://images.unsplash.com/photo-1492366254240-43affaefc3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMG9uJTIwYSUyMHlhY2h0fGVufDB8fHx8MTcxMDUzMTM4N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="About SunWorkHub" />
          </GridItem>
        </Grid>
      </Box>

      {/* Experience Section */}
      <Box bg="gray.100" p={12}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          The SunWorkHub Experience
        </Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={8}>
          <GridItem textAlign="center">
            <Icon as={FaShip} w={12} h={12} color="teal.500" />
            <Text fontWeight="bold" mt={4}>
              Luxury Sailing
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Icon as={FaCompass} w={12} h={12} color="teal.500" />
            <Text fontWeight="bold" mt={4}>
              Stunning Destinations
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Icon as={FaYinYang} w={12} h={12} color="teal.500" />
            <Text fontWeight="bold" mt={4}>
              Wellness Activities
            </Text>
          </GridItem>
          <GridItem textAlign="center">
            <Icon as={FaHiking} w={12} h={12} color="teal.500" />
            <Text fontWeight="bold" mt={4}>
              Adventure & Exploration
            </Text>
          </GridItem>
        </Grid>
      </Box>

      {/* Destinations Section */}
      <Box p={12}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Discover Our Destinations
        </Heading>
        <Stack spacing={8}>
          <Box bgImage="https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaW4lMjBtZWRpdGVycmFuZWFuJTIwZm9yZXN0fGVufDB8fHx8MTcxMDUzMTM4N3ww&ixlib=rb-4.0.3&q=80&w=1080" bgPosition="center" bgRepeat="no-repeat" bgSize="cover" h="400px" borderRadius="lg" display="flex" alignItems="flex-end" p={6}>
            <Heading color="white" size="xl">
              Mediterranean Forests
            </Heading>
          </Box>
          <Box bgImage="https://images.unsplash.com/photo-1662404041952-4c4809c1403b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwcm9tYW4lMjBydWluc3xlbnwwfHx8fDE3MTA1MzEzODh8MA&ixlib=rb-4.0.3&q=80&w=1080" bgPosition="center" bgRepeat="no-repeat" bgSize="cover" h="400px" borderRadius="lg" display="flex" alignItems="flex-end" p={6}>
            <Heading color="white" size="xl">
              Ancient Roman Ruins
            </Heading>
          </Box>
        </Stack>
      </Box>

      {/* Contact Section */}
      <Box bg="gray.100" p={12}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Get In Touch
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={8}>
          <GridItem>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email" mt={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="message" mt={4}>
              <FormLabel>Message</FormLabel>
              <Textarea />
            </FormControl>
            <Button colorScheme="teal" size="lg" mt={8}>
              Send Message
            </Button>
          </GridItem>
          <GridItem>
            <Image src="https://images.unsplash.com/photo-1501770118606-b1d640526693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBvbiUyMGElMjB5YWNodHxlbnwwfHx8fDE3MTA1MzEzODh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Contact Us" />
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box bg="blue.900" color="white" p={8} textAlign="center">
        <Text>&copy; 2023 SunWorkHub. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
