// app.js

// Import thư viện menu
const menuLibrary = require('./menu-library-norris');

// Sử dụng thư viện để tạo menu HTML
const menuHTML = menuLibrary.generateMenuHTML();

// In ra menu HTML
console.log(menuHTML);
