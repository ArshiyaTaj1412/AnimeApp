import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 16,
    zIndex: 999,
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 20,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  closeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    paddingBottom: 40,
    paddingTop: 0,
    marginTop: 0,
  },
  image: {
    height: 200,
    resizeMode: 'cover',
    width: screenWidth,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    paddingHorizontal: 10,
    marginTop: 8,
  },
  textBlock: {
    paddingHorizontal: 10,
    marginTop: 0,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    marginTop: 0,
    paddingTop: 0,
    marginBottom: 0,
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
  actionButton: {
    backgroundColor: '#E5E5EA',
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 10,
  },
  buttonText: {
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 14,
  },
  shareWrapper: {
    alignItems: 'center',
    marginTop: 20,
  },
  metaBlock: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  metaLogo: {
    width: 80,
    height: 80,
    marginBottom: 12,
    borderRadius: 10,
  },
  metaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  metaSubtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
    textAlign: 'center',
  },
  metaRefreshButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  metaRefreshText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default styles;
