import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
	return (
		<Center minH="100vh" minW="100vw" background={"#222222"}>
			<VStack
				alignItems="center"
				justifyContent="center"
				spacing="5"
				px="24"
			>
				<Heading color={"#FFFFE3"} fontWeight="black">
					Tasty things are cooking 🥣!
				</Heading>
				<Text color="#FFFFE3" opacity={0.7}>
					Welcome to spoonfeed.club, we'll be live soon! Follow us on{" "}
					<Link
						href="https://www.instagram.com/spoonfeed.club"
						style={{
							textDecoration: "underline",
						}}
					>
						Instagram
					</Link>{" "}
					for updates.
				</Text>
			</VStack>
		</Center>
	);
}
