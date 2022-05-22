import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/user-context';

class UserFinder extends Component {
  
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = {
      filteredUsers:[],
      searchTerm : ""
    }
  }

  searchChangeHandler = (event) => {
    this.setState({searchTerm :event.target.value});
  };

  componentDidMount(){
    this.setState({filteredUsers : this.context.users})
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) => {
          return user.name.toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase());
        })
      });
    }
  }

  render(){
    return (
      <Fragment>
        
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }

};

export default UserFinder;
