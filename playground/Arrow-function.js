var testData = {
firstName : 'vishal',
lastName : 'singh',
fullName : () =>{
    //return f+" "+l;
    return this.firstName+ " " +this.lastName;
},
getFullName () {
    return this.firstName+ " " +this.lastName;
}

};

//console.log(testData.fullName('Aditya', 'Birla'));
console.log(testData.getFullName());
