import { Color } from "@nativescript/core";

export enum FeedbackPosition {
  Top,
  Bottom
}

export enum FeedbackType {
  Success,
  Error,
  Warning,
  Info,
  Custom
}

export interface FeedbackShowOptions {
  /**
   * The 'bold' title at the top.
   * Default undefined.
   */
  title?: string;

  /**
   * Default 15.
   */
  titleSize?: number;

  /**
   * The title's color.
   * Default new Color("white").
   */
  titleColor?: Color;
  /**
   * The message below the title.
   * Default undefined.
   */
  message?: string;
  /**
   * The message's color.
   * Default new Color("white").
   */

  /**
   * Default 13.
   */
  messageSize?: number;

  messageColor?: Color;
  /**
   * The duration to show the feedback (milliseconds).
   * Default 4000.
   */
  duration?: number;
  /**
   * The type determines the base layout of the feedback message.
   * You can still override all other properties according to your liking.
   * Default FeedbackType.Custom.
   */
  type?: FeedbackType;
  /**
   * Either FeedbackPosition.Top or FeedbackPosition.Bottom (iOS only).
   * Default FeedbackPosition.Top
   */
  position?: FeedbackPosition;
  /**
   * The background's color.
   * Default depends on the 'type' property.
   */
  backgroundColor?: Color;
  /**
   * A resource like 'customimage' which refers to:
   * - iOS: App_Resources/customimage.png (and customimage@2x.png / customimage@3x.png)
   * - Android: App_Resources/drawable-hdpi/customimage.png (and other folders)
   * Default depends on the 'type' property.
   */
  icon?: string;
  /**
   * A callback function that gets invoked when the user tapped your feedback.
   * Default undefined.
   */
  onTap?: () => void;

  /**
   * A callback for when the feedback is hidden.
   * Default undefined.
   */
  onHide?: () => void;

  /**
   * A callback for when the feedback is shown.
   * iOS note: is called twice: once when animating and once when done.
   * Default undefined.
   */
  onShow?: (animating?: boolean) => void;

  /**
   * The font name for the title.
   * Be aware iOS needs the font name and android the file name.
   * Default bold system font.
   */
  titleFont?: string;

  /**
   * The font name for the message.
   * Be aware iOS needs the font name and android the file name.
   * Default system font.
   */
  messageFont?: string;

  /**
   * Android-specific options
   */
  android?: {
    /**
     * The icon's color. Android only as iOS uses the icon's color, but Android is otherwise always white.
     */
    iconColor?: Color;

    /**
     * This dictates whether the icon should pulse, Android only as the icon does not pulse on iOS.
     * Default true.
     */
    iconPulseEnabled?: boolean;

    /**
     * The view to add the alert to.
     * Useful when something is overlaying your Activity Modal, like a NativeScript Modal.
     */
    addToView?: any;
  };
}

export interface FeedbackHideOptions {
}

export interface FeedbackApi {
  show(options: FeedbackShowOptions): Promise<void>;

  hide(options?: FeedbackHideOptions): Promise<void>;

  // convenience funtions
  success(options: FeedbackShowOptions): Promise<void>;

  warning(options: FeedbackShowOptions): Promise<void>;

  error(options: FeedbackShowOptions): Promise<void>;

  info(options: FeedbackShowOptions): Promise<void>;
}

export abstract class FeedbackCommon implements FeedbackApi {
  abstract show(options: FeedbackShowOptions): Promise<void>;

  abstract hide(options?: FeedbackHideOptions): Promise<void>;

  success(options: FeedbackShowOptions): Promise<void> {
    options.type = FeedbackType.Success;
    return this.show(options);
  }

  warning(options: FeedbackShowOptions): Promise<void> {
    options.type = FeedbackType.Warning;
    return this.show(options);
  }

  error(options: FeedbackShowOptions): Promise<void> {
    options.type = FeedbackType.Error;
    return this.show(options);
  }

  info(options: FeedbackShowOptions): Promise<void> {
    options.type = FeedbackType.Info;
    return this.show(options);
  }
}
