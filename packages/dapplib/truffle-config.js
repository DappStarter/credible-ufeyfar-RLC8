require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom nasty flip spot chat crater remind proud grace sleep obscure topic'; 
let testAccounts = [
"0x1ad740125917782b1e796921f500a69446e3949af330d8e1e5473129031632f9",
"0x6ad66961306ec049643a541c333858e365ce3a5743bcb97f3cf352cdca8bff9d",
"0x9b47ff5406ec43334b27c1bab20019e12f2cf95316e86e3162625904b8968c66",
"0x2d5e1a7eb8047b0b76a7434cdb3c966e302231c8374aaad820c95535b9577b84",
"0x98476acce65f7a0a2021a8d0d4142be33ae7b580d0b6bb4819d32f1efda791c8",
"0x3b839994bbb33e129c74e8e22a01e55a6fe5a95b25b119b846da605a1d8e7f98",
"0xa88b80c135b4f375719ce3c61a708bf3b0e47993ab24fecce595eaba16e5620e",
"0xbf04f57f5e5de4320b9bf1c34676d6da61bf43ba940d9f868e4592c359b0716a",
"0x7a14c09a6005525ceb6be0d2d4fb2300ecceb34db04d00acf7dbd1ad6edbe160",
"0xe6b6b2f30940082e801ff31738ca8c838b0c31388040aa5d28d91e4c0cf46cd6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

