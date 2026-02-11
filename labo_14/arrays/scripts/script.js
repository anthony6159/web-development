let familieleden = ['Anna', 'Bram', 'Clara', 'David', 'Eva'];

console.log('Aantal familieleden:', familieleden.length);

console.log('Eerste:', familieleden[0]);
console.log('Derde:', familieleden[2]);
console.log('Vijfde:', familieleden[4]);

function VoegNaamToe(array) {
    let nieuweNaam = prompt('Geef een extra familienaam in:');
    array.push(nieuweNaam);
}

VoegNaamToe(familieleden);

console.log('Na toevoegen:', familieleden);

let familieString = familieleden.toString();
console.log('Array als string:', familieString);
