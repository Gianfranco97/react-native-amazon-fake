import React from 'react'
import {
  Container,
  Header,
  Left,
  Right,
  Icon,
  Input,
  Item,
  Content,
} from 'native-base'

import { 
  View,
  TouchableOpacity,
  Text,
} from 'react-native'
import FAIcon from 'react-native-vector-icons/FontAwesome'

export default props => (
  <Container>
    <Header style={{
      backgroundColor: "#3a455c",
      height: 90,
      borderBottomColor: "#757575",
      borderBottomWidth: 0.5,
    }}>
      <Left style={{ flexDirection: 'row'}}>
        <Icon 
          name="md-menu" 
          style={{ color: 'white', marginRight: 15 }}
        />
        <FAIcon name="amazon" style={{ fontSize: 32, color: "white" }} />
      </Left>
      <Right>
        <Icon 
          name="md-cart" 
          style={{ color: 'white' }}
        />
      </Right>
    </Header>

    <View style={{
      position: 'absolute',
      left: 0, 
      right: 0,
      top: 90,
      height: 70,
      backgroundColor: '#3a455c',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 5,
    }}>
      <TouchableOpacity>
        <View style={{
          width: 100,
          backgroundColor: '#e7e7eb',
          height: 50,
          borderRadius: 4,
          padding: 10,
        }}>
          <Text style={{fontSize: 12}}>
            Shop by
          </Text>
          <Text style={{fontWeight: 'bold'}}>
            Category
          </Text>
        </View>
      </TouchableOpacity>

      <View style={{
        flex: 1,
        height: "100%",
        marginLeft: 5,
        justifyContent: 'center',
      }}>
        <Item style={{
          backgroundColor: 'white',
          paddingHorizontal: 10,
          borderRadius: 4,
        }}>
          <Icon 
            name="search"
            style={{
              fontSize: 20,
              paddingTop: 5,
            }}
          />
          <Input placeholder="Search"/>
        </Item>
      </View>
    </View>

    <Content style={{
      backgroundColor: '#d5d5d6',
      marginTop: 70,
    }}>
      <View style={{
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Text>Hello, Varun Nath</Text>

        <View style={{
          flexDirection: 'row',
        }}>
          <Text>Your Account </Text>
          <Icon name="arrow-forward" style={{ fontSize: 18 }}/>
        </View>
      </View>
    </Content>

  </Container>
)
