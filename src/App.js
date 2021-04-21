import React from "react"
import "./App.css"

function camelToTitle(str) {
  let result = str.replace( /([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

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
        <div>{camelToTitle(this.props.type)}</div>
        {choices}
      </div>
    )
  }
}

/* PRIMARY AROMAS AND FLAVOURS */
const floral = ["acacia", "honeysuckle", "chamomile", "elderflower", "geranium", "blossom", "rose", "violet"]
const greenFruit = ["apple", "gooseberry", "pear", "pear drop", "quince", "grape"]
const citrusFruit = ["grapefruit", "lemon", "lime", "orange peel", "lemon peel"]
const stoneFruit = ["peach", "apricot", "nectarine"]
const tropicalFruit = ["banana", "lychee", "mango", "melon", "passion fruit", "pineapple"]
const redFruit = ["redcurrant", "cranberry", "raspberry", "strawberry", "red cherry", "red plum"]
const blackFruit = ["blackcurrant", "blackberry", "bramble", "blueberry", "black cherry", "black plum"]
const driedFruit = ["fig", "prune", "raisin", "sultana", "kirsch", "jamminess", "baked/stewed fruits", "preserved fruits"]
const herbaceous = ["green bell pepper", "grass", "tomato leaf", "asparagus", "blackcurrant leaf"]
const herbal = ["eucalyptus", "mint", "medicinal", "lavender", "fennel", "dill"]
const pungentSpice = ["black pepper", "white pepper", "liquorice"]
const other = ["flint", "wet stones", "wet wool"]

/* SECONDARY AROMAS AND FLAVOURS */
const yeast = ["biscuit", "bread", "toast", "pastry", "brioche", "bread dough", "cheese"]
const mlf = ["butter", "cheese", "cream"]
const oak = ["vanilla", "cloves", "nutmeg", "coconut", "butterscotch", "toast", "cedar", "charred wood", "smoke", "chocolate", "coffee", "resinous"]

/* TERTIARY AROMAS AND FLAVOURS */
const deliberateOxidation = ["almond", "marzipan", "hazelnut", "walnut", "chocolate", "coffee", "toffee", "caramel"]
const fruitDevelopment = ["dried apricot", "marmalade", "dried apple", "dried banana", "fig", "prune", "tar", "dried blackberry", "dried cranberry", "cooked blackberry", "cooked red plum"]
const bottleAge = ["petrol", "kerosene", "cinnamon", "ginger", "nutmeg", "toast", "nutty", "mushroom", "hay", "honey", "leather", "forest floor", "earth", "game", "tobacco", "vegetal", "wet leaves", "savoury", "meaty", "farmyard"]

class Board extends React.Component {
  state = {
    appreanceIntensity: [],
    color: [],
    noseIntensity: [],
    development: [],
    aromaCharacteristics: [],
    sweetness: [],
    acidity: [],
    tannin: [],
    alcohol: [],
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
    is_on ? this.setState(() => ({
      color: [name]
    })) : this.setState(() => ({
      color: []
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
      <Choices choices={["lemon-green", "lemon", "gold", "amber", "brown"]} type="whiteColor" active_choices={this.state.color} callback_on={this.colorExclusiveChoiceChange.bind(this)}/>
      <br/>
      <Choices choices={["pink", "salmon", "orange"]} type="roseColor" active_choices={this.state.color} callback_on={this.colorExclusiveChoiceChange.bind(this)}/>
      <br/>
      <Choices choices={["purple" ,"ruby", "garnet", "tawny", "brown*"]} type="redColor" active_choices={this.state.color} callback_on={this.colorExclusiveChoiceChange.bind(this)}/>
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
        Appearance: The wine is {this.state.appreanceIntensity.join(",")} {this.state.color.join(",")}<br/>
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
