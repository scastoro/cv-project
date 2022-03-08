import React from "react";
import "./App.css";
import Section from "./components/Section";
import Form from "./components/Form";
import uuid from "react-uuid";

class App extends React.Component {
  constructor() {
    super();

    this.state = /* JSON.parse(localStorage.getItem("state"))
      ? JSON.parse(localStorage.getItem("state"))
      : */ {
      info: {
        general: {
          name: "",
          email: "",
          phone: "",
        },
        education: {
          school: "",
          "title of study": "",
          date: "",
        },
        experience: {
          company: "",
          position: "",
          tasks: "",
          date: "",
        },
      },
      formDisplay: {
        generalForm: false,
        educationForm: false,
        experienceForm: false,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleFormDisplay = this.toggleFormDisplay.bind(this);
  }

  async handleInputChange(event, property) {
    const name = event.target.name;
    const value = event.target.value;
    const oldState = this.state.info[property];
    await this.setState({
      ...this.state,
      info: {
        ...this.state.info,
        [property]: {
          ...oldState,
          [name]: value,
        },
      },
    });
    // localStorage.setItem("state", JSON.stringify(this.state));
  }

  async toggleFormDisplay(displayValue, event) {
    console.log(displayValue);
    const newValue = !this.state.formDisplay.displayValue;
    await this.setState({
      ...this.state,
      formDisplay: {
        ...this.state.formDisplay,
        [displayValue]: newValue,
      },
    });
    // localStorage.setItem("state", JSON.stringify(this.state));
  }

  render() {
    const { info, formDisplay } = this.state;
    const sections = Object.entries(info).map(([key, value], index) => {
      console.log(Object.keys(formDisplay)[index]);
      const currentDisplay = Object.keys(formDisplay)[index];
      return (
        <section id={uuid()} className={key}>
          {formDisplay.currentDisplay ? (
            <Section id={uuid()} title={key} info={value} />
          ) : (
            <Form
              id={uuid()}
              title={key}
              info={value}
              onInputChange={this.handleInputChange}
            />
          )}
          <button
            onClick={this.toggleFormDisplay.bind(
              this,
              Object.keys(formDisplay)[index]
            )}
          >
            Edit
          </button>
        </section>
      );
    });
    return (
      <main>
        <h1 className="heading">My CV</h1>
        {sections}
      </main>
    );
  }
}

export default App;
