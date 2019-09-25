import React,{Component} from 'react';
import { ScrollView, 
			View, 
			Text,
			StyleSheet,
			Dimensions,
			TouchableOpacity,
      TextInput,
		} from 'react-native';
var {height, width} = Dimensions.get('window');
import { connect } from 'react-redux';
import { addTodo } from './reducer';

class AddTodo extends Component{
	static navigationOptions = {
    title: 'Home',
  };
  constructor(props){
    super(props);
    this.state={
      title: '',
    };
    this.onAddtodo = this.onAddtodo.bind(this);
  }
  onAddtodo(){
    var check = false;
    this.props.addTodo(this.state.title, check);
    
  }
  render(){
    console.log("her");
    console.log(this.props.todos);
  	return(
  		<ScrollView style={{flex: 1}}>
        <View style={styles.viewstyle}>
          <Text style={styles.textstyle}>Todo:</Text>
          <TextInput  style={styles.inputBox_search}
            returnKeyType="go"
            autoFocus={false}
            onChangeText={(title) => this.setState({title})}
            placeholder="Add Task"
            placeholderTextColor='#808080'/>
    		</View>	
        <View>
          <TouchableOpacity onPress={this.onAddtodo} style={styles.buttonstyle}>
           <Text style={styles.buttontext} >ADD TODO</Text>
          </TouchableOpacity>
        </View>   
  		</ScrollView>
  		)
  }
}
const styles = StyleSheet.create({
  textstyle:{
    fontSize: 16,
    textAlign: 'left', 
    marginLeft: 5, 
    fontWeight: 'bold',
    paddingTop: 10
  },
  inputBox_search: {                                
    color: '#000000',
    fontSize: 18,
    textAlignVertical: 'top',
    textAlign: 'left',
    fontFamily: 'Din Condensed',
    padding: 7,
    marginLeft: 10,
    width: width/1.3,
    paddingBottom: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000000',
  },
  viewstyle: {
    backgroundColor: 'white',
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flex: 1,
},
  buttonstyle:{
    width: width/1.8, 
    height: width/12, 
    backgroundColor: '#FDD60B', 
    alignSelf: 'center', 
    marginLeft: 5, 
    justifyContent: 'center', 
    borderRadius: 10,
    marginTop: width/6
  },
  buttontext:{
    fontSize: 16,
    textAlign: 'center', 
    color: '#000000', 
    fontWeight: '600', 
    margin: 1, 
    marginLeft: 10
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
  }
}
export default connect(mapStateToProps,
                       mapDispatchToProps,
  )(AddTodo)