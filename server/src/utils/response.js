exports.success = (res, data, message = 'Success') => {
    return res.json({
      success: true,
      message,
      data
    });
  };
  
  exports.error = (res, message = 'Error', status = 400) => {
    return res.status(status).json({
      success: false,
      message
    });
  };