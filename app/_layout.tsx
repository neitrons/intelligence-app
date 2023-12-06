import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "მთავარი",
          title: "მთავარი",
        }}
      />
      <Drawer.Screen
        name="subjects/index"
        options={{
          drawerLabel: "ტესტები",
          title: "ტესტები",
        }}
      />
    </Drawer>
  );
}
