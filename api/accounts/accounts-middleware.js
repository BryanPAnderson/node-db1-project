exports.checkAccountPayload = (req, res, next) => {
  if (!req.body.name || !req.body.budget) {
    res.status(400).json({
      message: "name and budget are required"
    })
  } 
  if (typeof req.body.name !== "string") {
    res.status(400).json({
      message: "name of account must be a string"
    })
  }
  if (req.body.name < 3 || req.body.name > 100) {
    res.status(400).json({
      message: "name of account must be between 3 and 100"
    })
  }
  if (typeof req.body.budget !== "number" ) {
    res.status(400).json({
      message: "budget of account must be a number"
    })
  }
  if (req.body.budget < 0 || req.body.budget > 1000000) {
    res.status(400).json({
      message: "budget of account is too large or to small"
    })
  }
next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  if (req.body.name) {
    res.status(400).json({
      message: "Name already exists"
    })
  }
  next()
}

exports.checkAccountId = (req, res, next) => {
   if (!req.params.id) {
     res.status(404).json({
       message: "account not found"
     })
   }
   next()
}
