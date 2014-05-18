//
//  GoonbeePushService.thrift
//  Goonbee Thrift Push
//
//  Created by Luka Mirosevic on 18/05/2014.
//  Copyright (c) 2014 Goonbee. All rights reserved.
//

include "shared/GoonbeeShared.thrift"

namespace js GBPushService
namespace cocoa GBPush

enum PushTokenType {
    APNS =                  0,
    GCM =                   1,
}

struct PushToken {
    1: PushTokenType        type,
    2: string               token,
}

service GoonbeePushService extends GoonbeeShared.BaseService {
    /**
     * Subscribe or unsubscribe from a particular channel. Idempotent.
     */
    void                setChannelSubscriptionStatus    (1: PushToken pushToken, 2: string channel, 3: bool subscriptionStatus)         throws(1: GoonbeeShared.RequestError error),

    /**
     * Get list of channels the user is subscribed to.
     */
    list<string>        subscribedChannels              (1: PushToken pushToken, 2: GoonbeeShared.Range range)                          throws(1: GoonbeeShared.RequestError error),

    /**
     * Check whether the user is subscribed on a particular channel or not.
     */
    bool                subsriptionStatus               (1: PushToken pushToken, 2: string channel)                                     throws(1: GoonbeeShared.RequestError error),
}
