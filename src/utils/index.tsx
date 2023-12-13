export const generateRandomCode = () => {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const codeLength = 4;
    let code = "";
    for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }
    return code;
  };