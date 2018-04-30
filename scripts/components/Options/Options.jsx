import React, {Component} from 'react';
import MultiSelect from "@kenshooui/react-multi-select";

import './Options.css';

export default class Options extends Component {
   constructor(props) {
      super(props);

      //dairy, egg, gluten, peanut, sesame, seafood, shellfish, soy, sulfite, tree nut, and wheat.
      this.state = {
         diet: [
            { id: 0, label: "Pescetarian" },
            { id: 1, label: "Laco Vegetarian" },
            { id: 2, label: "Ovo Vegetarian" },
            { id: 3, label: "Vegan" },
            { id: 4, label: "Paleo" },
            { id: 5, label: "Primal" },
            { id: 6, label: "Vegetarian" }
         ],
         selectedDiet: [],
         intolerances: [
            { id: 0, label: "Dairy" },
            { id: 1, label: "Egg" },
            { id: 2, label: "Gluten" },
            { id: 3, label: "Peanut" },
            { id: 4, label: "Sesame" },
            { id: 5, label: "Seafood" },
            { id: 6, label: "Shellfish" },
            { id: 7, label: "Soy" },
            { id: 8, label: "Sulfite" },
            { id: 9, label: "Tree Nut" },
            { id: 10, label: "Wheat" }
         ],
         selectedIntolerances: []
      };
   }

   updateDiet(selectedDiet) {
      this.setState({selectedDiet});
      this.props.updateDiet(selectedDiet);
   }

   updateIntolerances(selectedIntolerance) {
      this.setState({selectedIntolerance});
      this.props.updateIntolerances(selectedIntolerance);
   }

   render() {
      var className = this.props.display ? "options" : "none";
      return (
         <div className={className}>
            <div style={{width: "50%"}}>
               <h3>Diet</h3>
               <MultiSelect
                  items={this.state.diet}
                  selectedItems={this.state.selectedDiet}
                  onChange={(item) => this.updateDiet(item)}
                  showSelectedItems={false}
               />
            </div>

            <div style={{width: "50%"}}>
               <h3>Intolerances</h3>
               <MultiSelect
                  items={this.state.intolerances}
                  selectedItems={this.state.selectedIntolerances}
                  onChange={(item) => this.updateIntolerances(item)}
                  showSelectedItems={false}
               />
            </div>
         </div>
      );
   }
}