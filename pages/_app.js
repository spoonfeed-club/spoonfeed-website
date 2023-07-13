// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config });

import mixpanel from "mixpanel-browser";

// Replace YOUR_TOKEN with your Project Token
// Note: This is configured to track an event for every page view automatically. We also recommend
//       using localStorage instead of the default cookie for persistence.
mixpanel.init("79c3ce279ee92fcf3a7b5ff53a7c7fdb", {
	debug: true,
	track_pageview: true,
	persistence: "localStorage",
});

// Set this to a unique identifier for the user performing the event.
// eg: their ID in your database or their email address.
mixpanel.identify("abhimanyu.in@gmail.com");

// Track an event. It can be anything, but in this example, we're tracking a Signed Up event.
// Include a property about the signup, like the Signup Type
mixpanel.track("Signed Up", {
	"Signup Type": "Referral",
});

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
