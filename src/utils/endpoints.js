const DEV = {
  //
};

const PROD = {
  //
};

export const END_POINTS = process.env.NODE_ENV === 'development' ? DEV : PROD;
