// var $ten_toi_la = 'ngoc thien'; // snake case
// var tuoiCuaToi2 = 20; // camel case

// var que_quan = 'hanoi';
// console.log($ten_toi_la);


var arr = [1,2,3,'thienth', false, 
				[5,6,7,'dep trai']];
var ngocThien = {
					name: 'ngoc thien',
					age: 25,
					can_nang: 50,
					an: function(){
						console.log(this.name + ' em dang an');
						this.can_nang = this.can_nang + 1;
					}
				}
var nguyenVanA = {
					name: 'nguyen van a',
					age: 35,
					can_nang: 70,
					an: function(){
						console.log(this.name + ' em dang an');
						this.can_nang = this.can_nang + 1;
					}
				}
console.log(ngocThien)
console.log(nguyenVanA)
ngocThien.an();

console.log(ngocThien)
console.log(nguyenVanA)