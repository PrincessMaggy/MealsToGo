import "react-native-gesture-handler";

import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { AppNavigation } from "./src/infrastructure/navigation/app.navigation";
import { app } from "./firebase.config";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { MainNavigation } from "./src/infrastructure/navigation";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!latoLoaded || !oswaldLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <MainNavigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
    </>
  );
}
