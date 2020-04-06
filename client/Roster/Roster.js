import React from "react";
import RosterItem from "./components/RosterItem";
import Bench from "./components/Bench";

class Roster extends React.Component {
  constructor(props) {
    super(props);
    this.state = { roster: [], rosterItem: "", bench: [], benchRender: false };
    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem() {
    if (this.state.roster.length <= 5) {
      this.setState(
        {
          roster: [...this.state.roster, this.state.rosterItem],
          rosterItem: "",
        },
        () => {
          document.getElementById("roster-input").focus();
        }
      );
    } else {
      alert("Maximum roster capacity exceeded! added to bench");
      this.setState({
        bench: [...this.state.bench, this.state.rosterItem],
        benchRender: true,
        rosterItem: "",
      });
    }
  }

  deleteItem(index) {
    var rosterCopy = this.state.roster.slice();
    console.log("rosterCopy", rosterCopy);
    console.log("index", index);
    rosterCopy.splice(index, 1);

    this.setState({ roster: rosterCopy });
  }

  updateItem(event) {
    event.preventDefault();
    this.setState({
      rosterItem: event.target.value,
    });
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <h1 id="RosterHeader"> R O S T E R // </h1>
          <div className="roster-submission-header">
            <form onSubmit={this.addItem}>
              <input
                id="roster-input"
                className="form-control roster-form"
                placeholder="Add Member"
                onChange={this.updateItem}
              />
            </form>
            <a className="rosterSubmitButton" onClick={this.addItem}>
              S U B M I T
            </a>
          </div>
          <ul className="list-group">
            <RosterItem
              rosterItem={this.state.roster}
              deleteItem={this.deleteItem}
            />
          </ul>
          <ol className="list-group">
            <Bench
              state={this.state}
              benchItem={this.state.bench}
              deleteItem={this.deleteItem}
            />
          </ol>
          <div className="col-md-10"></div>
        </div>
      </div>
    );
  }
}

export default Roster;
