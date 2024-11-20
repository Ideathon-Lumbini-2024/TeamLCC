import Custombutton from "@/Components/Custombutton/Custombutton"
import { router } from "expo-router"
import { View, Text, Image } from "react-native"

export default function Index() {
  return (
    <View
      style={{
        backgroundColor: "#00242f",
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
        }}
      >
        <Image
          source={require("../assets/images/breatheasylogo.png")}
          className="w-20 h-20"
        />
        <Text
          style={{
            color: "white",
          }}
        >
          ‘’Check the Air , Stay Aware’’{" "}
        </Text>
        <Text
          style={{
            color: "white",
          }}
        >
          ‘’Check the Air , Take Care’’
        </Text>
        <Custombutton
          text="Get Started"
          onPress={() => {
            router.push("/login")
          }}
        />
      </View>
    </View>
  )
}
