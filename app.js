import fs from 'fs';
import Ajv from 'ajv';
import {request} from './schemas/request.js';

const schemaValidator = new Ajv();
const validate = schemaValidator.compile(request);

const rawDataFilePath = './data/SspId_OpenRtbReq.json';
const resultFilePath = './data/result.csv'

const withError = [];

const validateRequest = (object) => {
  return validate(object) ? undefined : validate.errors;
}

function pushError(id, error) {
  const existIndex = withError.findIndex(e => e.id === id)
  if(existIndex >= 0){
    if(!withError[existIndex].error.some(e => e === error)){
      withError[existIndex].error.push(error)
    }

    withError[existIndex].amount += 1;
    return;
  }

  withError.push({
    id,
    error: [error],
    amount: 1
  })
}

function getErrorString(errorObj) {
  // {
  //   instancePath: '/imp/0/bidfloor',
  //   schemaPath: '#/properties/imp/items/properties/bidfloor/type',
  //   keyword: 'type',
  //   params: { type: 'number' },
  //   message: 'must be number'
  // }

  const errorPath = errorObj.schemaPath
  .replace(new RegExp(/\/properties/g), '')
  .replace(new RegExp(/\/items/g), '/[items]')
  .replace(new RegExp(/\/type/g), '/{type}')
  return `${errorPath} ${errorObj.message}`;
}

;(async () => {
  const readFile = await fs.promises.readFile(rawDataFilePath, {encoding: 'utf-8'});
  const data  = JSON.parse(readFile);

  for (const i of data) {
    const validareResult = validateRequest(JSON.parse(i.OpenRtbReq))

    if(!validareResult || !validareResult.length){
      continue;
    }

    if(validareResult.length > 1){
      for (const e of validareResult){
        pushError(i.SspId, getErrorString(e))
      }
    } else {
      pushError(i.SspId, getErrorString(validareResult[0]))
    }
  }

  if(withError.length > 0){
    const resultFileHeader = 'SSP_ID,ERROR,AMOUNT\n';
    const resultFileContent = withError.map(i => `${i.id},${i.error.join(';')},${i.amount}`).join('\n')
    await fs.promises.writeFile(resultFilePath, resultFileHeader + resultFileContent)
  }

  console.log('done');
})();
