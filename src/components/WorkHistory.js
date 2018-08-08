import React, { Component } from 'react';

class WorkHistory extends React.Component {
  render() {
    return (

          <div className="job">
            <div className="job__years">
              <h6 className="job__end">{ this.props.jobs.years.end }</h6>
              <h6 className="job__start">{ this.props.jobs.years.start }</h6>
            </div>
              <h5 className="job__title">{ this.props.jobs.title }</h5>
              <h5 className="job__company">{ this.props.jobs.company }</h5>
              <p className="job__description">{ this.props.jobs.description }</p>
          </div>

    );
  }
}

export default WorkHistory;
