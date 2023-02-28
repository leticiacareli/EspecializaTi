var identify = {
    name: 'Letícia',
    lastName: 'Careli',

    fullName: function(){
        return this.name + ' ' + this.lastName;
    },

    separetorName: function(separetor){
        return this.name + separetor + this.lastName;
    }, 
};

console.log(identify.fullName());

console.log(identify.separetorName(' - '));