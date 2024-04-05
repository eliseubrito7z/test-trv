/// <reference types="node" />
/// <reference types="node" />
export declare function encrypt(textToEncrypt: string): Promise<Buffer>;
export declare function decrypt(encryptedText: NodeJS.ArrayBufferView): Promise<string>;
