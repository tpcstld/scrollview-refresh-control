import * as React from 'react';
import {RefreshControl, ScrollView} from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView
      style={{backgroundColor: 'red', height: '100%'}}
      refreshControl={<RefreshControl refreshing={false} />}
    />
  );
}
