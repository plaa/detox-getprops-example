const {device, expect: expectDetox, element, by, waitFor} = require('detox');
const {getText, getProps} = require('detox-getprops');

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should fetch element text', async () => {
    const text = await getText(element(by.id('heading')));
    expect(text).toEqual('Step One');
  });
});
