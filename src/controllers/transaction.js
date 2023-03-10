const express = require('express')
const { route } = require('express/lib/application')

const router = express.Router()

const Transaction = require('../models/transaction')

router.get('/', async (req,res)=>{
    const transactions = await Transaction.find()
    return res.send({"transactions": transactions})
})

router.post('/', async (req,res)=>{

    const transaction  = req.body

    const newTransaction = await Transaction.create(transaction)

    console.log(newTransaction)

    return res.send("Add new transaction !")
})

router.get('/summary', async (req,res)=>{
    const transactions = await Transaction.find()
    
    const total = transactions.reduce((prev, curr) => {
        return prev + curr.value
    },0)

    return res.send({"summary": total})
})


module.exports = app => app.use('/transaction', router)