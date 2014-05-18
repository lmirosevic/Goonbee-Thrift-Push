//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;
var GoonbeeSharedThriftService_ttypes = require('./GoonbeeSharedThriftService_types')


var ttypes = module.exports = {};
if (typeof GBPushService === 'undefined') {
  GBPushService = {};
}
ttypes.ResponseStatus = {
'SUCCESS' : 0,
'GENERIC' : 1,
'MALFORMED_REQUEST' : 2,
'AUTHENTICATION' : 3,
'AUTHORIZATION' : 4,
'PHASED_OUT' : 5
};
ttypes.RangeDirection = {
'FORWARDS' : 0,
'BACKWARDS' : 1
};
ttypes.PushTokenType = {
'APNS' : 0,
'GCM' : 1
};
GBPushService.RequestError = module.exports.RequestError = function(args) {
  Thrift.TException.call(this, "GBPushService.RequestError")
  this.name = "GBPushService.RequestError"
  this.status = null;
  this.message = null;
  if (args) {
    if (args.status !== undefined) {
      this.status = args.status;
    }
    if (args.message !== undefined) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(GBPushService.RequestError, Thrift.TException);
GBPushService.RequestError.prototype.name = 'RequestError';
GBPushService.RequestError.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.status = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

GBPushService.RequestError.prototype.write = function(output) {
  output.writeStructBegin('RequestError');
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.I32, 1);
    output.writeI32(this.status);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 2);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

GBPushService.Range = module.exports.Range = function(args) {
  this.direction = null;
  this.index = null;
  this.length = null;
  if (args) {
    if (args.direction !== undefined) {
      this.direction = args.direction;
    }
    if (args.index !== undefined) {
      this.index = args.index;
    }
    if (args.length !== undefined) {
      this.length = args.length;
    }
  }
};
GBPushService.Range.prototype = {};
GBPushService.Range.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.direction = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.index = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.length = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

GBPushService.Range.prototype.write = function(output) {
  output.writeStructBegin('Range');
  if (this.direction !== null && this.direction !== undefined) {
    output.writeFieldBegin('direction', Thrift.Type.I32, 1);
    output.writeI32(this.direction);
    output.writeFieldEnd();
  }
  if (this.index !== null && this.index !== undefined) {
    output.writeFieldBegin('index', Thrift.Type.I32, 2);
    output.writeI32(this.index);
    output.writeFieldEnd();
  }
  if (this.length !== null && this.length !== undefined) {
    output.writeFieldBegin('length', Thrift.Type.I32, 3);
    output.writeI32(this.length);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

GBPushService.PushToken = module.exports.PushToken = function(args) {
  this.type = null;
  this.token = null;
  if (args) {
    if (args.type !== undefined) {
      this.type = args.type;
    }
    if (args.token !== undefined) {
      this.token = args.token;
    }
  }
};
GBPushService.PushToken.prototype = {};
GBPushService.PushToken.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.token = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

GBPushService.PushToken.prototype.write = function(output) {
  output.writeStructBegin('PushToken');
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 1);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  if (this.token !== null && this.token !== undefined) {
    output.writeFieldBegin('token', Thrift.Type.STRING, 2);
    output.writeString(this.token);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

