var fs = require('fs')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var multer = require('multer');
var express = require('express');

var app = express();

mongoose.connect('mongodb://localhost:27017/portfolio');

var Photos = new PhotoSchema(
    { img:
    {
        data:  Buffer, contentType: String 
    }}
);
var Photos = mongoose.model('Pics',PhotoSchema);

module.exports = Photos; 