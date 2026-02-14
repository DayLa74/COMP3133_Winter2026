const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"]
    },

    username: {
        type: String,
        required: [true, "Username is required"],
        minlength: [4, "Username must be at least 4 characters"],
        maxlength: [100, "Username cannot exceed 100 characters"]
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },

    address: {
        street: {
            type: String,
            required: [true, "Address is required"]
        },
        suite: {
            type: String,
            required: [true, "Suite is required"]
        },
        city: {
            type: String,
            required: [true, "City is required"],
            match: [/^[A-Za-z\s]+$/, "City must contain only alphabets and spaces"]
        },
        zipcode: {
            type: String,
            required: [true, "Zipcode is required"],
            match: [/^\d{5}-\d{4}$/, "Zipcode must be in format 12345-1234"]
        }
    },

    phone: {
        type: String,
        required: [true, "Phone is required"],
        match: [/^\d-\d{3}-\d{3}-\d{4}$/, "Phone must be in format 1-123-123-1234"]
    },

    website: {
        type: String,
        required: [true, "Website is required"],
        match: [/^https?:\/\/.+/, "Website must be valid URL (http or https)"]
    },

    company: {
        name: {
            type: String,
            required: [true, "Company name is required"]
        }
    }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
