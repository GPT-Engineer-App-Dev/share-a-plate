import { Box, Container, VStack, HStack, Heading, Text, Image, Input, Textarea, Button, Link, Flex } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="teal.500" color="white" p={4}>
        <HStack spacing={8} justify="space-between">
          <Heading size="md">RecipeShare</Heading>
          <HStack spacing={4}>
            <Link href="#home">Home</Link>
            <Link href="#recipes">Recipes</Link>
            <Link href="#submit">Submit a Recipe</Link>
            <Link href="#contact">Contact</Link>
          </HStack>
        </HStack>
      </Box>

      {/* Hero Section */}
      <Box as="section" id="home" bg="gray.100" py={20} textAlign="center">
        <Heading mb={4}>Welcome to RecipeShare</Heading>
        <Text fontSize="lg" mb={6}>Discover and share amazing recipes from around the world.</Text>
        <Button colorScheme="teal" size="lg">Get Started</Button>
      </Box>

      {/* Recipes Section */}
      <Box as="section" id="recipes" py={20}>
        <Heading textAlign="center" mb={10}>Recipes</Heading>
        <Flex wrap="wrap" justify="center" spacing={8}>
          {/* Example Recipe Card */}
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/150" alt="Recipe Image" />
            <Box p={6}>
              <Heading size="md" mb={2}>Recipe Title</Heading>
              <Text>Short description of the recipe.</Text>
            </Box>
          </Box>
          {/* Add more recipe cards as needed */}
        </Flex>
      </Box>

      {/* Submit Recipe Section */}
      <Box as="section" id="submit" bg="gray.100" py={20} textAlign="center">
        <Heading mb={10}>Submit a Recipe</Heading>
        <Box maxW="md" mx="auto">
          <VStack spacing={4}>
            <Input placeholder="Recipe Name" />
            <Textarea placeholder="Ingredients" />
            <Textarea placeholder="Instructions" />
            <Button colorScheme="teal" size="lg">Submit</Button>
          </VStack>
        </Box>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="teal.500" color="white" py={10} textAlign="center">
        <VStack spacing={4}>
          <Text>Contact us at: info@recipeshare.com</Text>
          <HStack spacing={4}>
            <Link href="#"><FaFacebook size="24px" /></Link>
            <Link href="#"><FaTwitter size="24px" /></Link>
            <Link href="#"><FaInstagram size="24px" /></Link>
          </HStack>
          <Text>&copy; 2023 RecipeShare. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;