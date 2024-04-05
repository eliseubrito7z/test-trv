"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordResetSchemaDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const zod_1 = require("zod");
const BasePasswordResetSchema = zod_1.z.object({
    password: zod_1.z.string().min(8),
    confirm_password: zod_1.z.string().min(8),
});
const PasswordResetSchema = BasePasswordResetSchema.superRefine(({ password }, checkPassComplexity) => {
    const containsUppercase = (ch) => /[A-Z]/.test(ch);
    const containsLowercase = (ch) => /[a-z]/.test(ch);
    const containsSpecialChar = (ch) => /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch);
    let countOfUpperCase = 0, countOfLowerCase = 0, countOfNumbers = 0, countOfSpecialChar = 0;
    for (let i = 0; i < password.length; i++) {
        const ch = password.charAt(i);
        if (!isNaN(+ch))
            countOfNumbers++;
        else if (containsUppercase(ch))
            countOfUpperCase++;
        else if (containsLowercase(ch))
            countOfLowerCase++;
        else if (containsSpecialChar(ch))
            countOfSpecialChar++;
    }
    let errObj = {
        upperCase: { pass: true, message: 'add upper case.' },
        lowerCase: { pass: true, message: 'add lower case.' },
        specialCh: { pass: true, message: 'add special ch.' },
        totalNumber: { pass: true, message: 'add number.' },
    };
    if (countOfLowerCase < 1) {
        errObj = { ...errObj, lowerCase: { ...errObj.lowerCase, pass: false } };
    }
    if (countOfNumbers < 1) {
        errObj = {
            ...errObj,
            totalNumber: { ...errObj.totalNumber, pass: false },
        };
    }
    if (countOfUpperCase < 1) {
        errObj = { ...errObj, upperCase: { ...errObj.upperCase, pass: false } };
    }
    if (countOfSpecialChar < 1) {
        errObj = { ...errObj, specialCh: { ...errObj.specialCh, pass: false } };
    }
    for (const key in errObj) {
        const { pass, message } = errObj[key];
        if (!pass) {
            checkPassComplexity.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                path: ['password', 'confirm_password'],
                message: message,
            });
        }
    }
}).refine((data) => data.password == data.confirm_password, {
    path: ['confirm_password'],
    message: "Password don't match.",
});
class PasswordResetSchemaDTO extends (0, nestjs_zod_1.createZodDto)(PasswordResetSchema) {
}
exports.PasswordResetSchemaDTO = PasswordResetSchemaDTO;
//# sourceMappingURL=password-reset.schema.js.map