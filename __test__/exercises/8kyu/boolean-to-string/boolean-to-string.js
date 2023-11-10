const booleanToString = (boolean) => {

    return typeof boolean !== 'boolean' ? `${boolean} is not a valid boolean.` : boolean ? 'Yes' : 'No';

};

module.exports = booleanToString;