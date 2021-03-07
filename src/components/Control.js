import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
class Control extends Component {
  render(){
    return (
          <div class="row mt-15">
              {/*Search*/}
                <Search onSearch={this.props.onSearch}/>
              {/*Sort*/}
                <Sort 
                onSort={this.props.onSort}
                sorrBy={this.props.sorrBy}
                sortValue={this.props.sortValue}
                />
          </div>
    );
}
}

export default Control;