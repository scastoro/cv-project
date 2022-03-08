import React from "react";
import uuid from "react-uuid";

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
      <label key={key} htmlFor={key} className={`${title}-${key}-label`}>
        {key}
        <input
          className={`${title}-${key}-input`}
          key={key}
          id={key}
          name={key}
          value={value}
          onChange={this.handleChange.bind(this, title)}
        />
      </label>
    ));
    return (
      <section className={`${title}-section`}>
        <h2 className={`${title}-heading`}>{title}</h2>
        {inputs}
      </section>
    );
  }
}

export default Form;
