export const requiredValidator = {
    required: 'This Field Is Required',
};
export const phoneValidator = {
  pattern: {
    value: /^[0-9]{10}$/,
    message: 'Value Must Be A Valid Phone Number',
  },
};
export const emailValidator = {
  pattern: {
    value:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Value Must Be A Valid Email ID',
  },
};