import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
    };
    
  handleChangeFirstName = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleOnClick = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Missing required params")
      return
    }
    // console.log('>>> Check data input:', this.state);
    this.props.addNewJob(     // function as props
        {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary,
        }
    )
    //  Gán lại giá trị là rỗng khi đã truyền tham số vào
    this.setState({
      title: '',
      salary: ''
    })
  };
    
    render() {
        // console.log('>>> Check State:', this.state);
    return (
      <>
        <form>
          <label htmlFor="fname">Job's title</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">salary</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleChangeSalary(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleOnClick(event)}
          />
        </form>
      </>
    );
  }
}

export default AddComponent;
