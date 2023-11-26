//ParsAsync ek inbuilt fubction hota hai jo compare krke mai help keta hai...
//we will passed "schema" as a parameter here, which is compared with the client data..

// In the context of Express.js or similar web frameworks, "next"() is a function that is passed to middleware functions and is used to pass control to the next middleware or route handler in the chain.

// Here's how it typically works:

// When a request is made to a server, it goes through a series of middleware functions and route handlers.
// Each middleware or route handler has access to the next function.
// When a middleware or route handler completes its work, it can call next() to pass control to the next middleware or route handler in the sequence.
// If next() is not called, the request may get stuck, and subsequent middleware or route handlers won't be executed.
// It's a way of saying, "I'm done with my part; let the next middleware or route handler take over." It's crucial for the flow of control in an Express application.

const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    const status =422
    const message = error.errors[0].message
    const extraDetails = "Fill the details properly"

    const err ={
      status,
      message,
      extraDetails,
    }

     next(err)
   // res.status(400).json({ msg: message });
  }
};

module.exports = validate;
