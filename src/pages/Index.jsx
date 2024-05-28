import { useState } from "react";
import { Box, Container, VStack, HStack, Heading, Text, Image, Input, Textarea, Button, Link, Flex, useToast } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaStar } from "react-icons/fa";

const Index = () => {
  const [recipes, setRecipes] = useState([
    { title: "Recipe Title", description: "Short description of the recipe.", image: "https://via.placeholder.com/150" }
  ]);
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ratings, setRatings] = useState({});
  const toast = useToast();

  const handleSubmit = () => {
    if (!recipeName || !ingredients || !instructions) {
      toast({
        title: "Error",
        description: "All fields are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const newRecipe = {
      title: recipeName,
      description: ingredients,
      image: "https://via.placeholder.com/150",
    };

    setRecipes([...recipes, newRecipe]);
    setRecipeName("");
    setIngredients("");
    setInstructions("");

    toast({
      title: "Success",
      description: "Recipe submitted successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
  const handleRating = (recipeIndex, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [recipeIndex]: [...(prevRatings[recipeIndex] || []), rating],
    }));
  };

  const calculateAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return 0;
    const total = ratings.reduce((acc, rating) => acc + rating, 0);
    return (total / ratings.length).toFixed(1);
  };

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
          {recipes.map((recipe, index) => (
            <Box key={index} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
              <Image src={recipe.image} alt="Recipe Image" />
              <Box p={6}>
                <Heading size="md" mb={2}>{recipe.title}</Heading>
                <Text>{recipe.description}</Text>
                <Box mt={4}>
                  <Text>Average Rating: {calculateAverageRating(ratings[index])} / 5</Text>
                  <HStack spacing={1}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        color={star <= (ratings[index]?.slice(-1)[0] || 0) ? "gold" : "gray"}
                        onClick={() => handleRating(index, star)}
                        cursor="pointer"
                      />
                    ))}
                  </HStack>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Submit Recipe Section */}
      <Box as="section" id="submit" bg="gray.100" py={20} textAlign="center">
        <Heading mb={10}>Submit a Recipe</Heading>
        <Box maxW="md" mx="auto">
          <VStack spacing={4}>
            <Input placeholder="Recipe Name" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
            <Textarea placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
            <Textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
            <Button colorScheme="teal" size="lg" onClick={handleSubmit}>Submit</Button>
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