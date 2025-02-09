import { model, Schema } from 'mongoose';
import { IContact } from '../../lib';

const phoneSchema = new Schema({
    dialCode: String,
    iso2: {
        type: String,
        uppercase: true,
        max: 2
    },
    country: {
        type: String,
        uppercase: true
    },
    number: String
}, { _id: false });

const schema = new Schema({
    firstName: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE', 'TRANSGENDER']
    },
    contact: {
        email: {
            type: String,
            lowercase: true
        },
        mobileNumber: phoneSchema
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const CONTACT = model<IContact>('contact', schema);

export { CONTACT };
