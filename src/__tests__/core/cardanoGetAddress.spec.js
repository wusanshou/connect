/* @flow */
import type { CardanoGetAddress } from '../../js/types';

// vectors from https://github.com/trezor/trezor-firmware/tree/master/python/trezorlib/tests/device_tests/test_msg_cardano_get_address.py

export const cardanoGetAddress = () => {
    const testPayloads: CardanoGetAddress[] = [
        {
            method: 'cardanoGetAddress',
            path: "m/44'/1815'/0'/0/0",
        },
        {
            method: 'cardanoGetAddress',
            path: [2147483697],
        },
        {
            method: 'cardanoGetAddress',
            path: "m/44'/1815'/0'/0/1",
        },
        {
            method: 'cardanoGetAddress',
            path: "m/44'/1815'/0'/0/2",
        },
    ];

    const expectedResponses = [
        {
            payload: {
                address: 'Ae2tdPwUPEZLCq3sFv4wVYxwqjMH2nUzBVt1HFr4v87snYrtYq3d3bq2PUQ',
            },
        },
        { success: false },
        {
            payload: {
                address: 'Ae2tdPwUPEZEY6pVJoyuNNdLp7VbMB7U7qfebeJ7XGunk5Z2eHarkcN1bHK',
            },
        },
        {
            payload: {
                address: 'Ae2tdPwUPEZ3gZD1QeUHvAqadAV59Zid6NP9VCR9BG5LLAja9YtBUgr6ttK',
            },
        },
    ];

    return {
        testName: 'CardanoGetAddress',
        mnemonic: 'mnemonic_12',
        testPayloads,
        expectedResponses,
    };
};
