import {describe, it} from 'mocha';
import {expect} from 'chai';
import {createAPIGatewayProxyEventFromRequest} from '../src/lambda';

describe('Express request to API Gateway event', () => {
  it('has a method', () => {
    const event = createAPIGatewayProxyEventFromRequest(<any>{
      method: 'POST'
    });

    expect(event.method).equals('POST');
  });

  it('has a path', () => {
    const event = createAPIGatewayProxyEventFromRequest(<any>{
      method: 'POST',
      path: '/api/v1/users'
    });

    expect(event.path).equals('/api/v1/users');
  })
});
