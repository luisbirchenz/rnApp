import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Platform, ActivityIndicator } from 'react-native';
import colors from '../config/colors';

import { PricingCard, Text } from 'react-native-elements';

const users = [
  {
    title: 'OnePlus 6T',
    price: '600',
    info: ['WiFiQ', 'Basic Support', 'All Features'],
    label: { title: 'GET STARTED', icon: 'flight-takeoff' }
  },    
  {
    title: 'IPhone 8',
    price: '500',
    info: ['NFC', 'Full Support', 'All Core Features'],
    label: { title: 'APPLY', icon: 'flight-takeoff' }
  },    

];

const Pricing = () => {

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
                <View>
                    {
                        users.map((u) => {
                            return (
                                <PricingCard
                                  color={colors.primary}
                                  title={u.title}
                                  price={u.price}
                                  info={u.info}
                                  button={u.label}
                              />
                            );
                        })
                    }
                </View>
        </ScrollView>
      );
};

Pricing.navigationOptions = {
  title: 'Pricing',
};

const styles = StyleSheet.create({
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.primary2,
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : null,
    color: '#27ae60',
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null,
    color: '#34495e',
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Pricing;
