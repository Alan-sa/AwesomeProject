import {useState} from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import {COLORS, icons, images, SIZES} from '../../constants';
// import {COLORS, icons, images, SIZES} from '../../../constants';
// import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../home';
import {Nearbyjobs, Popularjobs, Welcome} from '../index';
const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.medium,
          }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              // router.push('/search/' + searchTerm);
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
