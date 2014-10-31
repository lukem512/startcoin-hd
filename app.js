var startcore = require('bitcore');
var HierarchicalKey = startcore.BIP32;
var Address = startcore.Address;
var networks = startcore.networks;
var coinUtil = startcore.util;

var seed = 'Seed goes here';

var knownBytes = coinUtil.sha256(seed);
var hkey = HierarchicalKey.seed(knownBytes, 'startcoin');

var derived = hkey.derive('m/0');
var priv = new startcore.PrivateKey(networks.startcoin.privKeyVersion, derived.eckey.private, derived.eckey.compressed);
var wif = priv.toString();

console.log('Passphrase:\t\t' + seed);
console.log('Derived Private Key:\t' + derived.extendedPrivateKeyString());
console.log('Private Key (WIF):\t' + wif)
console.log('Derived Public Key:\t' + derived.extendedPublicKeyString());
console.log('Public Key (Hex):\t' + startcore.buffertools.toHex(derived.eckey.public));
console.log('Address:\t\t' + Address.fromPubKey(derived.eckey.public, 'startcoin'));