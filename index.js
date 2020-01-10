const inquirer = require('inquirer');
const axios = require('axios')
const generateHTML = require("./generateHTML");
const html = new generateHTML;
const pdf = require('html-pdf');
const options = { format: 'Letter' };


function Template() {}

Template.prototype.getUsername = function(){

    inquirer.prompt([
        {
            name: 'username',
            type: 'input',
            message: 'what is your username?'
        },
        {
            name: 'color',
            type: 'list',
            message:'what is your favorite color?',
            choices:[
                'green',
                'blue',
                'pink',
                'red'
            ]
        }
    
        ]).then(function({username, color}){
        const githubName = username;

        axios
        .get(`https://api.github.com/users/${githubName}`)
        .then(function(res){
            createpdf(res, color);
                    function createpdf(){
                        const newHTML = html.generateHTML(res, color);
                        pdf.create(newHTML, options).toFile('newpdf.pdf', function(err, res) {
                            if (err) return console.log(err);
                            console.log(res);
                        });
                    }
                });
              }).catch(function(err){
                if (err){
                    throw err;
                }
            })
        } 


const me = new Template()
me.getUsername()
module.exports = Template;