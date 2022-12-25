export const fileToDataUrl = file => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.addEventListener('load', evt => {
      console.log(evt.currentTarget.result)
      resolve(evt.currentTarget.result);
    });

    fileReader.addEventListener('error', evt => {
      reject(new Error(evt.currentTarget.error));
    });

    fileReader.readAsDataURL(file);
  });
}
