import React, {Component} from 'react';
import MultiSelect from "@kenshooui/react-multi-select";

import './Options.css';

export default class Options extends Component {
   constructor(props) {
      super(props);

      //Lacto vegetarian, Ovo vegetarian, Pescetarian, Vegan, Vegetarian
      this.state = {
         diet: [
            { id: 0, prefix: "390^Pescetarian", label: "Pescetarian" },
            { id: 1, prefix: "388^Lacto vegetarian", label: "Laco Vegetarian" },
            { id: 2, prefix: "389^Ovo vegetarian", label: "Ovo Vegetarian" },
            { id: 3, prefix: "386^Vegan", label: "Vegan" },
            { id: 4, prefix: "387^Lacto-ovo vegetarian", label: "Vegetarian" }
         ],
         selectedDiet: [],
         intolerances: [
            { id: 0, prefix: "396^Dairy-Free", label: "Dairy" },
            { id: 1, prefix: "397^Egg-Free", label: "Egg" },
            { id: 2, prefix: "393^Gluten-Free", label: "Gluten" },
            { id: 3, prefix: "394^Peanut-Free", label: "Peanut" },
            { id: 4, prefix: "399^Sesame-Free", label: "Sesame" },
            { id: 5, prefix: "398^Seafood-Free", label: "Seafood" },
            { id: 6, prefix: "400^Soy-Free", label: "Soy" },
            { id: 7, prefix: "401^Sulfite-Free", label: "Sulfite" },
            { id: 8, prefix: "395^Tree Nut-Free", label: "Tree Nut" },
            { id: 9, prefix: "392^Wheat-Free", label: "Wheat" }
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