interface Reportable {
  summary():string;
}


const oldCivic = {
  model: 'civic',
  year: new Date(),
  broken: true,
  summary() : string{
    return `Name ${this.model}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 400,
  summary(): string{
    return ` My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: Reportable) : void => {
  console.log(item.summary());
  
};

printSummary(oldCivic);
printSummary(drink);