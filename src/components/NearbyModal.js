import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import MapView from "react-native-maps";
import Modal from "react-native-modal";

const { width } = Dimensions.get("window");

const NearbyModal = (props) => {
  const { isVisible, onBackdropPress } = props;
  const [state, setState] = useState({
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    autoComplete: null,
    errorMessage: "",
  });

  const [mapWidth, setMapWidth] = useState("99%");
  function updateMapStyling() {
    setMapWidth("100%");
  }

  return (
    <View>
      <Modal
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        backdropOpacity={0.3}
        style={styles.modalContainer}
        swipeThreshold={200}
        onSwipeComplete={onBackdropPress}
        swipeDirection="down"
        hideModalContentWhileAnimating
        scrollHorizontal
        propagateSwipe
        useNativeDriver
        animationInTiming={350}
        animationOutTiming={350}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        scrollOffset={200}
      >
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={props.onDismiss}>
            <View style={styles.bar} />
          </TouchableOpacity>
          <MapView
            showUserLocation={true}
            showsMyLocationButton={true}
            region={state.region}
            style={{
              flex: 1,
              width: mapWidth,
            }}
            onMapReady={() => {
              updateMapStyling();
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default NearbyModal;

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    justifyContent: "flex-end",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    elevation: 5,
  },
  topContainer: {
    height: "90%",
    backgroundColor: "white",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  bar: {
    backgroundColor: "gray",
    height: 15,
    alignSelf: "center",
    borderRadius: 20,
    width: width / 3.5,
    marginTop: 10,
    marginBottom: 10,
  },
});
