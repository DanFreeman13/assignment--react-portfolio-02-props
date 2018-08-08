import React, { Component } from 'react';

class EducationHistory extends React.Component {
  render() {
    return (
      <div className="degree">
        <h5 className="degree__institute">{ this.props.history.institute }</h5>
        <p className="degree__field">{ this.props.history.fieldOfStudy }</p>
        <p className="degree__dates">{ this.props.history.dates }</p>
      </div>
    );
  }
}

export default EducationHistory;
