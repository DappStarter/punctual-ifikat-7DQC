require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remember coast harvest force fringe giant'; 
let testAccounts = [
"0x610d7059eb4fff17252de0d84563a1614524856309d6492cde0a870de6813035",
"0x1153e9feee3ee0f4136d754b0de0df94fc71e13f01ef80730d16ad1c56ef612e",
"0x4c40517b888b66e96f757b07bd1fc08bc43979bde548265e31f8eb82808a36c4",
"0x1fe5d79f0713f1bea6488a888ee881eb6a6ca1eaf3700fe570a8284702d70246",
"0x40ea70ee953a0205c5a0720c4a4f6be03159ba24877e8c3a891b1a816cd2800f",
"0xf8a8d8f332a1f7c2d9f800076adcca0dc605f2b8fa9a16bd40a849cc10c72042",
"0xd96624723984b280a17c5e452ed0daf06c66e8f7b2c3f20955e87fa989b55db0",
"0x172f4e680bbfbb3405bb021a048d8e02b8a6936c24188ace6fbbd05a717c1e68",
"0x2ea8165951007e1134ffae557b3958c1bf98e11d22ee546a68a5cad942406d2f",
"0x5f10d72e431579b633b0f0736560ac8ae1cfc312e8d5f54756fdb2c20dc398b0"
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

