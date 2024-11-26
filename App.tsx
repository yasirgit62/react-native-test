import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import Header from './src/components/header';
import PrayerCard from './src/components/prayerCard';
import ActionItems from './src/components/actionItems';
import PlayItem from './src/components/playItem';
import Quote from './src/components/quote';
import Nigunim from './src/components/nigunim';
import LiveCard from './src/components/liveCard';
import KidsCard from './src/components/kidsCard';
import DonationCard from './src/components/donationCard';
import ThankYouCard from './src/components/thankYouCard';
import BottomTabs from './src/components/bottomTabs';
import Dots from './src/components/dots';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <PrayerCard />
        <Dots />
        <ActionItems />
        <PlayItem />
        <Quote />
        <Nigunim />
        <LiveCard />
        <KidsCard />
        <DonationCard />
        <ThankYouCard />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

// https://www.loom.com/share/1a77e3dfde18467eacdcdc478acff025 ios screen recording
// https://www.loom.com/share/8144dce58b884ccb86dce76ee0563217 android screen recording