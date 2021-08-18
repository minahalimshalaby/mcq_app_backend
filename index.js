const config = require('config');

//mongoDB
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI).then(() => console.log('Connected to DB..'))
.catch(err => console.log("Could not connect to DB!!"));


const questionSchema = new mongoose.Schema({


      title: String,
      answers: [{}],
      checked: {

        type: Boolean,
        default: false

      },
      score: {

        type: Number,
        default: 0

      }








});

const Question = mongoose.model('Question', questionSchema)


async function createQuestion() {


  const question = new Question({

                  title: "He hopes to join ____university soon",
                  answers: [
                                 {
                                    _id: "101",
                                    text: "a",
                                    correctAnswer: true
                                    },
                                    {
                                    _id: "102",
                                    text: "the"
                                    },
                                    {
                                      _id: "103",
                                      text: "no article"
                                    },
                                      {
                                        _id: "104",
                                        text: "an"
                                      }
                              ]


                });

                 const result = await question.save();
                console.log(result);

}


async function getQuestions() {

          const questions = await Question.find().limit(10);
          console.log(questions);
}



createQuestion();

const express = require('express');

const app = express();

app.use(express.json());

// process.env.NODE_ENV='production';
console.log(process.env.NODE_ENV);

console.log(`Application Name: ${config.get('name')}`);
//console.log('Application Password: ' + config.get("password"));

app.get('/', (req, res) => {


        res.send("Hello World");

});


app.listen(5000, function () {

      console.log("Server is running on 5000 post..");

})
