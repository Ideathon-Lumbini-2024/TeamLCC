import { View, Text, TouchableOpacity } from "react-native"
import { CustomButtonProps } from "@/types/types"

export default function Custombutton({
  text,
  onPress,
  style,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
        width: "80%",
      }}
    >
      <Text style={{ color: "white" }}>{text}</Text>
    </TouchableOpacity>
  )
}
