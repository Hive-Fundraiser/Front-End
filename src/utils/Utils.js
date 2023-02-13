export const validateFileType = (e) => {
    console.log(e);
    var fileName = e.target.value;
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile === "jpg" || extFile === "jpeg" || extFile === "png") {
      //TO DO
      console.log("valid");
    } else {
      alert("Only jpg/jpeg and png files are allowed!");
    }
  };