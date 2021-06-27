import type Hls from 'hls.js';

import {
  StorybookArgs,
  StorybookArgTypes
} from '../../shared/storybook/index.js';
import {
  VideoElementEngine,
  VideoElementProps,
  VideoElementStorybookArgs,
  VideoElementStorybookArgTypes
} from '../video/index.js';
import { HlsEvents } from './events.js';

export type HlsProvider = HlsElementProps;

export interface HlsElementProps extends VideoElementProps {
  /**
   * The `hls.js` configuration object.
   */
  hlsConfig?: Partial<Hls.Config>;

  readonly hlsEngine: Hls | undefined;

  /**
   * Whether the browser natively supports HLS, mostly only true in Safari. Only call this method
   * after the provider has connected to the DOM (wait for `ConnectEvent`).
   */
  readonly hasNativeHlsSupport: boolean;

  /**
   * Whether the current src is using HLS.
   *
   * @default false
   */
  readonly isHlsStream: boolean;

  /**
   * Whether the `hls.js` instance has mounted the `HtmlMediaElement`.
   *
   * @default false
   */
  readonly isHlsEngineAttached: boolean;

  /**
   * Whether native HLS support is available and whether it should be used. Generally defaults
   * to `false` as long as `window.MediaSource` is defined to enforce consistency by
   * using `hls.js` where ever possible.
   *
   * @default false
   */
  readonly shouldUseNativeHlsSupport: boolean;

  /**
   * The underlying `HTMLMediaElement`.
   */
  readonly videoEngine: VideoElementEngine;
}

export type HlsElementStorybookArgTypes = VideoElementStorybookArgTypes &
  StorybookArgTypes<HlsElementProps, HlsEvents>;

export type HlsElementStorybookArgs = VideoElementStorybookArgs &
  StorybookArgs<HlsElementProps, HlsEvents>;
