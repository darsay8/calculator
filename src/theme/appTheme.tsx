import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#212121',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#212121',
    justifyContent: 'flex-end',
  },
  section: {
    // borderWidth: 2,
    // borderColor: 'green',
  },

  text: {
    color: '#F1F1F0',
    fontSize: 17,
  },
  resultGroup: {},
  result: {
    color: '#F1F1F0',
    fontSize: 64,
    textAlign: 'right',
  },
  resultSmall: {
    color: 'rgba(232,239,235,0.8)',
    fontSize: 24,
    textAlign: 'right',
  },
  btnGroup: {
    // borderWidth: 2,
    // borderColor: 'green',
    marginTop: 16,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
});
