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
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://57f2a1922937faa95c0d136b2e4f4e1d@o4507038565662720.ingest.us.sentry.io/4507038568087552',
});

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
