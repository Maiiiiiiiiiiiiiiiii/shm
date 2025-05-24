import { FontAwesome } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Your Child's Scoliosis Care Assistant</Text>
        </View>

        <View style={styles.content}>
          {/* Quick Actions */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Quick Actions</Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.actionButton}>
                <FontAwesome name="heartbeat" size={24} color="#2f95dc" />
                <Text style={styles.actionText}>Start Measurement</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <FontAwesome name="calendar" size={24} color="#2f95dc" />
                <Text style={styles.actionText}>Schedule Check</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Recent Measurements */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Measurements</Text>
            <View style={styles.measurementCard}>
              <View style={styles.measurementHeader}>
                <Text style={styles.measurementDate}>Today</Text>
                <Text style={styles.measurementStatus}>Normal</Text>
              </View>
              <Text style={styles.measurementAngle}>15°</Text>
              <Text style={styles.measurementNote}>No significant change from last measurement</Text>
            </View>
          </View>

          {/* Important Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Important Information</Text>
            <View style={styles.infoCard}>
              <FontAwesome name="info-circle" size={24} color="#2f95dc" />
              <Text style={styles.infoText}>
                Next doctor's appointment: March 25, 2024
              </Text>
            </View>
            <View style={styles.infoCard}>
              <FontAwesome name="exclamation-circle" size={24} color="#FFA000" />
              <Text style={styles.infoText}>
                Remember to perform daily exercises
              </Text>
            </View>
          </View>

          {/* Quick Tips */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Quick Tips</Text>
            <View style={styles.tipCard}>
              <Text style={styles.tipText}>
                • Maintain good posture during daily activities{'\n'}
                • Take regular breaks from sitting{'\n'}
                • Follow the prescribed exercise routine{'\n'}
                • Keep track of any discomfort or pain
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
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  actionText: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  measurementCard: {
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
  measurementHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  measurementDate: {
    fontSize: 16,
    color: '#666',
  },
  measurementStatus: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '600',
  },
  measurementAngle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2f95dc',
    marginBottom: 5,
  },
  measurementNote: {
    fontSize: 14,
    color: '#666',
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  tipCard: {
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
  tipText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 24,
  },
}); 