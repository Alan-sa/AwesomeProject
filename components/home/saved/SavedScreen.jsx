import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from './savedscreen.style';
import {COLORS, SIZES} from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';
import {useSelector, useDispatch} from 'react-redux';
import {jobsSlice} from '../../store/jobsSlice';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

const SavedScreen = ({navigation}) => {
  const [selectedJob, setSelectedJob] = useState();

  const {data, isLoading, error} = useFetch('search', {
    query: 'React Native Developer',
    page: 1,
    num_pages: 1,
  });
  // const selectedJobRedux = useSelector(state => state.job.selectedJob);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <FlatList
          data={data}
          renderItem={() =>
            data?.map(job => (
              <NearbyJobCard job={job} key={'nerby-job-' + job?.job_id} />
            ))
          }
          contentContainerStyle={{columnGap: SIZES.medium}}
        />
      </View>
    </View>
  );
};

export default SavedScreen;
