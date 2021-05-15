import React from 'react';

export default function Marketing(){
    return(
    <div class= "main-div">
      <div class= "inner-div">
        <h1 class= "question" > Q1.Average Catogory of Adult and juniors </h1>
        <li> <input type="radio" name="gender" class = "answer" for="ans1" id="option1" /> Answer Option</li>
        <li> <input type="radio" name="gender" class = "answer" for="ans2" id="option2" /> Answer Option</li>
        <li> <input type="radio" name="gender" class = "answer" for="ans3" id="option3" /> Answer Option</li>
        <li> <input type="radio" name="gender" class = "answer" for="ans4" id="option4" /> Answer Option</li>
        <button id= "submit">Submit</button>
      </div>
      

    </div>
  );
}

const quizDB = [
  {
    question: "Q1:What is the full form of HTML?",
    a:"hello",
    b:"mello",
    c:"cello",
    d:"bolerro",
    ans:"ans4"
  },
{
  question: "Q1:What is the full form of HTML?",
    a:"hello",
    b:"mello",
    c:"cello",
    d:"bolerro",
    ans:"ans4"

},
{
  question: "Q1:What is the full form of HTML?",
    a:"hello",
    b:"mello",
    c:"cello",
    d:"bolerro",
    ans:"ans4"

},
{
  question: "Q1:What is the full form of HTML?",
    a:"hello",
    b:"mello",
    c:"cello",
    d:"bolerro",
    ans:"ans4"

},
];

const question = document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');
const submit= document.querySelector('#submit');

