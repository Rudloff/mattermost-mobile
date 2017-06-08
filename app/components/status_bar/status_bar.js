// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {StatusBar as NativeStatusBar} from 'react-native';
import tinyColor from 'tinycolor2';

export default class StatusBar extends PureComponent {
    static propTypes = {
        theme: PropTypes.object.isRequired
    };

    render() {
        const {theme} = this.props;
        const headerColor = tinyColor(theme.sidebarHeaderBg);
        let barStyle = 'light-content';
        if (headerColor.isLight()) {
            barStyle = 'dark-content';
        }

        return <NativeStatusBar barStyle={barStyle}/>;
    }
}
