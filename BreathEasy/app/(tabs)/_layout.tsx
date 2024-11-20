import { Tabs } from "expo-router"
import { View, Text } from "react-native"

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="Createreminder" options={{ headerShown: false }} />
      <Tabs.Screen name="Map" options={{ headerShown: false }} />
      <Tabs.Screen name="Blog" options={{ headerShown: false }} />
    </Tabs>
  )
}
