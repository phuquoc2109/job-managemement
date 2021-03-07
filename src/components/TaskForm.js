import React, { Component } from 'react';

class TaskForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      id : '',
      name : '',
      status : false
    }
  }

  componentWillMount (){
    if(this.props.task){
      this.setState({
        id : this.props.task.id,
        name : this.props.task.name,
        status : this.props.task.status
      })
    }
  }
  componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.task) {
        this.setState((prevState, props) => ({
            id: nextProps.task.id,
            name: nextProps.task.name,
            status: nextProps.task.status
        }))
      }else if(!nextProps.task){
        this.setState({
          id : '',
          name : '',
          status : false
        })
      }
    }


  onCloseForm = () =>{
    this.props.onCloseForm();
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if(name === 'status'){
      value = target.value === 'true' ? true:false;
    }
    this.setState({
      [name] : value
    })
  }

  onSubmit = (event) =>{
    event.preventDefault();
    this.props.onSubmit(this.state);
    // Cancel & Close Form
    this.onClear();
    this.onCloseForm();
  }

  onClear = () =>{
    this.setState({
      name : '',
      status : false
    })
  }

  render(){
    var {id} = this.state;
    return (
       <div class="panel panel-warning">
           <div class="panel-heading">
             <h3 class="panel-title">
                {id !== '' ? 'Cập Nhật Công Việc' : 'Thêm Công Việc' }
                <span className="fa fa-times-circle text-right"
                onClick ={this.onCloseForm }
                ></span>
             </h3>
           </div>
           <div class="panel-body">
             <form onSubmit={this.onSubmit}>
               <div className="form-group">
                  <lable>Tên : </lable>
                  <input 
                  type="text"
                  className="form-control"
                  name="name" 
                  value={this.state.name}
                  onChange={this.onChange} 
                  />
               </div>
                  <lable>Trạng thái : </lable>
                  <select 
                  className="form-control"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  >
                      <option value={true}>Kích Hoạt</option>
                      <option value={false}>Ẩn </option>
                  </select>
                  <div className="text-center mt-15">
                    <button type="submit" className="btn btn-warning ">
                    <span className="fa fa-plus mr-5"></span>
                     Lưu Lại</button>&nbsp;
                    <button type="button" 
                    className="btn btn-danger"
                    onClick={this.onClear}
                    >
                    <span className="fas fa-times"></span>
                     Huỷ Bỏ</button>
                  </div>
             </form>
           </div>
         </div>
    );
}
}

export default TaskForm;