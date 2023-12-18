const sendJsonRes = (res, statusCode, data, options) => {
    let jsonObj = {
      status: true,
      data: {
        data,
      },
    };
    if (options) {
      jsonObj = { ...options, ...jsonObj };
    }
    res.status(statusCode).json(jsonObj);
  };
  
export default sendJsonRes;
  