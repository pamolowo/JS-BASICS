
// QUESTION ONE
const instagramPost = new Object();
instagramPost.handleOfAuthor = '@pammsrich';
instagramPost.content = 'Flash Sales' 
instagramPost.link = 'https://google.com/search';
instagramPost.numberOfViews = 55;
instagramPost.numberOfLikes = 155;

console.log(instagramPost);


// QUESTION TWO

function instagramPosts(handleOfAuthor,content,link,numberOfViews,numberOfLikes){
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.link = link;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}

let newInstagramPost = new instagramPosts('@pammsrich', 'Election mode activated', 'https://google.com/search', 45, 14);
console.log(newInstagramPost);

let recentInstagramPost = new instagramPosts('@pammsrich', 'Voting done and dusted', 'https://google.com/search', 45, 14);
console.log(recentInstagramPost);

// QUESTION THREE
function createPerson(name, age, location){
    return{
        name : name,
        age : age,
        location: location
    }
}

const Musa = createPerson('Musa', 19,'Lekki,Lagos' );
console.log(Musa);

function scores(ENG,GOVT,LIT,CRK) {
    this.ENG = ENG;
    this.GOVT = GOVT;
    this.LIT = LIT;
    this.CRK = CRK;
}
Musa.jambScores = new scores(70,85,82,94);
console.log(Musa);

// QUESTION FOUR
// OBJECT.ASSIGN
const marvelMovie1 = {
    MovieTitle: 'Iron Man',
    Director: 'Jon Favreau',
    Year: 2008
}

const marvelMovie2 = Object.assign({},marvelMovie1);
marvelMovie2.MovieTitle = 'Iron Man 2';
marvelMovie2.Year = 2010;

console.log('after object assign')
console.log({marvelMovie1});
console.log({marvelMovie2});

// SPREAD SYNTAX
const marvelMovie3 = {...marvelMovie1}
marvelMovie3.MovieTitle = 'Thor';
marvelMovie3.Director = 'Kenneth Branagh';
marvelMovie3.Year = 2011;

console.log('after spread syntax')
console.log({marvelMovie3});

// JSON.PARSE
const marvelMovie4 = JSON.parse;
marvelMovie4.MovieTitle = 'Ant Man';
marvelMovie4.Director = 'Peyton Reed';
marvelMovie4.Year = 2015;
console.log({marvelMovie4});

// QUESTION FIVE
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
//  for (let key of Object.keys(presidentialCandidates.AAC)) {

//     console.log(presidentialCandidates.AAC[key] + ' '+ 'is the presidential candidate of AAC');
//   }


for (const key in presidentialCandidates.AAC) {
    
    console.log(key);
    console.log(presidentialCandidates.AAC + ' ' + 'is the presidential candidate of AAC');
  }

//  const names = Object.keys(presidentialCandidates);
//  console.log(names);
//  names.forEach((key) => {
//     console.log(`${key}: ${presidentialCandidates[key]}}`);
// });


// names.forEach((key, index) => {
    
//     console.log(` ${index} ${presidentialCandidates[key]} is the presidential candidate for AAC`);

// });




