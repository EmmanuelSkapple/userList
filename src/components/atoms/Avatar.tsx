import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Svg, { Circle, Text } from "react-native-svg";
import { avatarPalette, colors } from "../../utils/colors";
import { AvatarProps } from "../../types/atomsType";
import { screenWidth } from "../../utils/GetSizes";

const Avatar = ({
  name,
  id,
  size,
  src,
  fontColor = colors.colorBlack
}: AvatarProps) => {
  let circleSize = 40;
  switch (size) {
    case "small":
      circleSize = 32;
      break;
    case "medium":
      circleSize = 56;
      break;
    case "large":
      circleSize = screenWidth * 0.4;
      break;
    default:
      circleSize = 40;
      break;
  }
  const generateAvatar = (id = 0, name = "") => {
    const randomIndex = Math.floor(Math.abs(id) % avatarPalette.length);
    const color = avatarPalette[randomIndex];
    const initials = name.substring(0, 2).toUpperCase();

    let font = "60";
    switch (size) {
      case "small":
        font = "24";
        break;
      case "large":
        font = "56";
        break;
      default:
        font = "36";
        break;
    }

    return (
      <Svg viewBox="0 0 120 120">
        <Circle cx="60" cy="60" r={circleSize} fill={color} />
        <Text
          x="50%"
          y="50%"
          dy="0.35em"
          textAnchor="middle"
          fill={fontColor}
          fontSize={font}
        >
          {initials}
        </Text>
      </Svg>
    );
  };
  const avatar = generateAvatar(id, name);

  return (
    <View style={[styles.container, { width: circleSize, height: circleSize }]}>
      {src ? (
        <Image
          source={{ uri: src }}
          style={[{ width: circleSize, height: circleSize }, styles.avatar]}
        />
      ) : (
        avatar
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100
  },
  avatar: {
    borderRadius: 100
  }
});

export default Avatar;
