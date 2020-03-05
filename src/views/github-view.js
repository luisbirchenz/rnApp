import React, { Component, useState } from 'react';
import { Card } from 'react-native-elements';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
    TextInput,
    Dimensions,
    ScrollView,
    Image
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const GitHubView = () => {

    const [username, setUsername] = useState('');
    const [repos, setRepos] = useState([]);
    const [avatar, setAvatar] = useState('');
    const [user, setUser] = useState('');

    const handleChange = (evt) => {
        setUsername(evt.nativeEvent.text);
    }
    
    const getUserRepos = (username) => {
        username = username.toLowerCase().trim();
        const url = `https://api.github.com/users/${username}/repos`;
        return fetch(url).then((res) => res.json());
    }
    
    const handleSubmit = () => {
        getUserRepos(username)
          .then((res) => {
            setRepos(res.length === 0 ? [] : res);            
            setAvatar(res.length === 0 ? '' : res[0].owner.avatar_url);
            setUser(res.length === 0 ? '' : res[0].owner.login);
            console.log(res.length);
        });
    }
    
    const renderRepos = () => {
        return (
            <>
                <View style={styles.user}>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{ uri: avatar }}
                    />
                    <Text style={styles.name}>{user}</Text>
                </View> 
                <ScrollView>                    
                    <Card title="Repositories"> 
                    {
                        repos.length === 0 ?  <Text>No data found</Text> :
                        repos.map((repo, i) => {                                      
                            return (                            
                                <View key={i}>
                                    <Text>{i}, {JSON.stringify(repo.full_name)}</Text>
                                </View>                            
                            );
                        })
                    }
                    </Card>
                </ScrollView>
            </>
        );
      }

	return (
        <View style={styles.container}>
        <Text style={styles.label}>GitHub Username</Text>
        <TextInput
          placeholder="Enter your github username"
          style={styles.input}
          onChange={handleChange}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleSubmit}
          >
          <Text style={styles.buttonText}>VIEW REPOS</Text>
        </TouchableOpacity>
        { renderRepos() }
      </View>        
	);
}

GitHubView.navigationOptions = {
    title: 'GitHub',
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#FFFFFF',
    },
    label: {
      fontSize: 16,
      marginBottom: 6,
    },
    input: {
      width: screenWidth - 20,
      height: 38,
      padding: 4,
      fontSize: 16,
      borderColor: '#3a3a3a',
      borderWidth: 1,
      borderRadius: 8,
    },
    button: {
      height: 45,
      flexDirection: 'row',
      backgroundColor:'#263238',
      borderColor: '#263238',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 18,
      alignSelf: 'center',
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
      },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },    
  });

  export default GitHubView;
