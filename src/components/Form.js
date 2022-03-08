import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(property, event) {
    this.props.onInputChange(event, property);
  }

  render() {
    const { title, info } = this.props;
    const inputs = Object.entries(info).map(([key, value]) => (
      <label htmlFor={key}>
        {key}
        <input
          id={key}
          name={key}
          value={value}
          onChange={this.handleChange.bind(this, title)}
        />
      </label>
    ));
    return <section className={`${title}-section`}>{inputs}</section>;
  }
}

export default Form;
