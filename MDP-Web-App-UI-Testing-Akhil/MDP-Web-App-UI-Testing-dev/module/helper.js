export const value = (element) => {
    const ATTRIBUTE_VALUE = 'value';
    return element.getAttribute(ATTRIBUTE_VALUE);
}

export const setText = async (element, text) => {
    await element.clear();
    await element.sendKeys(text);
}