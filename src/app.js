async function hello(event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello from Bharath Thatikonda' }),
    };
  }
export const handler = hello;