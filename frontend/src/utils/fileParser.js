export const FileParser = (file) => {
  return new Promise((resovle, reject) => {
    let fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resovle(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
