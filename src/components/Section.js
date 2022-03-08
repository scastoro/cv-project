import React from "react";

class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, info } = this.props;
    const inputs = Object.values(info).map((value) => <p>{value}</p>);
    return (
      <section className={`${title}-section`}>
        <h2>{title}</h2>
        {inputs}
      </section>
    );
  }
}

export default Section;
