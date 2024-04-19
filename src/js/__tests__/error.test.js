import ErrorRepository from '../error';

describe('ErrorRepository', () => {
  it('should add and translate error', () => {
    const errorRepository = new ErrorRepository();
    const code = 404;
    const description = 'Not Found';

    errorRepository.addError(code, description);

    expect(errorRepository.translate(code)).toEqual(description);
  });

  it('should return "Unknown error" for non-existing code', () => {
    const errorRepository = new ErrorRepository();
    const nonExistingCode = 500;

    expect(errorRepository.translate(nonExistingCode)).toEqual('Unknown error');
  });
});
