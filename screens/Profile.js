import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { List, ListItem,Header } from 'react-native-elements'

const list = [
    {
      title: 'User',
      icon: 'person'
    },
    {
      title: 'Manage payment methods',
      icon: 'payment'
    },
    {
        title: 'Manage address',
        icon: 'place'
    },
    {
        title: 'Contact Us',
        icon: 'inbox'
    }
  ]
export default class ProfileScreen extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header
                    centerComponent={{ text: 'PROFILE', style: { color: '#fff' } }}
                    outerContainerStyles={{ backgroundColor: '#FFC107' }}
                />
                <List>
    {
    list.map((item) => (
      <ListItem
        key={item.title}
        title={item.title}
        leftIcon={{name: item.icon}}
      />
    ))
    }
                </List>
            </React.Fragment>
        )}
    }
