const mongoose = require('mongoose');
// var bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email address'],
        trim: true
    },
    fullname: {
        type: String,
        required: [true, 'Please enter full name'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        trim: true
    },
    service: {
        type: String,
        required: [true, 'Please enter a service'],
        trim: true
    },
    bio: {
        type: String,
        required: [false, 'Please enter bio'],
        trim: true
    },
    pic: {
        type: String,
        required: [false, 'Please enter a pic url'],
        trim: true
    },
    isServiceProvider: {
        type: Boolean,
        required: [true, 'Are you a service provider?'],
        trim: true
    },
    joindate: {
        type: Date,
        required: [true, 'Joining date?'],
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'Provide your mobile number'],
        trim: true
    },
    remainingLeaves: {
        type: String,
        required: false,
        trim: true
    },
    totalLeaves: {
        type: String,
        required: false,
        trim: true
    },
    appliedLeaves: {
        type: String,
        required: false,
        trim: true
    },
    camps: {
        type: Object,
        required: false,
        trim: true
    },
    leaves: [{
        reason: {
            type: String,
            trim: true
        },
        from: {
            type: Date,
        },
        to: {
            type: Date
        },
        status: {
            type: String
        }
    }],
    attendance: [{
        date: {
            type: Date,
            default: Date.now,
        },
        entry: { type: Date },
        exit: {
            time: {
                type: Date
            },
            // 1 - General
            // 2 - Vacation
            // 3 - Doctor
            exitType: String
        }

    }],
    payroll: [{
        month: {
            type: String,
            required: false,
            trim: true
        },
        basic: {
            type: Number,
            required: false,
            trim: true
        },
        da: {
            type: Number,
            required: false,
            trim: true
        },
        hra: {
            type: Number,
            required: false,
            trim: true
        },
        wa: {
            type: Number,
            required: false,
            trim: true
        },
        ca: {
            type: Number,
            required: false,
            trim: true
        },
        cca: {
            type: Number,
            required: false,
            trim: true
        },
        ma: {
            type: Number,
            required: false,
            trim: true
        },
        SalesIncentive: {
            type: Number,
            required: false,
            trim: true
        },
        LeaveEncashment: {
            type: Number,
            required: false,
            trim: true
        },
        HolidayWages: {
            type: Number,
            required: false,
            trim: true
        },
        SpecialAllowance: {
            type: Number,
            required: false,
            trim: true
        },
        Bonus: {
            type: Number,
            required: false,
            trim: true
        },
        IndividualIncentive: {
            type: Number,
            required: false,
            trim: true
        },
        totalEarning: {
            type: Number,
            required: false,
            trim: true
        },
    }]
}, {
    usePushEach: true
})

// UserSchema.statics.hashPassword = function hashPassword(password) {
//     return bcrypt.hashSync(password, 10);
// }

// UserSchema.statics.isValid = function(hashedPassword) {
//     return bcrypt.compareSync(hashedPassword, this.password);
// }
module.exports = mongoose.model('User', UserSchema)