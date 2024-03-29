const parseError = result => {
  return {
    message: result.message || result.message || result.data,
    status: result.status,
    color: 'danger',
    errStatus: true,
    data: []
  };
};

const parseSuccess = result => {
  return {
    data: result,
    message: result.message,
    status: result.status,
    color: 'success',
    errStatus: false,
  };
};

export const parseResult = result => {
  debugger
  if (!!result) {
    if (result.status === 'error') {
      return parseError(result);
    }
    return parseSuccess(result);
  }
  return parseError({ message: 'error', status: 500 })

};

export const parseCompileResult = result => {
  return { data: result };
};
