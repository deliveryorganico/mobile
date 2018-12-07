import { AsyncStorage } from 'react-native';

const deviceStorage = {

	async loadJWT() {
	    try {
	      const value = await AsyncStorage.getItem('id_token');
	      const user = await AsyncStorage.getItem('username');

	      console.log(value,'|', user)	
	      if (value !== null) {
	        this.setState({
	          jwt: value,
			  user: user,
	          loading: false
	        });
	      } else {
	        this.setState({
	          loading: false
	        });
	      }
	    } catch (error) {
	      console.log('AsyncStorage Error: ' + error.message);
	    }
	},
  
	async saveItem(key, value) {
	    try {
	      await AsyncStorage.setItem(key, value);
	    } catch (error) {
	      console.log('AsyncStorage Error: ' + error.message);
    	}
  	},
   	async deleteJWT() {
	    try{
	      await AsyncStorage.removeItem('id_token')
	      .then(
	        () => {
	          this.setState({
	            jwt: ''
	          })
	        }
	      );
	    } catch (error) {
	      console.log('AsyncStorage Error: ' + error.message);
	    }
	},
};

export default deviceStorage;