import { SafeAreaView } from 'react-native';
import MyText from './src/components/MyText';


function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <MyText yournameherefromprops="Felipe Leal" />
    </SafeAreaView>
  );
}



export default App;
