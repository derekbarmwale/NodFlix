const router = require("express").Router();
const verify = require("../verifytoken");
const Movie = require("../models/Movie");

//POST -> CREATE
router.post("/", verify, async (req,res)=>{
    if(req.user.isAdmin){
        const newMovie = new Movie(req.body)
        try {
            const savedMovie = await newMovie.save()
            res.status(200).json(savedMovie)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You are not allowed!");
    }
})


//PUT -> UPDATE
router.put("/:id", verify, async (req, res)=>{
    if(req.user.isAdmin){
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true} );
            res.status(200).json(updatedMovie)
        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You are not allowed!")
    }
})

//DELETE -> DESTROY
router.delete("/:id", verify, async (req, res)=>{
    if(req.user.isAdmin){
        try {
            await Movie.findByIdAndDelete(req.params.id)
            res.status(200).json("The movie has been deleted......")
        } catch (error) {
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("You are not allowed!")
    }
})

// GET DETAIL VIEW
router.get("/find/:id", async (req,res)=>{
    try {
        const movie = await Movie.findById(req.params.id)
        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET RANDOM
router.get("/random",async (req,res)=>{
    const type = req.query.type
    let movie
    try {
        if(type === "series"){
            movie = await Movie.aggregate([
                {$match: {isSeries:true}},
                {$sample: {size: 1}},
            ])
        }else{
            movie = await Movie.aggregate([
                {$match: {isSeries:false}},
                {$sample: {size: 1}},
            ])
        }
        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET -> ALL MOVIES
router.get("/", verify, async (req,res)=>{
    if(req.user.id){
        const movies = await Movie.find()
        res.status(200).json(movies.reverse())
    }else{
        res.status(403).json("You are not allowed!")
    }
})

module.exports = router;