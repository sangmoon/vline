import React from "react"
import "./App.css"

class Choice extends React.Component {

  click = () => {
    const next_state = !this.props.active_choices.includes(this.props.name)
    this.props.callback_on(this.props.type, this.props.name, next_state)
  }

  render() {
    const is_active = this.props.active_choices.includes(this.props.name)
    return (
    <button className={is_active ? "active": ""} onClick={this.click}>{this.props.name}</button>)
  }
}

class Choices extends React.Component {

  render() {
    const choices = this.props.choices.map(
      name => {
        return <Choice key={name} name={name} type={this.props.type} active_choices={this.props.active_choices} callback_on={this.props.callback_on}/>
      }
    )
    return (
      <div>
        <div>{this.props.type}</div>
        {choices}
      </div>
    )
  }
}

class Board extends React.Component {
  state = {
    appreanceIntensity: [],
    whiteColor: [],
    roseColor: [],
    redColor: [],
    noseIntensity: [],
    development: [],
    aromaCharacteristics: [],
    sweetness: [],
    acidity: [],
    tannin: [],
    alcohol: [],
    mousse: [],
    body: [],
    flavorIntensity: [],
    flavorCharacteristics: [],
    finish: [],
    quality: [],
    readinessOfDrinking: [],
  }

  multiChoiceChange = (type, name, is_on) => {
    is_on ? this.setState((state) => ({
      [type]: [...state[type], name]
    })) : this.setState((state) => ({
      [type]: [...state[type]].filter((x) => x !== name)
    }))
  }

  exclusiveChoiceChange = (type, name, is_on) => {
    is_on ? this.setState(() => ({
      [type]: [name]
    })) : this.setState(() => ({
      [type]: []
    }))
  }

  colorExclusiveChoiceChange = (type, name, is_on) => {
    const otherColors = ["whiteColor", "roseColor", "redColor"].filter((t) => t !== type)
    is_on ? this.setState(
      () => {
        const temp = otherColors.reduce((map, t) => {map[t]=[]; return map}, {}); 
        temp[type]=[name]; 
        return temp
      }) 
       : this.setState(() => ({
      "whiteColor": [],
      "roseColor": [],
      "redColor": []
    }))
  }

  copyToClipboard = () => {
    const text = document.getElementById("text").innerHTML.replace(/<br[^>]*>/g, "\n")
    navigator.clipboard.writeText(text).then(function() {
      console.log("Copying to clipboard was successful!\n length is " + text.length)
    }, function(err) {
      console.error("Async: Could not copy text: ", err);
    });
  }


  render() {
    return <section className="container">
      <Choices choices={["pale", "medium", "deep"]} type="appreanceIntensity" active_choices={this.state.appreanceIntensity} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <br/>
      <Choices choices={["lemon-green", "lemon", "gold", "amber", "brown"]} type="whiteColor" active_choices={this.state.whiteColor} callback_on={this.colorExclusiveChoiceChange.bind(this)}/>
      <br/>
      <Choices choices={["pink", "salmon", "orange"]} type="roseColor" active_choices={this.state.roseColor} callback_on={this.colorExclusiveChoiceChange.bind(this)}/>
      <br/>
      <Choices choices={["purple" ,"ruby", "garnet", "tawny", "brown"]} type="redColor" active_choices={this.state.redColor} callback_on={this.colorExclusiveChoiceChange.bind(this)}/>
      <br/>
      <Choices choices={["light", "medium(-)", "medium", "medium(+)", "pronounced"]} type="noseIntensity" active_choices={this.state.noseIntensity} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <br/>
      <Choices choices={["youthful", "developing", "fully developed", "tired/past its best"]} type="development" active_choices={this.state.development} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <br/>
      <Choices choices={["primary", "secondary", "tertiary"]} type="aromaCharacteristics" active_choices={this.state.aromaCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <br/>
      <Choices choices={["dry", "off-dry", "medium-dry", "medium-sweet", "sweet", "luscious"]} type="sweetness" active_choices={this.state.sweetness} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <br/>
      <Choices choices={["low", "medium(-)", "medium", "medium(+)", "high"]} type="acidity" active_choices={this.state.acidity} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <br/>
      <Choices choices={["low", "medium(-)", "medium", "medium(+)", "high"]} type="tannin" active_choices={this.state.tannin} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <br/>
      <Choices choices={["low", "medium", "high"]} type="alcohol" active_choices={this.state.alcohol} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <br/>
      <Choices choices={["delicate", "creamy", "aggressive"]} type="mousse" active_choices={this.state.mousse} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <br/>
      <Choices choices={["light", "medium(-)", "medium", "medium(+)", "pronounced"]} type="flavorIntensity" active_choices={this.state.flavorIntensity} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <br/>
      <Choices choices={["primary", "secondary", "tertiary"]} type="flavorCharacteristics" active_choices={this.state.flavorCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <br/>
      <Choices choices={["short", "medium(-)", "medium", "medium(+)", "long"]} type="finish" active_choices={this.state.finish} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <br/>
      <Choices choices={["faulty", "poor", "acceptable", "good", "very good", "outstanding"]} type="quality" active_choices={this.state.quality} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <br/>
      <Choices choices={["too young", "can drink now, but has potential", "for ageing", "drink now: not suitable for ageing", "too old"]} type="readinessOfDrinking" active_choices={this.state.readinessOfDrinking} callback_on={this.exclusiveChoiceChange.bind(this)}/>

      <p>To click below text copy text to your clipboard~</p>
      <p onClick={this.copyToClipboard} id="text">
        Appearance: The wine is {this.state.appreanceIntensity.join(",")} {this.state.whiteColor.join(",") || this.state.roseColor.join(",") || this.state.redColor.join(",")}<br/>
        Nose: It has a {this.state.noseIntensity.join(",")} and is {this.state.development.join(",")}. The aromas are of {this.state.aromaCharacteristics.join(",")} <br/>
        Palate: It is {this.state.sweetness.join(",")} with {this.state.acidity.join(",")} acidity, {this.state.tannin.join(",")} tannin, {this.state.alcohol.join(",")} alcohol and {this.state.body.join(",")} body. It has a {this.state.flavorIntensity.join(",")} flavor intensity and {this.state.finish.join(",")} finish<br/>
        Assessment of Quality: It is {this.state.quality.join(",")}<br/>
        Readiness for Drinking: {this.state.readinessOfDrinking.join(",")}
      </p>
    </section>
  }
}

function App() {
  return (
    <Board/>
  );
}

export default App;
