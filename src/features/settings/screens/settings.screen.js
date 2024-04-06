import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safearea.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import styled from "styled-components/native";
import { View } from "react-native";
import { StyledText } from "../../../components/typography/text.component";
import { TouchableOpacity } from "react-native";


const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled(View)`
  align-items: center;
  gap: ${(props) => props.theme.space[3]};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout,user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
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
