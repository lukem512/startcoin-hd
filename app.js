var startcore = require('startcore');
var HierarchicalKey = startcore.HierarchicalKey;
var Address = startcore.Address;
var networks = startcore.networks;
var coinUtil = startcore.util;

var seed = 'Your seed goes here';

var knownBytes = coinUtil.sha256(seed);
var hkey = HierarchicalKey.seed(knownBytes);

var derived = hkey.derive('m/0\'/0/0');
var priv = new bitcore.PrivateKey(networks.livenet.privKeyVersion, derived.eckey.private, derived.eckey.compressed);
var wif = priv.toString();

console.log('Using seed: ' + seed);
console.log('Private key in WIF: ' + wif);
