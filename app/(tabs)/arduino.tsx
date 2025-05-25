import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ArduinoScreen() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentAngle, setCurrentAngle] = useState<number | null>(null);
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');

  // Mock data - will be replaced with real Bluetooth data
  const mockData = [
    { time: '10:00', angle: 15.5 },
    { time: '10:01', angle: 16.2 },
    { time: '10:02', angle: 15.8 },
  ];

  const handleConnect = () => {
    // Will implement actual Bluetooth connection logic later
    setIsConnected(!isConnected);
    setConnectionStatus(isConnected ? 'Disconnected' : 'Connected');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Arduino Monitor</Text>
          <Text style={styles.subtitle}>Real-time Angle Data</Text>
        </View>

        <View style={styles.content}>
          {/* Connection Status Card */}
          <View style={styles.section}>
            <View style={styles.statusCard}>
              <View style={styles.statusHeader}>
                <FontAwesome 
                  name={isConnected ? "bluetooth" : "bluetooth-b"} 
                  size={24} 
                  color={isConnected ? "#4CAF50" : "#666"} 
                />
                <Text style={[
                  styles.statusText,
                  { color: isConnected ? "#4CAF50" : "#666" }
                ]}>
                  {connectionStatus}
                </Text>
              </View>
              <TouchableOpacity 
                style={[
                  styles.connectButton,
                  { backgroundColor: isConnected ? "#FF5252" : "#2f95dc" }
                ]}
                onPress={handleConnect}
              >
                <Text style={styles.connectButtonText}>
                  {isConnected ? "Disconnect" : "Connect Device"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Real-time Data Display */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Real-time Data</Text>
            <View style={styles.dataCard}>
              <Text style={styles.dataLabel}>Current Angle</Text>
              <Text style={styles.dataValue}>
                {currentAngle ? `${currentAngle}°` : 'Waiting for data...'}
              </Text>
            </View>
          </View>

          {/* Historical Data Records */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>History</Text>
            <View style={styles.historyCard}>
              {mockData.map((item, index) => (
                <View key={index} style={styles.historyItem}>
                  <Text style={styles.historyTime}>{item.time}</Text>
                  <Text style={styles.historyAngle}>{item.angle}°</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Data Visualization Area */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Data Trends</Text>
            <View style={styles.chartCard}>
              <Text style={styles.chartPlaceholder}>
                Chart Area - Coming Soon
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  content: {
    padding: 15,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  statusCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  statusText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  connectButton: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  connectButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  dataCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dataLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  dataValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2f95dc',
  },
  historyCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  historyTime: {
    fontSize: 14,
    color: '#666',
  },
  historyAngle: {
    fontSize: 14,
    color: '#2f95dc',
    fontWeight: '600',
  },
  chartCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  chartPlaceholder: {
    color: '#999',
    fontSize: 16,
  },
}); 