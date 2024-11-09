const mongoose = require('mongoose')
const jsondataSchema=new mongoose.Schema({
    end_year  :Number,
    intensity :Number,
    sector   :String,
    topic     :String,
    insight   : String,
    url       :String,
    region    :String,
    Start_year:Number,
    impact    :String,
    added     :String,
    published :String,
    country   :String,
    relevance :Number,
    pestle    :String,
    source     :String,
    title      :String,
    likelihood :Number,
})

module.exports=new mongoose.model('jsondata',jsondataSchema)