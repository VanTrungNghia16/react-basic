import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  handleOnclickDelete = (job) => {
    console.log('check handleOnclickDelete', job);
    this.props.deleteAJob(job); // func as props
  }

  render() {
    /*
        JSX => return block
        <React.Fragment>
    */
    // console.log(">>> Check render:", this.state);

    //   let name = this.props.name;
    //   let age = this.props.age;
    let { jobs } = this.props;
    let { showJobs } = this.state;
    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    // console.log(">>> Check showJobs:", check);

    // console.log(">>> Check props:", this.props);
    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {jobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}$ <></> 
                    <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) => {
//   let { jobs } = props;
//   return (
//     <>
//       <div>
//         <div className="job-lists">
//           {jobs.map((item, index) => {
//             if (item.salary >= 500) {

//               return (
//                 <div key={item.id}>
//                   {item.title} - {item.salary}$
//                 </div>
//               );

//             }

//           })}
//         </div>
//       </div>
//     </>
//   );
// };

export default ChildComponent;
