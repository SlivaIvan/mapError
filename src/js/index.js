import ErrorRepository from './error';

const errorRepository = new ErrorRepository();
const code = 404;
const description = 'Not Found';
errorRepository.addError(code, description);
