//
//  GoonbeeSharedThriftService.thrift
//  Goonbee Thrift Shared
//
//  Created by Luka Mirosevic on 17/04/2014.
//  Copyright (c) 2014 Goonbee. All rights reserved.
//

namespace js GBSharedThriftService
namespace cocoa GBSharedThriftService


service GoonbeeSharedThriftService {
	/**
	 * check whether the service is alive or not
	 */
	string alive();
}
