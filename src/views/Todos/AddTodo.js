import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };
  handeOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleClickAddTodo = () => {
    if (!this.state.title) {
      toast.error("Missing title");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;

    return (
      <>
        <div className="add-todo">
          <input
            type="text"
            value={title}
            onChange={(event) => this.handeOnChangeTitle(event)}
          />
          <button
            type="button"
            className="add"
            onClick={() => this.handleClickAddTodo()}
          >
            Add
          </button>
        </div>
      </>
    );
  }
}

export default AddTodo;
