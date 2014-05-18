//
//  GoonbeePushService.thrift
//  Goonbee Thrift Push
//
//  Created by Luka Mirosevic on 18/05/2014.
//  Copyright (c) 2014 Goonbee. All rights reserved.
//

include "shared/GoonbeeSharedThriftService.thrift"


namespace js GBPushService
namespace cocoa GBPush


enum ResponseStatus {
    SUCCESS =               0,
    GENERIC =               1,
    MALFORMED_REQUEST =     2,
    AUTHENTICATION =        3,
    AUTHORIZATION =         4,
    PHASED_OUT =            5,
}

exception RequestError {
    1: ResponseStatus       status,
    2: optional string      message,
}

enum RangeDirection {
    FORWARDS =              0,
    BACKWARDS =             1,
}

struct Range {
    1: RangeDirection       direction,
    2: i32                  index,
    3: i32                  length,
}

enum PushTokenType {
    APNS =                  0,
    GCM =                   1,
}

struct PushToken {
    1: PushTokenType        type,
    2: string               token,
}


service GoonbeePushService extends GoonbeeSharedThriftService.GoonbeeSharedThriftService {
    /**
     * Subscribe or unsubscribe from a particular channel. Idempotent.
     */
    void                setChannelSubscriptionStatus    (1: PushToken pushToken, 2: string channel, 3: bool subscriptionStatus)

    /**
     * Get list of channels the user is subscribed to.
     */
    list<string>        subsriptions                    (1: PushToken pushToken, 2: Range range)

    /**
     * Check whether the user is subscribed on a particular channel or not.
     */
    bool                subsriptionStatus               (1: PushToken pushToken, 2: string channel)
}
