import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string()
        .pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .min(1)
        .max(20)
        .messages({
            'string.pattern.base': 'Не відповідні символи',
        }),
    price: Joi.number()
        .min(0)
        .max(1000000)
        .messages({
            'number.min': 'не менше 0',
            'number.max': 'не більше 1 000 000',
        }),
    year: Joi.number()
        .min(1990)
        .max(2024)
        .messages({
            'number.min': 'не раніше 1990 року',
            'number.max': 'не пізніше 2024 року',
        }),
})