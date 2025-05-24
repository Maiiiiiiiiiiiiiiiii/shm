import { FontAwesome } from '@expo/vector-icons';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HistoryScreen() {
  // Sample history data
  const historyData = [
    { date: '2024-03-20', time: '09:00', angle: '15°', status: 'Normal' },
    { date: '2024-03-19', time: '14:00', angle: '18°', status: 'Mild' },
    { date: '2024-03-19', time: '09:00', angle: '16°', status: 'Normal' },
    { date: '2024-03-18', time: '14:00', angle: '17°', status: 'Normal' },
    { date: '2024-03-18', time: '09:00', angle: '19°', status: 'Mild' },
  ];

  // Chart data
  const chartData = {
    labels: ['3/18', '3/19', '3/20'],
    datasets: [
      {
        data: [19, 18, 15],
        color: (opacity = 1) => `rgba(47, 149, 220, ${opacity})`,
        strokeWidth: 2
      }
    ]
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>History</Text>
        </View>

        {/* Trend Analysis */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trend Analysis</Text>
          <View style={styles.chartCard}>
            <LineChart
              data={chartData}
              width={Dimensions.get('window').width - 40}
              height={220}
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(47, 149, 220, ${opacity})`,
                style: {
                  borderRadius: 16
                }
              }}
              bezier
              style={styles.chart}
            />
            <View style={styles.chartLegend}>
              <View style={styles.legendItem}>
                <View style={[styles.legendColor, { backgroundColor: '#2f95dc' }]} />
                <Text style={styles.legendText}>Angle (°)</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Filter Options */}
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <FontAwesome name="calendar" size={16} color="#666" />
            <Text style={styles.filterText}>Last 7 Days</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <FontAwesome name="sort" size={16} color="#666" />
            <Text style={styles.filterText}>Sort</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <FontAwesome name="download" size={16} color="#666" />
            <Text style={styles.filterText}>Export</Text>
          </TouchableOpacity>
        </View>

        {/* Measurement History */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Measurement History</Text>
          {historyData.map((item, index) => (
            <View key={index} style={styles.historyCard}>
              <View style={styles.historyHeader}>
                <View style={styles.dateContainer}>
                  <FontAwesome name="calendar" size={16} color="#2f95dc" />
                  <Text style={styles.dateText}>{item.date}</Text>
                </View>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
              <View style={styles.historyContent}>
                <View style={styles.angleContainer}>
                  <Text style={styles.angleLabel}>Angle</Text>
                  <Text style={styles.angleValue}>{item.angle}</Text>
                </View>
                <View style={styles.statusContainer}>
                  <Text style={styles.statusLabel}>Status</Text>
                  <Text style={[
                    styles.statusValue,
                    { color: item.status === 'Normal' ? '#4CAF50' : '#FFA000' }
                  ]}>
                    {item.status}
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.detailsButton}>
                <Text style={styles.detailsButtonText}>View Details</Text>
                <FontAwesome name="chevron-right" size={12} color="#2f95dc" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Analysis Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Analysis Summary</Text>
          <View style={styles.summaryCard}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Average Angle</Text>
              <Text style={styles.summaryValue}>17°</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Best Measurement</Text>
              <Text style={styles.summaryValue}>15°</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Progress</Text>
              <Text style={[styles.summaryValue, { color: '#4CAF50' }]}>Improving</Text>
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
  section: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  chartCard: {
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
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  chartLegend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 5,
  },
  legendText: {
    fontSize: 12,
    color: '#666',
  },
  filterContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    padding: 5,
  },
  filterText: {
    marginLeft: 5,
    color: '#666',
    fontSize: 14,
  },
  historyCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
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
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    marginLeft: 5,
    color: '#333',
    fontSize: 16,
  },
  timeText: {
    color: '#666',
    fontSize: 14,
  },
  historyContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  angleContainer: {
    flex: 1,
  },
  statusContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  angleLabel: {
    color: '#666',
    fontSize: 14,
    marginBottom: 5,
  },
  angleValue: {
    color: '#2f95dc',
    fontSize: 18,
    fontWeight: '600',
  },
  statusLabel: {
    color: '#666',
    fontSize: 14,
    marginBottom: 5,
  },
  statusValue: {
    fontSize: 18,
    fontWeight: '600',
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  detailsButtonText: {
    color: '#2f95dc',
    fontSize: 14,
    marginRight: 5,
  },
  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
}); 