import React from 'react';
//import ReactDOM from 'react-dom';


function IngredientsList(props){
return React.createElement(
"ul",
{className: "ingredients" },
props.items.map((ingredient, i) =>
React.createElement("li", {key: i }, ingredient)
)
);
}


export default IngredientsList;
