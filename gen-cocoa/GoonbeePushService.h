/**
 * Autogenerated by Thrift Compiler (0.9.1)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */

#import <Foundation/Foundation.h>

#import "TProtocol.h"
#import "TApplicationException.h"
#import "TProtocolException.h"
#import "TProtocolUtil.h"
#import "TProcessor.h"
#import "TObjective-C.h"
#import "TBase.h"

#import "GoonbeeShared.h"

enum GBPushPushTokenType {
  PushTokenType_APNS = 0,
  PushTokenType_GCM = 1
};

@interface GBPushPushToken : NSObject <TBase, NSCoding> {
  int __type;
  NSString * __token;

  BOOL __type_isset;
  BOOL __token_isset;
}

#if TARGET_OS_IPHONE || (MAC_OS_X_VERSION_MAX_ALLOWED >= MAC_OS_X_VERSION_10_5)
@property (nonatomic, getter=type, setter=setType:) int type;
@property (nonatomic, retain, getter=token, setter=setToken:) NSString * token;
#endif

- (id) init;
- (id) initWithType: (int) type token: (NSString *) token;

- (void) read: (id <TProtocol>) inProtocol;
- (void) write: (id <TProtocol>) outProtocol;

- (void) validate;

#if !__has_feature(objc_arc)
- (int) type;
- (void) setType: (int) type;
#endif
- (BOOL) typeIsSet;

#if !__has_feature(objc_arc)
- (NSString *) token;
- (void) setToken: (NSString *) token;
#endif
- (BOOL) tokenIsSet;

@end

@protocol GBPushGoonbeePushService <NSObject>
- (void) setChannelSubscriptionStatus: (GBPushPushToken *) pushToken channel: (NSString *) channel subscriptionStatus: (BOOL) subscriptionStatus;  // throws GBSharedRequestError *, TException
- (NSMutableArray *) subscribedChannels: (GBPushPushToken *) pushToken range: (GBSharedRange *) range;  // throws GBSharedRequestError *, TException
- (BOOL) subsriptionStatus: (GBPushPushToken *) pushToken channel: (NSString *) channel;  // throws GBSharedRequestError *, TException
@end

@interface GBPushGoonbeePushServiceClient : NSObject <GBPushGoonbeePushService> {
  id <TProtocol> inProtocol;
  id <TProtocol> outProtocol;
}
- (id) initWithProtocol: (id <TProtocol>) protocol;
- (id) initWithInProtocol: (id <TProtocol>) inProtocol outProtocol: (id <TProtocol>) outProtocol;
@end

@interface GBPushGoonbeePushServiceProcessor : NSObject <TProcessor> {
  id <GBPushGoonbeePushService> mService;
  NSDictionary * mMethodMap;
}
- (id) initWithGoonbeePushService: (id <GBPushGoonbeePushService>) service;
- (id<GBPushGoonbeePushService>) service;
@end

@interface GBPushGoonbeePushServiceConstants : NSObject {
}
@end
