"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const crypto_1 = require("crypto");
const iv = (0, crypto_1.randomBytes)(16);
const key = Buffer.from(String(process.env.CRYPT_SECRET_KEY));
async function encrypt(textToEncrypt) {
    const cipher = (0, crypto_1.createCipheriv)('aes-256-ctr', key, iv);
    console.log("ENCRYPT KEY  ", key);
    const encryptedText = Buffer.concat([
        cipher.update(textToEncrypt),
        cipher.final(),
    ]);
    return encryptedText;
}
exports.encrypt = encrypt;
async function decrypt(encryptedText) {
    console.log("KEYY ", key);
    const decipher = (0, crypto_1.createDecipheriv)('aes-256-ctr', key, iv);
    const decryptedText = Buffer.concat([
        decipher.update(encryptedText),
        decipher.final(),
    ]);
    return decryptedText.toString('utf8');
}
exports.decrypt = decrypt;
//# sourceMappingURL=credentialsCrypt.js.map