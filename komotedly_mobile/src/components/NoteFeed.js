import React from 'react';
import { FlatList, View, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

import NoteComponent from './Note';



// FeedView styled-component definition
const FeedView = styled.View`
  height: 100;
  overflow: hidden;
  margin-bottom: 10px;

`;

const Separator = styled.View`
  height: 1;
  width: 100%;
  background-color: orange;
`;

const NoteFeed = props => {
  return (
    <View>
      <FlatList
        data={props.notes}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Note', {
                id: item.id
              })
            }
          >
            <FeedView>
              <NoteComponent note={item} />
            </FeedView>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NoteFeed;
