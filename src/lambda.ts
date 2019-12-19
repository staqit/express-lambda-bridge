import {Request, Response} from 'express';

export interface APIGatewayProxyEvent {
  method: string;
  path: string;
}

interface LambdaFunction<EventType> {
  (event: EventType, context?: any, callback?: any): Promise<any>;
}

export const createAPIGatewayProxyEventFromRequest = (request: Request): APIGatewayProxyEvent => {
  return {
    method: request.method,
    path: request.path
  };
};

export const  invokeLambdaFunction = async <EventType>(
    lambdaFunction: LambdaFunction<EventType>,
    request: Request,
    response: Response) => {
  const event = createAPIGatewayProxyEventFromRequest(request);
};
