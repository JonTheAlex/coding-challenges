function DNAStrand(dna){
    return dna.split('').map(element => {
      return element === 'A'?'T': element ==='G'?'C':element ==='T'?'A':element ==='C'?'G':''
    }).join('')
    }