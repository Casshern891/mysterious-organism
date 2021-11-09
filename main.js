// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum,
    dna,
    mutate() {
      let i = Math.floor(Math.random() * 15);
      let base = this.dna[i];
      let newBase = returnRandBase();
      if (base === newBase) {
        newBase = returnRandBase()
      }
        this.dna[i] = newBase;
        return this.dna;
    },
    compareDNA(pAequor){
      let total = 0;
      for (let i=0; i<15; i++){
        let base1 = this.dna[i];
        let base2 = pAequor.dna[i];
        if (base1 === base2){
          total += 1;
        }
      } 
      let res = ((total / 15) * 100);
      let result = res.toFixed(2);
      console.log(`Specimen #1 and Specimen #2 have ${result}% DNA in common.`);
    },
    willLikelySurvive(){
      let total = 0;
      for (let i=0; i<15; i++){
        let base = this.dna[i];
        if (base === 'C' || base === 'G'){
          total += 1;
        }
      }
      let res = ((total / 15) * 100);
      if (res >= 60) {
        return true;
      } else {
        return false;
      }
    },
    complementStrand(){
      let compStrand = [];
      for (let i=0; i<this.dna.length; i++){
        if (this.dna[i] === 'A'){
          compStrand.push('T');
        }
        if (this.dna[i] === 'T'){
          compStrand.push('A');
        }
        if (this.dna[i] === 'G'){
          compStrand.push('C');
        }
        if (this.dna[i] === 'C'){
          compStrand.push('G');
        }
      }
      return compStrand;
    }
  }
}

const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}
console.log(survivingSpecimen[1]);
console.log(survivingSpecimen[1].complementStrand());

/*
const creature1 = pAequorFactory(1, [
'C', 'A', 'G', 'G',
'G', 'A', 'T', 'G',
'T', 'T', 'A', 'A',
'A', 'G', 'A']
);
const creature2 = pAequorFactory(2,  [
  'A', 'A', 'A', 'A',
  'G', 'C', 'G', 'G',
  'C', 'G', 'A', 'C',
  'A', 'G', 'G'
],
);
const creature3 = pAequorFactory(3, [
  'C', 'T', 'T', 'T',
  'G', 'C', 'A', 'G',
  'G', 'G', 'C', 'T',
  'T', 'C', 'T'
]
);
const creature4 = pAequorFactory(4, [
  'C', 'G', 'T', 'G',
  'A', 'T', 'G', 'T',
  'C', 'T', 'A', 'T',
  'G', 'T', 'C'
]
);
const creature5 = pAequorFactory(5, [
  'A', 'G', 'A', 'A',
  'C', 'G', 'C', 'T',
  'A', 'A', 'A', 'G',
  'T', 'A', 'T'
]
);
*/
/*
creature1.compareDNA(creature3);
creature1.compareDNA(creature4);
creature1.compareDNA(creature5);

console.log(creature1.willLikelySurvive());
console.log(creature2.willLikelySurvive());
console.log(creature3.willLikelySurvive());
console.log(creature4.willLikelySurvive());
console.log(creature5.willLikelySurvive()); 

*/