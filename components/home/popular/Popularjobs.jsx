import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from './popularjobs.style';
import {COLORS, SIZES} from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';
import {useSelector, useDispatch} from 'react-redux';
import {jobsSlice} from '../../store/jobsSlice';

const Popularjobs = ({navigation}) => {
  // const router = useRouter();
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
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text style={styles.errorText}>Error fetching data</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                key={'popular-job-' + item?.job_id}
                handleCardPress={() => {
                  dispatch(jobsSlice.actions.setSelectedJob(item));
                  // router.push(`/job-details/${item.job_id}`);
                  // setSelectedJob(item);
                  // console.warn('jobDetail', jobDetail);

                  navigation.navigate('JobDetail');
                }}
              />
            )}
            // keyExtractor={item => item?.job_id}
            horizontal
            contentContainerStyle={{columnGap: SIZES.medium}}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
