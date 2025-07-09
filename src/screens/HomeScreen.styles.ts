import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  date: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
  },

  card: {
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  thumbnail: {
    height: 200,
    width: '100%',
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginBottom: 0,
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 12,
  },

  textContainerHeader: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    paddingHorizontal: 10,
    marginTop: 8,
  },
  refreshButton: {
    borderRadius: 16,
    backgroundColor: '#E5E5EA',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  refreshText: {
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 14,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
