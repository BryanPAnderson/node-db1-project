const express = require("express")
const router = require('express').Router()
const { checkAccountId, checkAccountPayload } = require("./accounts-middleware");
const accounts = require("./accounts-model");

router.get('/', async (req, res, next) => {
  try{
    accounts.getAll()
      .then((accounts) => {
        res.status(200).json(accounts)
      })
  } catch (err) {
    next(err)
  }
})

router.get('/:id', checkAccountId(), async (req, res, next) => {
  try{
    accounts.getById(req.params.id)
      .then((account) => {
        res.status(200).json(account)
      })
  } catch (err) {
    next(err)
  }
})

router.post('/', (req, res, next) => {
  try {
    accounts.create(req.body)
      .then((account) => {
        res.staus(201).json(account)
      })
  } catch (err) {
    next(err)
  }
})

router.put('/:id', checkAccountPayload(), (req, res, next) => {
  try {
    accounts.updateById(req.params.id)
      .then((acount) => {
        res.status(201).json(account)
      })
  } catch (err) {
    next (err)
  }
});

router.delete('/:id', (req, res, next) => {
  try {
    accounts.deleteById(req.params.id)
      .then((account) => {
        res.status(202).json(account)
      })
  } catch (err) {
    next 
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: "Something went wrong in the accounts router",
    errMessage: err.message
  })
})

module.exports = router;
