module.exports = {
  friendlyName: 'Verify JWT',
  description: 'Verify a JWT token.',
  inputs: {
    req: {
      type: 'ref',
      friendlyName: 'Request',
      description: 'A reference to the request object (req).',
      required: true
    },
    res: {
      type: 'ref',
      friendlyName: 'Response',
      description: 'A reference to the response object (res).',
      required: false
    }
  },
  exits: {
    invalid: {
      description: 'Invalid token or no authentication present.',
    }
  },
  fn: function (inputs, exits) {
    var req = inputs.req
    var res = inputs.res
    if (req.header('Authorization')) {
      try{
        // console.log(process.env.JWT_KEY)
        // if one exists, attempt to get the header data
        var token = req.header('Authorization').split('Bearer ')[1]
        // if there's nothing after "Bearer", no go
        if (!token) return exits.invalid()
        // if there is something, attempt to parse it as a JWT token
        return jwt.verify(token, async function (err, payload) {
          if (err || !payload.id) return exits.invalid()
          var user = await User.findOne(payload.id)
          if (!user) return exits.invalid()
          // if it got this far, everything checks out, success
          req.user = user
          return exits.success(user)
        })
      }catch(error){
        console.log(error)
      }
      
    }
    return exits.invalid()
  }
}