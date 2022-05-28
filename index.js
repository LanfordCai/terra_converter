import { RawKey } from '@terra-money/terra.js';
import CryptoJS from 'crypto-js'

const PRIVATE_KEY = ("YOUR_HEX_PRIVATE_KEY").toLowerCase()
const PASSWORD = "YOUR_WALLET_PASSWORD"
const WALLET_NAME = "YOUR_WALLET_NAME"

const encrypt = (message, password) => {
  const keySize = 256
  const iterations = 100
  try {
    const salt = CryptoJS.lib.WordArray.random(128 / 8)
    const key = CryptoJS.PBKDF2(password, salt, {
      keySize: keySize / 32,
      iterations,
    })

    const iv = CryptoJS.lib.WordArray.random(128 / 8)
    const encrypted = CryptoJS.AES.encrypt(message, key, {
      iv,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
    })

    const transitmessage =
      salt.toString() + iv.toString() + encrypted.toString()

    return transitmessage
  } catch (error) {
    console.log(error)
    return ''
  }
}

const key = new RawKey(Buffer.from(PRIVATE_KEY, "hex"))
const encryptedKey = encrypt(PRIVATE_KEY, PASSWORD)

const walletJson = {
  name: WALLET_NAME,
  address: key.accAddress,
  encrypted_key: encryptedKey
}
console.log("Wallet JSON is: \n" + JSON.stringify(walletJson) + "\n")

const terraKey = Buffer.from(JSON.stringify(walletJson)).toString('base64')
console.log("TERRA KEY is: \n" + terraKey + "\n")
