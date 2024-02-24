let newAttraction = document.createElement('li');

newAttraction.id = 'vespa';
newAttraction.innerHTML = 'Rent a Vespa';

let newAttraction1 = document.createElement('li');
newAttraction.class = 'abc'
newAttraction1.id = 'BMV';
newAttraction1.innerHTML = 'Ride BMW';

document.getElementById('italy-attractions').appendChild(newAttraction);
document.getElementById('italy-attractions').appendChild(newAttraction1);
/*
let elementToRemove = document.getElementById('vespa');
document.getElementById('italy-attractions').removeChild(elementToRemove); */