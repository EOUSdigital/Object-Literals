//TODO Module 3 - Lesson 06: Object Literals

//TODO  📚 Module 3 - Lesson 06: Object Literals

//? 1️⃣ Theoretical Aspects (In-Depth Theory)

//* A. 🔹 What is an Object Literal ?
//  An object literal is simply a way of defining an object using {} braces.
//  ✅ Definition:
//  An object literal is a comma-separated list of key: value pairs inside {}.
//  ✅ Syntax Example:

const person = {
    name: 'Alice',
    age: 30,
    isStudent: false
};

//  • Keys are the property names (e.g., name, age).
//  • Values are the data associated with those keys (e.g., 'Alice', 30).

//* B. 💡 Why Use Object Literals?
//  • Group related data into one structure.
//  • Easier to organize and access information.
//  • Extremely important when working with real-world data (APIs, UIs, databases).

//* C. 🕰️ Historical Perspective
//  • Introduced in early JavaScript (pre-ES5).
//  • Became a standard way to represent structured data in memory.
//  • Forms the foundation of more complex structures like JSON (JavaScript Object Notation).

//* D. ⚡ Best Practices and Pitfalls
//  ✅ Best Practices:
//  • Use consistent key naming (camelCase is the JavaScript standard).
//  • Prefer descriptive property names (clarity beats cleverness).
//  • If using dynamic property values, ES6+ allows computed property names.
//  ⚠️ Pitfalls:
//  • Accidentally overwriting properties.
//  • Mixing data types without clear intention.

//* E. 🎲 Real-World Analogy
//  Think of an object literal like a folder:
//  • The folder name is the object variable (e.g., person).
//  • Inside, each file label is a key, and the file content is the value.

//* F. 🧩 Segmented Learning: Key Points

//? Concept                         Example
//  Create an object                { key: value }
//  Access a property               person.name or person['name']
//  Add a property                  person.job = 'developer'
//  Delete a property               delete person.age
//  Nested objects                  person.address = { city: 'NYC' }

//? 2️⃣ Inquiry and Application

//* 🧠 Quick Guided Questions:
//  • How would you add a new property called hobby to person?
//!      - Answer: To add a new property called hobby to person we must use person.hobby = 'element'.
//  • What is the difference between using dot notation (obj.key) and bracket notation (obj['key'])?
//!      - Answer: Dot notation is used for accessing object properties with valid identifier names directly, while bracket notation allows for more flexibility by enabling access to properties using string expressions and names that may contain special characters or spaces.

//* ✍️ Small Exercise:
//  Create an object called car with make, model, and year.
//  Then:
//  • Add a color property.
//  • Update the year.
//  • Delete the model property.

//* Exercise

const car = {
    make: 'Audi',
    model: 'RS6',
    year: 2024,
};

//! Solution

//* Step 1.

car.color = 'grey';

//* Step 2.

car.year = 2025;

//* Step 3.

delete car.model;


//? 3️⃣ Assessment (Short Quiz Time!)

//* Question 1 - Create an object called book with properties title and author.

const book = {
    title: 'Space',
    author: 'John Doe',
};

//* Question 2 - How would you access the title property?

//  Answer: To access the title property we ca use dot notation (book.title) or bracket notation (book['title']).

//* Question 3 - How would you remove the author property?

//  Answer: To remove the author property we must use delete book.author.

//* Example

const book2 = {
    title: 'Space',
    author: 'John Doe'
};

// Access title
console.log(book2.title);       // 'Space'
console.log(book2['title']);    // 'Space'

// Delete author
delete book2.author;

console.log(book2); // { title: 'Space' }


//? 4️⃣ Reflection

//* Why are object literals crucial for handling real-world data?

//  Answer: They are used to store collections of data, and can be used to represent complex data structures such as objects, arrays, functions, and even regular expressions. Object literals are also used to store information about a particular instance of an object, such as its state or behavior.

//* Can you think of a real-world example (besides person or car) where you could use an object?

//  Answer: We can use an object literals to store information about a person (name, nationality, age, hobby, etc), object vehicle, plane, or ship(color, model, make, fuel, etc), or organizations (warehouse, store, school, university, etc).


//TODO  📚 Why This is Important in Real-World Development:

//  • Objects are everywhere — almost everything in JavaScript is an object (even arrays and functions are objects under the hood!).
//  • State Management: Whether you're managing a shopping cart, a user profile, or a list of blog posts, you use objects to store and update data over time.
//  • Scalability: Objects allow you to scale your applications by organizing data neatly and predictably.
//  • APIs and JSON: When you work with real APIs (like Google Maps, Stripe, or Twitter), they return data in JSON — which is based directly on object literals!
//! ✅ Mastering object structures is crucial for Front-End, Back-End, and Full-Stack development.

//? 🎯 Quick Mini Quiz: Object Literals Critical Thinking

//* Exercise 1.

const movie = { title: 'Inception', director: 'Christopher Nolan' };

// 👉 How would you update the director property to 'Nolan C.' without creating a new object?

//! Answer: To update the director property to 'Nolan C.' without creating a new object I will use obj.key = 'value'.

movie.director = 'Nolan C.';
movie['director'] = 'Nolan C.';

//* Exercise 2.

const user = { name: 'Alice', email: 'alice@example.com' };

//  👉 How would you safely check if the email property exists before trying to use it?

//! Answer: To safely check if the email property exists before trying to use it we will use 'in' operator console.log('email' in user). We can use also 'hasOwnProperty()' that check user.hasOwnProperty('email) or an Optional Chaining if (user?.email) { console.log('User has an email'); }.

//* ⚡ Key Takeaways:

//? Method                          When to Use
//  'key' in obj                    Quick check if key exists anywhere in object chain
//  obj.hasOwnProperty('key')       Safer if you want only the object’s own properties
//  Optional Chaining               Elegant for safe access and modern projects

//* Exercise 3.
//  Create a dynamic object where the key name is stored in a variable:

const propertyName = 'hobby';
const value = 'cycling';

//  👉 How do you create an object with hobby: 'cycling' using the variable as the key?

//! Answer:  const obj = { [propertyName]: value };         console.log(obj); 

//* Exercise 4.

const laptop = { brand: 'Dell', specs: { ram: '16GB', cpu: 'i7' } };

//  👉 How would you access the CPU model inside the specs object?

//! Answer: To access the CPU model inside the specs object we must use obj.key.cpu.
//  Option 1: Dot Notation (cleaner when keys are valid identifiers)
//  • console.log(laptop.specs.cpu);
//  Option 2: Bracket Notation
//  • console.log(laptop['specs']['cpu']);

//* Exercise 5. (Trickier one! ⚡)

//  Suppose you delete a property:

const person2 = { name: 'John', age: 25 };
delete person.age;

//  👉 What happens if you now try to log person.age?
//  • (a) Error
//  • (b) null
//  • (c) undefined
//  • (d) 0

//! Answer: The result is (c) undefined because the value was deleted from the object.


//TODO  ✅ Part 1: Real-World Example Challenge

//* 🎯 Objective: Use everything you have learned — object creation, property access, mutation, checking, and nesting.

//? 🌍 Scenario: Student Enrollment Record
//  You are managing a student record in a university system. Here’s your starting data:

const student = {
    id: 101,
    name: 'Jane Smith',
    isEnrolled: true,
    courses: {
        math: 'A',
        science: 'B+',
    },
};

//? 🧠 Tasks:
//  1. Add a new property email with value 'jane.smith@university.edu'.
//  2. Update the science grade to 'A-'.
//  3. Add a new course history with grade 'B'.
//  4. Check if the student is enrolled.
//  5. Delete the id property.
//  6. Safely check if the student has a phone property — if not, set it to 'not provided'.

//! Solution

//* Step 1.

student.email = 'jane.smith@university.edu';

//* Step 2.

student.courses.science = 'A-';

//* Step 3.

student.courses.history = 'B';

//* Step 4.

console.log('isEnrolled' in student);

console.log(student.hasOwnProperty('isEnrolled'));

//* Step 5.

delete student.id;

//* Step 6.

if (!student?.phone) { console.log('not provided'); }

//! or

if (!student?.phone) { student.phone = 'not provided'; }


//TODO  🧪 Part 2: Question Quiz — Object Literals Deep Dive
//  Answer these as short responses or code snippets. We will review together!

//? 📘 Quiz Questions

//* Question 1. Create an object book with properties: title, author, and pages.

//! Solution:

const objectBook = {
    title: 'Direction',
    author: 'John Doe',
    pages: 500,
};

//* Question 2. What’s the difference between a method and a property in an object?

//! Solution: A property is a key–value pair that holds data inside an object. A method is a function stored as a value in an object — it defines behavior.

//* Question 3. Add a method getSummary() to book that returns a string like "Title by Author".

//! Solution:

objectBook.getSummary = () => `${objectBook.title} by ${objectBook.author}`;
console.log(objectBook.getSummary());

//! or

objectBook.getSummary = function () {
    return `${this.title} by ${this.author}`;
};

//* Question 4. How do you remove a property from an object?

//! Solution: To remove a property from an object we must use delete obj.property.

//* Question 5. What’s the output?

const obj = { a: 1 };
console.log(obj.b); // ?

//! Solution: The result is undefined because property 'b' does not exist inside of the object.

//* Question 6. How would you clone an object (shallow copy)?

//! Solution: We can use the spread method to clone an object. 

const objectBookCopy = { ...objectBook };

//* Question 7. What is the difference between bracket and dot notation?

//! Solution: Both are property accessors an they are used to access an object property. In the dot notation object.propertyName syntax, the propertyName must be a valid JavaScript identifier which can also be a reserved word. In the bracket notation object[expression] syntax, the expression should evaluate to a string or Symbol that represents the property's name.

//* Question 8. How would you check if an object has a key "email"?

//! Solution: To safely check if the email property exists before trying to use it we will use 'in' operator console.log('email' in user). We can use also 'hasOwnProperty()' that check user.hasOwnProperty('email') or an Optional Chaining if (user?.email) { console.log('User has an email'); }.

//* Question 9. Can object keys be numbers? What happens if they are?

//! Solution: Yes, object keys can be written as numbers, but JavaScript automatically converts them to strings. So obj[123] is the same as obj['123'].

//* Question 10. What will this output?

const person3 = { name: 'Sam', age: 30 };
delete person3.age;

//! Solution: The age property will be deleted from the person3 object. After deletion, 'age' in person3 will return false.

console.log('age' in person3);
