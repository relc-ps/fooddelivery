import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
} from "../constants";

import { MainLayout } from "../screens";
import { color } from "react-native-reanimated";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={{ flex: 1, paddingHorizontal: SIZES.radius }}>
        {/* close */}
        <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={icons.cross}
              style={{ height: 35, width: 35, tintColor: COLORS.white }}
            />
          </TouchableOpacity>
        </View>

        {/* Profile */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            alignItems: "center",
          }}
          onPress={() => console.log("Profile")}
        >
          <Image
            source={dummyData.myProfile?.profile_image}
            style={{ borderRadius: SIZES.radius, width: 50, height: 50 }}
          />
          <View style={{ marginLeft: SIZES.radius }}>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              {dummyData.myProfile.name}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
              Ver seu perfil
            </Text>
          </View>
        </TouchableOpacity>

        {/* Drawer items */}
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: "slide",
          overlayColor: "transparent",
          drawerStyle: {
            flex: 1,
            width: "65%",
            paddingRight: 20,
            backgroundColor: "transparent",
          },
          sceneContainerStyle: { backgroundColor: "transparent" },
        }}
        initialRouteName="MainLayout"
        drawerContent={(props) => {
          return <CustomDrawerContent navigation={props.navigation} />;
        }}
      >
        <Drawer.Screen name="">
          {(props) => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
