const mongoose = require('../database')

const TransactionSchema = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description: {
        type: String,
        require: false
    },
    tag: {
        type: String,
        require: true
    },
    value:{
        type: Number,
        require: true
    },
    date:{
        type: Date,
        default: Date.now
    }

})

const Transaction = mongoose.model('Transaction', TransactionSchema)

module.exports = Transaction