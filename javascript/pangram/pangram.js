var Pangram = function(pangramString) {
  this.string=pangramString.toLowerCase();
}

Pangram.prototype.isPangram = function() {
 var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 for(i=0;i<alphabet.length;i++){
   if(this.string.indexOf(alphabet[i]) === (-1)) {
     return false;
   }
 }
 return true;
};

module.exports = Pangram;