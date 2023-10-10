# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
----------------Question Answer-----------------
1. 
let greeting;
greetign = {};
console.log(greetign);

ans:B: ReferenceError: greetign is not defined
Description: tehre is a typographical error occured. As Javascript is case sensitive it cant match greetign with greeting variable. first the variable grrtign is declared, then the the variable an empty object is assigned in greetign variable. but as JS cant match those variables it will return reference error.

2. 
function sum(a, b) {
  return a + b;
}
sum(1, "2");
ans: c: 12
description: in case of summation in JS if only one operand  is string all the numbers & strings are concatinated. that means: in summation of string & numbers js concatinate the numbers & return like 1+"2" = 12;

3. const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };
info.favoriteFood = "🍝";
console.log(food);

ans: A: ['🍕', '🍫', '🥑', '🍔']
description: here the value of info.favoriteFood is changed to "🍝". but changing its value doesnt nesessarily change the value of food, it remains unchanged. so the value of food will be as it was before. 

4. function sayHi(name) {
  return `Hi there, ${name}`;
}
console.log(sayHi());
ans: Hi there undefined
description: here the sayHi function is called without passing any arguement. The functions expects an arguement when it is called, in this case  'name' takes undefined & will return Hi there undefined 

5. let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});
console.log(count);

ans: 3
description: from the nums array num iterates over the elemnts inside the array. it checks if the current num is truthy meaning not equal to 0 , the count variable increases by 1. so it will get 3. 

--------------/////Features & functionalities in the website/////------------
Features:
1. the website is about an educational event management website 
2. speciality of this website is adding Registration form, log in form, private route setup which opens upon getting user info.
3. Login through Google signup is an extra feature here.

Functionality: 
1. whole website is developed using vite & react. Various features of react is used to add various features in the website. 
2. special funcrionality added in the website is FIrebase Authentication Method. Its a popular authentication tool providing website builders to authenticate user info.
3. Using firebase authentication tool, the user bahaviour can be detected. if an user in not logged in the website , he doesnt get access to private routes like seeing service details, or event details, or booking info. in this case user is redirected to the log in page. here is a chance of doing  google sign in to ease the user experience. 

4. Variety of react features are used to add extra functionality in the website which made it user friendly. 