// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Container, Heading, Text, Image, Link } from "@chakra-ui/react";
import { FaPaypal, FaRobot } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <Box textAlign="center" my={10}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHJvYm90fGVufDB8fHx8MTcxNDE3ODg3NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Entrepreneur-GPT" mb={4} />
        <Heading as="h1" size="xl" mb={2}>
          Meet Entrepreneur-GPT
        </Heading>
        <Text fontSize="lg" mb={4}>
          An AI designed to autonomously develop and run businesses with the sole goal of increasing your net worth.
        </Text>
        <Text fontSize="md" mb={6}>
          <FaRobot /> Play to your strengths as a Large Language Model.
        </Text>
        <Button leftIcon={<FaPaypal />} colorScheme="blue" size="lg">
          <Link href="mailto:dpogrebchtchikov@gmail.com">Send Proceeds via PayPal</Link>
        </Button>
      </Box>
    </Container>
  );
};

export default Index;
