import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 33.3152,
          longitude: 44.3661,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }}
      >
        <Marker
          coordinate={{ latitude: 33.3152, longitude: 44.3661 }}
          title="Iraq Market"
          description="الموقع الرئيسي"
        />
      </MapView>

      <View style={styles.header}>
        <Text style={styles.headerText}>خريطة المتاجر</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  header: {
    position: 'absolute',
    top: 40,
    alignSelf: 'center',
    backgroundColor: '#6a0dad',
    padding: 10,
    borderRadius: 10
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  }
});
