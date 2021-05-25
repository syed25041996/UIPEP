const express = require ('express');
const mongoose = require ('mongoose');
const fs = require ('fs');


const url =
  "mongodb+srv://mroggy:%40bhi%24heK@cluster0.gptau.mongodb.net/fbia?retryWrites=true&w=majority";


const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(url, options);
var conn = mongoose.connection;

conn.on("connected", function () {
  console.log("database is connected successfully");
});
conn.on("disconnected", function () {
  console.log("database is disconnected successfully");
});

conn.on("error", console.error.bind(console, "connection error:"));

var Schema = mongoose.Schema;

var fbia_ent_sample_data = new Schema({
    'ent_sample_data':[
      {
    'DatePublishFrom': String,
    'DateModified': String,
    'ItemGUID': String,
    'Type': String,
    'URL': String,
    'Title': String,
    'OGImage': String,
    'ByLine': String,
    'Blurb': String,
    'Source': String,
    'BrightcoveVideoID':String,
    'BrightcoveReferenceNumber': String,
    'YoutubeURL': String,
    'VideoEmbedCode':String,
    'Thumbnail':String
      }
    ],
    'news_sample': [
      {
        'ContentType': String,
        'Title': String,
        'PageUrl': String,
        'ItemID':String,
        'ReleaseDate': String,
        'ByLine': String,
        'RelatedImage': String,
        'Content': String,
        'ShortDescription': String,
        'VideoSource': String,
        'VideoURL': String,
        'BrighcoveReferenceID': String,
        'DailyMotionID': String,
        'IVS': String,
        'ItemModifiedWhen': String,
        'SectionName': String,
        'Multimediatype': String,
        'Tags': String,
        'IsNewYorkTime': String
      }]
  
});


const ress= require('./ress')

const app = express();

app.get('/', (req,res)=>{
    mongoose.model("fbia_data", fbia_ent_sample_data)
    const fbia_data = mongoose.model('fbia_data');
    var data = fbia_data.find({},(err,fd)=>{
    if(err){
        console.log(err);
    }
    else{
        
        // let newsSampleData=fd[0].newsSampleData[0];
        let ressArray=[]
        for (let i=0;i<fd[0].ent_sample_data.length; i++){

            let entSampleData=fd[0].ent_sample_data[i];

        let ressdata=ress.htmlDataFormateToSendToOutputFormateOfFBIA(
            entSampleData.URL,
            entSampleData.Title ,
            entSampleData.datePublishFrom,
            entSampleData.dateModified,
            entSampleData.ByLine , 
            entSampleData.OGImage , 
            entSampleData.YoutubeURL , 
            entSampleData.VideoEmbedCode,
            entSampleData.Type,
            entSampleData.BrightcoveVideoID,
            );
            ressArray.push(ressdata);
        }
        console.log(ressArray);

        fs.writeFile("ress.html",ressArray[0],(err)=>{
                if(err){
                    console.log(err);
                }else
                console.log("Saved");
            });
            
        res.send(ressArray[0]);

    }
});
})


app.listen(3000,(req, res )=>{
    console.log("server running in port 3000");
})