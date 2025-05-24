import { FontAwesome } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* User Profile Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>User Profile</Text>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <FontAwesome name="user" size={20} color="#2f95dc" />
              <Text style={styles.settingText}>Child's Information</Text>
            </View>
            <FontAwesome name="chevron-right" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <FontAwesome name="user-md" size={20} color="#2f95dc" />
              <Text style={styles.settingText}>Doctor's Information</Text>
            </View>
            <FontAwesome name="chevron-right" size={16} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Device Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Device Settings</Text>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <FontAwesome name="bluetooth" size={20} color="#2f95dc" />
              <Text style={styles.settingText}>Bluetooth Devices</Text>
            </View>
            <FontAwesome name="chevron-right" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <FontAwesome name="cog" size={20} color="#2f95dc" />
              <Text style={styles.settingText}>Measurement Settings</Text>
            </View>
            <FontAwesome name="chevron-right" size={16} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Notifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <FontAwesome name="bell" size={20} color="#2f95dc" />
              <Text style={styles.settingText}>Measurement Reminders</Text>
            </View>
            <Switch value={true} />
          </View>
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <FontAwesome name="calendar" size={20} color="#2f95dc" />
              <Text style={styles.settingText}>Appointment Reminders</Text>
            </View>
            <Switch value={true} />
          </View>
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <FontAwesome name="exclamation-circle" size={20} color="#2f95dc" />
              <Text style={styles.settingText}>Alert Notifications</Text>
            </View>
            <Switch value={true} />
          </View>
        </View>

        {/* Data Management */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Management</Text>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <FontAwesome name="download" size={20} color="#2f95dc" />
              <Text style={styles.settingText}>Export Data</Text>
            </View>
            <FontAwesome name="chevron-right" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <FontAwesome name="cloud-upload" size={20} color="#2f95dc" />
              <Text style={styles.settingText}>Backup Data</Text>
            </View>
            <FontAwesome name="chevron-right" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <FontAwesome name="trash" size={20} color="#FF3B30" />
              <Text style={[styles.settingText, { color: '#FF3B30' }]}>Clear Data</Text>
            </View>
            <FontAwesome name="chevron-right" size={16} color="#666" />
          </TouchableOpacity>
        </View>

        {/* App Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Settings</Text>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <FontAwesome name="language" size={20} color="#2f95dc" />
              <Text style={styles.settingText}>Language</Text>
            </View>
            <Text style={styles.settingValue}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <FontAwesome name="question-circle" size={20} color="#2f95dc" />
              <Text style={styles.settingText}>Help & Support</Text>
            </View>
            <FontAwesome name="chevron-right" size={16} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <FontAwesome name="info-circle" size={20} color="#2f95dc" />
              <Text style={styles.settingText}>About</Text>
            </View>
            <FontAwesome name="chevron-right" size={16} color="#666" />
          </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginLeft: 15,
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  settingValue: {
    fontSize: 14,
    color: '#666',
  },
}); 