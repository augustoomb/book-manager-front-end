const checkStringIsLink = (str) => {
  // eslint-disable-next-line no-useless-escape
  const validateIsLinkRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;
  return validateIsLinkRegex.test(str);
};

export default checkStringIsLink;
