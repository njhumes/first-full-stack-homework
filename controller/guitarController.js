const express = require('express');
const router = express.Router();
const Guitar = require('../models/guitarSchema');

// Index Route
router.get('/', (req, res) => {
    Guitar.find({}, (err, guitarList) => {
        if(err) {
            res.send(err)
        } else {
            res.render('index.ejs', {
                guitars: guitarList
            })
        }
    })
})

// New Route
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

// Create Route
router.post('/', (req, res) => {
    Guitar.create(req.body, (err, newGuitar) => {
        if(err){
            res.send(err)
        } else {
            res.redirect('/guitars')
        }
    })
})

// Show Route
router.get('/:id', (req, res) => {
    Guitar.findById({_id: req.params.id}, (err, showGuitar) => {
        if(err){
            res.send(err)
        } else {
            res.render('show.ejs', {
                guitar: showGuitar
            })
        }
    })
})

// Edit Route
router.get('/:id/edit', (req, res) => {
    Guitar.findById({_id: req.params.id}, (err, editGuitar) => {
        if(err){
            res.send(err)
        } else {
            res.render('edit.ejs', {
                guitar: editGuitar
            })
        }
    })
})

// Update Route 
router.put('/:id', (req, res) => {
    Guitar.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, updateGuitar) => {
        if (err) {
            res.send(err)
        } else {
            res.redirect('/guitars')
        }
    })
})

// Delete Route
router.delete('/:id', (req, res) => {
    Guitar.findByIdAndRemove({ _id: req.params.id }, (err, deletedGuitar) => {
        if (err) {
            res.send(err)
        } else {
            res.redirect('/guitars')
        }
    })
})


module.exports = router;