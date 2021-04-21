import React from "react"
import "./App.css"
import {floral, greenFruit, citrusFruit, stoneFruit, tropicalFruit, redFruit, blackFruit, driedFruit, herbaceous, herbal, pungentSpice,other, yeast, malolacticFermentation, oak, deliberateOxidation, fruitDevelopment, bottleAge} from "./Lexion"

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

function Title({title, type}) {
    if (title) {
      return <h5>{camelToTitle(title)}</h5>
    } else {
      return <h3>{camelToTitle(type)}</h3>
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
        <Title title={this.props.title} type={this.props.type} />
        {choices}
      </div>
    )
  }
}

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
      const length = text.length
      if (length <=512) {
        alert("Copying to clipboard was successful!\nlength is " + text.length + "/512.")
      } else {
        alert("Copying succeed but your text are longer than vivino limit 512, how about reduce?")
      }
      console.log("Copying to clipboard was successful!\n length is " + text.length)
    }, function(err) {
      console.error("Async: Could not copy text: ", err);
    });
  }


  render() {
    return <section className="container">
      <h1>Appearance</h1>
      <Choices choices={["pale", "medium", "deep"]} type="appreanceIntensity" active_choices={this.state.appreanceIntensity} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <Choices choices={["lemon-green", "lemon", "gold", "amber", "brown"]} type="whiteColor" active_choices={this.state.color} callback_on={this.colorExclusiveChoiceChange.bind(this)}/>
      <Choices choices={["pink", "salmon", "orange"]} type="roseColor" active_choices={this.state.color} callback_on={this.colorExclusiveChoiceChange.bind(this)}/>
      <Choices choices={["purple" ,"ruby", "garnet", "tawny", "brown*"]} type="redColor" active_choices={this.state.color} callback_on={this.colorExclusiveChoiceChange.bind(this)}/>
      
      <h1>Nose</h1>
      <Choices choices={["light", "medium(-)", "medium", "medium(+)", "pronounced"]} type="noseIntensity" active_choices={this.state.noseIntensity} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <Choices choices={["youthful", "developing", "fully developed", "tired/past its best"]} type="development" active_choices={this.state.development} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <h3>Aroma Characteristics</h3>
      <Choices choices={floral} title="floral" type="aromaCharacteristics" active_choices={this.state.aromaCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={greenFruit} title="greenFruit" type="aromaCharacteristics" active_choices={this.state.aromaCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={citrusFruit} title="citrusFruit" type="aromaCharacteristics" active_choices={this.state.aromaCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={stoneFruit} title="stoneFruit" type="aromaCharacteristics" active_choices={this.state.aromaCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={tropicalFruit} title="tropicalFruit" type="aromaCharacteristics" active_choices={this.state.aromaCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={redFruit} title="redFruit" type="aromaCharacteristics" active_choices={this.state.aromaCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={blackFruit} title="blackFruit" type="aromaCharacteristics" active_choices={this.state.aromaCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={driedFruit} title="driedFruit" type="aromaCharacteristics" active_choices={this.state.aromaCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={herbaceous} title="herbaceous" type="aromaCharacteristics" active_choices={this.state.aromaCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={herbal} title="herbal" type="aromaCharacteristics" active_choices={this.state.aromaCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={pungentSpice} title="pungentSpice" type="aromaCharacteristics" active_choices={this.state.aromaCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={other} title="other" type="aromaCharacteristics" active_choices={this.state.aromaCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={yeast} title="yeast" type="aromaCharacteristics" active_choices={this.state.aromaCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={malolacticFermentation} title="malolacticFermentation" type="aromaCharacteristics" active_choices={this.state.aromaCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={oak} title="oak" type="aromaCharacteristics" active_choices={this.state.aromaCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={deliberateOxidation} title="deliberateOxidation" type="aromaCharacteristics" active_choices={this.state.aromaCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={fruitDevelopment} title="fruitDevelopment" type="aromaCharacteristics" active_choices={this.state.aromaCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={bottleAge} title="bottleAge" type="aromaCharacteristics" active_choices={this.state.aromaCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      
      <h1>Palate</h1>
      <Choices choices={["dry", "off-dry", "medium-dry", "medium-sweet", "sweet", "luscious"]} type="sweetness" active_choices={this.state.sweetness} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <Choices choices={["low", "medium(-)", "medium", "medium(+)", "high"]} type="acidity" active_choices={this.state.acidity} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <Choices choices={["low", "medium(-)", "medium", "medium(+)", "high"]} type="tannin" active_choices={this.state.tannin} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <Choices choices={["low", "medium", "high"]} type="alcohol" active_choices={this.state.alcohol} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <Choices choices={["light", "medium(-)", "medium", "medium(+)", "pronounced"]} type="flavorIntensity" active_choices={this.state.flavorIntensity} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <h3>Flavor Characteristics</h3>
      <Choices choices={floral} title="floral" type="flavorCharacteristics" active_choices={this.state.flavorCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={greenFruit} title="greenFruit" type="flavorCharacteristics" active_choices={this.state.flavorCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={citrusFruit} title="citrusFruit" type="flavorCharacteristics" active_choices={this.state.flavorCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={stoneFruit} title="stoneFruit" type="flavorCharacteristics" active_choices={this.state.flavorCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={tropicalFruit} title="tropicalFruit" type="flavorCharacteristics" active_choices={this.state.flavorCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={redFruit} title="redFruit" type="flavorCharacteristics" active_choices={this.state.flavorCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={blackFruit} title="blackFruit" type="flavorCharacteristics" active_choices={this.state.flavorCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={driedFruit} title="driedFruit" type="flavorCharacteristics" active_choices={this.state.flavorCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={herbaceous} title="herbaceous" type="flavorCharacteristics" active_choices={this.state.flavorCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={herbal} title="herbal" type="flavorCharacteristics" active_choices={this.state.flavorCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={pungentSpice} title="pungentSpice" type="flavorCharacteristics" active_choices={this.state.flavorCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={other} title="other" type="flavorCharacteristics" active_choices={this.state.flavorCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={yeast} title="yeast" type="flavorCharacteristics" active_choices={this.state.flavorCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={malolacticFermentation} title="malolacticFermentation" type="flavorCharacteristics" active_choices={this.state.flavorCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={oak} title="oak" type="flavorCharacteristics" active_choices={this.state.flavorCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={deliberateOxidation} title="deliberateOxidation" type="flavorCharacteristics" active_choices={this.state.flavorCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={fruitDevelopment} title="fruitDevelopment" type="flavorCharacteristics" active_choices={this.state.flavorCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      <Choices choices={bottleAge} title="bottleAge" type="flavorCharacteristics" active_choices={this.state.flavorCharacteristics} callback_on={this.multiChoiceChange.bind(this)}/>
      
      <Choices choices={["short", "medium(-)", "medium", "medium(+)", "long"]} type="finish" active_choices={this.state.finish} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <Choices choices={["faulty", "poor", "acceptable", "good", "very good", "outstanding"]} type="quality" active_choices={this.state.quality} callback_on={this.exclusiveChoiceChange.bind(this)}/>
      <Choices choices={["too young", "can drink now, but has potential", "for ageing", "drink now: not suitable for ageing", "too old"]} type="readinessOfDrinking" active_choices={this.state.readinessOfDrinking} callback_on={this.exclusiveChoiceChange.bind(this)}/>

      <p>To click below text copy text to your clipboard~</p>
      <p onClick={this.copyToClipboard} id="text">
        Appearance: The wine is {this.state.appreanceIntensity.join(",")} {this.state.color.join(",")}<br/>
        Nose: It has a {this.state.noseIntensity.join(",")} and is {this.state.development.join(",")}. The aromas are of {this.state.aromaCharacteristics.join(",")} <br/>
        Palate: It is {this.state.sweetness.join(",")} with {this.state.acidity.join(",")} acidity, {this.state.tannin.join(",")} tannin, {this.state.alcohol.join(",")} alcohol and {this.state.body.join(",")} body. Flavors are of {this.state.flavorCharacteristics.join(",")}. It has a {this.state.flavorIntensity.join(",")} flavor intensity and {this.state.finish.join(",")} finish<br/>
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
