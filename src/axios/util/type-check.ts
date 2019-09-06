const toString = Object.prototype.toString;

// 判断参数是否为日期类型，返回类型保护
export const isDate = (value: any): value is Date => {
  return toString.call(value) === '[object Date]';
};

// 判断参数是否为对象，返回类型保护
// [] {} document 是对象
export const isObject = (value: any): value is Object => {
  return typeof value === 'object' && value !== null;
};

// 判断参数是否为普通对象（含有多个 key/value 的对象），返回类型保护
// {} 是简单对象，[] document 不是简单对象
export const isPlainObject = (value: any): value is Object => {
  return toString.call(value) === '[object Object]';
};
