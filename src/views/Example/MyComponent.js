import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  // state global
  state = {
    arrJobs: [
      { id: "abcJob1", title: "Developer", salary: "500" },
      { id: "abcJob2", title: "Tester", salary: "400" },
      { id: "abcJob3", title: "Project Manager", salary: "1000" },
    ],
  };

  addNewJob = (job) => {
    // console.log('>>> check job from parents: ', job);
    let currentJobs = this.state.arrJobs;
    currentJobs.push(job);
    
    this.setState({
      // arrJobs: [...this.state.arrJobs, job]
      arrJobs: currentJobs
    })
  }
  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter(item => { return item.id !== job.id })
    this.setState({
      arrJobs: currentJobs
    })
  }

  render() {
    /*
        JSX => return block
        <React.Fragment> 
    */
    // console.log(">>> Check render:", this.state);
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        {/* name, age, ... => props */}
        <ChildComponent
          jobs={this.state.arrJobs}
          deleteAJob = {this.deleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;
