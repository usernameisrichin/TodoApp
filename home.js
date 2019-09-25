import React,{Component} from 'react';
import { ScrollView, 
			View, 
			Text,
			StyleSheet,
			Dimensions,
			TouchableOpacity,
			TextInput,
			Image
		} from 'react-native';
var {height, width} = Dimensions.get('window');
import { Card } from 'native-base'
import { connect } from 'react-redux';
import { addTodo, deleteTodo, chechTodo, } from './reducer';


class HomeScreen extends Component{
	static navigationOptions = {
    title: 'Home',
  };
  constructor(props){
    super(props);
    this.state={
    	searchfilter: '',
    	data: [],
    };
    this.onSearch=this.onSearch.bind(this);
  }
  UNSAFE_componentWillReceiveProps(props){
  	if(props.todos){
  		this.setState({data: props.todos})
  	}
  }
  onSearch(){
  	var temp = this.state.data.filter((todo)=>{
  		return todo.title.includes(this.state.searchfilter)})
  	this.setState({data: temp});	
  }
  onChecktask(name){
  	console.log(name);
  	this.props.chechTodo(name);

  }
  onDeletePress(name){
  	this.props.deleteTodo(name);
  }
  
  render(){
  	console.log(this.props.todos);
  	console.log(this.state.data);
  	return(
  		<ScrollView style={{flex: 1}}>
  		<View style={ styles.viewstyle }>
          <TextInput  style={styles.inputBox_search}
			returnKeyType="go"
  			autoFocus={false}
      		onChangeText={(searchfilter) => this.setState({searchfilter})}
        	placeholder="Search"
          	placeholderTextColor='#808080'
          	onBlur={this.onSearch}
          	/>
	        <TouchableOpacity  onPress={ this.onSearch }>
		      <Image source={ require('./search.png') } style={{ height: 20, width: 20, marginTop: 3, marginRight: 5 }} />
		    </TouchableOpacity>    
         </View>
         <View style={{marginTop: 10}}>
         	{ this.state.data?
         		this.state.data.map((todo, index)=>{
         			return <Card key={index} style={styles.cardstyle}>
         				<Text style={{fontSize: 18, textAlign: 'center', fontWeight: '600', color: '#000000'}}>{todo.title}</Text>
         				<View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5, marginTop: 4}}>
         					<TouchableOpacity style={styles.joinbutton} onPress={this.onChecktask.bind(this,todo.title)}>
         						<Text style={styles.buttontext}>{(todo.check == true) ? "Undone" : "Done"}</Text>
         					</TouchableOpacity>
         					<TouchableOpacity style={styles.joinbutton} onPress={this.onDeletePress.bind(this, todo.title)}>
         						<Text style={styles.buttontext}>Delete</Text>
         					</TouchableOpacity>
         				</View>
         			</Card>
         		})
         		:
         		<View>
         		 	<Text style={styles.buttontext}>.......</Text>
         		</View>
         	}
         </View>
  		</ScrollView>
  		)
  }
}
const styles = StyleSheet.create({
	inputBox_search: {                                
	  color: '#000000',
	  fontSize: 18,
	  textAlignVertical: 'top',
	  textAlign: 'left',
	  marginLeft: 10,
	  paddingBottom: 6,
	},
	viewstyle: {
	  backgroundColor: 'white',
	  marginLeft: 5,
	  marginRight: 5,
	  flexDirection: 'row',
	  justifyContent: 'space-between',
	  alignSelf: 'center',
	  borderRadius: 5,
	  borderWidth: 1,
	  borderColor: '#000000',
	  marginTop: 5,
	  width: width/1.05
	},
	cardstyle:{
	  padding:10, 
	  backgroundColor: '#FFFFFF', 
	  width: width/1.1,
	  marginLeft: 10,
	  marginRight: 10,
	  borderRadius: 2,
	  flexDirection: 'column',
	  alignSelf: 'center',
	},
	joinbutton: {
      backgroundColor: '#FDD60B' ,
      borderRadius: 25,
      borderWidth: 2,
      width: 110,
      marginBottom: 20,
      marginTop: 0,
      padding: 5,
      borderColor: '#FDD60B',
    },

	buttontext: {
     textAlign: 'center',
     fontSize: 13,
     color: '#000000',
     padding: 1,
     fontWeight: '400',
	 },

})

function mapStateToProps (state) {    
  return {
      todos: state.todo_reducer.todos
  }
}
function mapDispatchToProps (dispatch) {    
  return {
    addTodo: (name, check) => dispatch(addTodo(name, check)),
    deleteTodo: (name) => dispatch(deleteTodo(name)),
    chechTodo: (name) => dispatch(chechTodo(name)),
  }
}
export default connect(mapStateToProps,
                       mapDispatchToProps,
  )(HomeScreen)