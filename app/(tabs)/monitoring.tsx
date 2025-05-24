import { FontAwesome } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path, Text as SvgText } from 'react-native-svg';

export default function MonitoringScreen() {
  // Sample spine curve data
  const spinePoints = [
    { x: 50, y: 50, angle: 0 },    // Top point
    { x: 100, y: 150, angle: 15 }, // Middle point
    { x: 50, y: 250, angle: 0 },   // Bottom point
  ];

  // Generate spine curve path
  const spinePath = `M ${spinePoints[0].x} ${spinePoints[0].y} 
                     Q ${spinePoints[1].x} ${spinePoints[1].y} 
                     ${spinePoints[2].x} ${spinePoints[2].y}`;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Real-time Monitoring</Text>
        </View>

        <View style={styles.content}>
          {/* Current Status */}
          <View style={styles.statusSection}>
            <View style={styles.angleDisplay}>
              <Text style={styles.angleLabel}>Current Angle</Text>
              <Text style={styles.angleValue}>15°</Text>
              <Text style={styles.angleNote}>Last measurement: 15° (Normal)</Text>
            </View>

            <View style={styles.statusCard}>
              <View style={styles.statusHeader}>
                <FontAwesome name="info-circle" size={24} color="#2f95dc" />
                <Text style={styles.statusTitle}>Device Status</Text>
              </View>
              <Text style={styles.statusContent}>Not Connected</Text>
            </View>
          </View>

          {/* Spine Visualization */}
          <View style={styles.visualizationSection}>
            <Text style={styles.sectionTitle}>Spine Visualization</Text>
            <View style={styles.spineContainer}>
              <Svg height="300" width="200" style={styles.spineSvg}>
                {/* Background grid */}
                <Path
                  d="M 0 50 H 200 M 0 150 H 200 M 0 250 H 200 M 50 0 V 300 M 100 0 V 300 M 150 0 V 300"
                  stroke="#eee"
                  strokeWidth="1"
                />
                {/* Spine curve */}
                <Path
                  d={spinePath}
                  stroke="#2f95dc"
                  strokeWidth="3"
                  fill="none"
                />
                {/* Measurement points */}
                {spinePoints.map((point, index) => (
                  <View key={index}>
                    <Circle
                      cx={point.x}
                      cy={point.y}
                      r="6"
                      fill="#2f95dc"
                    />
                    <SvgText
                      x={point.x + 10}
                      y={point.y - 10}
                      fill="#666"
                      fontSize="12"
                    >
                      {point.angle}°
                    </SvgText>
                  </View>
                ))}
              </Svg>
            </View>
          </View>

          {/* Connection Button */}
          <TouchableOpacity style={styles.connectButton}>
            <FontAwesome name="bluetooth" size={20} color="#fff" />
            <Text style={styles.connectButtonText}>Connect Device</Text>
          </TouchableOpacity>

          {/* Start Measurement Button */}
          <TouchableOpacity style={styles.startButton}>
            <FontAwesome name="play" size={20} color="#fff" />
            <Text style={styles.startButtonText}>Start Measurement</Text>
          </TouchableOpacity>

          {/* Measurement Guide */}
          <View style={styles.guideSection}>
            <Text style={styles.sectionTitle}>Measurement Guide</Text>
            <View style={styles.guideCard}>
              <View style={styles.guideStep}>
                <Text style={styles.stepNumber}>1</Text>
                <Text style={styles.stepText}>
                  Ensure your child is wearing appropriate clothing (light, form-fitting)
                </Text>
              </View>
              <View style={styles.guideStep}>
                <Text style={styles.stepNumber}>2</Text>
                <Text style={styles.stepText}>
                  Have your child stand straight with feet shoulder-width apart
                </Text>
              </View>
              <View style={styles.guideStep}>
                <Text style={styles.stepNumber}>3</Text>
                <Text style={styles.stepText}>
                  Place the device on the back, following the on-screen guide
                </Text>
              </View>
              <View style={styles.guideStep}>
                <Text style={styles.stepNumber}>4</Text>
                <Text style={styles.stepText}>
                  Stay still and wait for the measurement to complete
                </Text>
              </View>
            </View>
          </View>

          {/* Tips for Parents */}
          <View style={styles.tipsSection}>
            <Text style={styles.sectionTitle}>Tips for Parents</Text>
            <View style={styles.tipsCard}>
              <View style={styles.tipItem}>
                <FontAwesome name="clock-o" size={20} color="#2f95dc" />
                <Text style={styles.tipText}>
                  Best time to measure: Morning, before physical activities
                </Text>
              </View>
              <View style={styles.tipItem}>
                <FontAwesome name="calendar" size={20} color="#2f95dc" />
                <Text style={styles.tipText}>
                  Recommended frequency: Once every 2 weeks
                </Text>
              </View>
              <View style={styles.tipItem}>
                <FontAwesome name="exclamation-circle" size={20} color="#FFA000" />
                <Text style={styles.tipText}>
                  Contact doctor if angle changes by more than 5°
                </Text>
              </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    padding: 15,
  },
  statusSection: {
    marginBottom: 20,
  },
  angleDisplay: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  angleLabel: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  angleValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2f95dc',
  },
  angleNote: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  statusCard: {
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
  statusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    color: '#333',
  },
  statusContent: {
    fontSize: 16,
    color: '#666',
    marginLeft: 34,
  },
  visualizationSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  spineContainer: {
    backgroundColor: '#fff',
    padding: 15,
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
  spineSvg: {
    backgroundColor: '#fff',
  },
  connectButton: {
    backgroundColor: '#2f95dc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  connectButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  startButton: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  guideSection: {
    marginBottom: 20,
  },
  guideCard: {
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
  guideStep: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2f95dc',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
    marginRight: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  stepText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  tipsSection: {
    marginBottom: 20,
  },
  tipsCard: {
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
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  tipText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
}); 