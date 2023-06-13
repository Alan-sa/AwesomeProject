import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

import styles from './nearbyjobs.style';
import {COLORS} from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';

const NearbyJobs = ({navigation}) => {
  const {data, isLoading, error} = useFetch('search', {
    query: 'React Native Developer',
    page: 1,
    num_pages: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
          data?.map(job => (
            <NearbyJobCard job={job} key={'nerby-job-' + job?.job_id} />
          ))
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
