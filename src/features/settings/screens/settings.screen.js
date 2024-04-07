import React, { useContext, useState } from "react";
import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safearea.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import styled from "styled-components/native";
import { View } from "react-native";
import { StyledText } from "../../../components/typography/text.component";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled(View)`
  align-items: center;
  gap: ${(props) => props.theme.space[3]};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    React.useCallback(() => {
      getProfilePicture(user);
    }, [user, getProfilePicture])
  );

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo ? (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          ) : (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
        <StyledText variant="label">{user.email}</StyledText>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="green" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />

        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="red" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
