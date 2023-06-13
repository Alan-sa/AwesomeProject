import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
// import {Stack, useRouter, useSearchParams} from 'expo-router';
import React, {useCallback, useState} from 'react';
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from '..';
import {COLORS, icons, SIZES} from '../../constants';
// import useFetch from '../../hook/useFetch';
// import {useSearchParams} from 'react-router-native';
import {useSelector} from 'react-redux';

const jobTabs = ['About', 'Qualification', 'Responsibilities'];

// const JobDetails = ({route, navigation}) => {
const JobDetails = () => {
  // const jobData = route.params;
  // const params = useSearchParams();
  // const router = useRouter();
  const isLoading = false;
  const error = null;
  const jobDetail = useSelector(state => state.jobs.selectedJob);
  // const {data, isLoading, error} = useFetch('job-details', {
  //   job_id: jobID,
  // });
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {};
  const [activeTab, setActiveTab] = useState(0);

  const dispplayTabContent = () => {
    switch (activeTab) {
      case 'Qualification':
        return (
          <Specifics
            title="Qualification"
            points={jobDetail?.job_highlights?.Qualifications ?? ['NA']}
          />
        );
      case 'About':
        return <JobAbout info={jobDetail?.job_description ?? 'NA'} />;
      case 'Responsibilities':
        return (
          <Specifics
            title="Responsibilities"
            points={jobDetail?.job_highlights?.Responsibilities ?? ['NA']}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      {/* <Stack.Screen
        options={{
          headerStyle: {backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension="60%"
              handlePress={() => {}}
            />
          ),
          headerTitle: '',
        }}
      /> */}

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>{error}</Text>
          ) : data.length == 0 ? (
            <Text>No data found</Text>
          ) : (
            <View style={{padding: SIZES.medium, paddingBottom: 100}}>
              <Company
                companyLogo={jobDetail?.employer_logo}
                jobTitle={jobDetail?.job_title}
                companyName={jobDetail?.employer_name}
                location={jobDetail?.job_country}
              />
              <JobTabs
                tabs={jobTabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {dispplayTabContent()}
            </View>
          )}
        </ScrollView>
        <JobFooter
          url={
            jobDetail?.job_google_link ??
            'https://careers.google.com/jobs/results/'
          }
        />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
