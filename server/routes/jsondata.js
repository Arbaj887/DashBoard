const router = require('express').Router()


const jsondata = require('../models/json.model')

router.get('/data', async (req,res)=>{
   const data = await jsondata.find({})
   return res.json(data)
})

router.post('/filterData', async (req,res)=>{
   const { endYear,topics, sector, region, pest,   source,   country}=req.body;
   
   let query = {};
    if (endYear) query.end_year =endYear;
    if (topics) query.topic = { $regex: topics, $options: 'i' }; 
    if (sector) query.sector = { $regex: sector, $options: 'i' }; 
    if (region) query.region = { $regex: region, $options: 'i' }; 
    if (country) query.country = { $regex: country, $options: 'i' }; 
    if (pest) query.pestle = { $regex: pest, $options: 'i' }; 
    if (source) query.source = { $regex: source, $options: 'i' }; // 
      
    console.log(query)
    try {
      
        const filterData = await jsondata.find(query);
       
         
        return res.json(filterData);
    } catch (err) {
        console.log("No data available", err);
        return res.status(500).send("Server Error");
    }
})

module.exports = router;