import { Center, Heading, Text, VStack } from "@chakra-ui/react";

export default function Home() {
	return (
		<Center minH="100vh" minW="100vw">
			<VStack alignItems="center" justifyContent="center" spacing="5">
				<Heading>Tasty things are cooking 🥣!</Heading>
				<Text color="gray.400">
					Welcome to spoonfeed.club, we'll be live soon!
				</Text>
			</VStack>
		</Center>
	);
}
