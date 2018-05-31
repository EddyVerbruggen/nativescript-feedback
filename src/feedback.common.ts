import { Color } from "tns-core-modules/color";

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
  onTap?: Function;
  /**
  * The font name.
  *  * Default to system font.
  */
  font?: string;
  /**
   * Android-specific options
   */
  android?: {
    /**
     * The icon's color. Android only as iOS uses the icon's color, but Android is otherwise always white.
     */
    iconColor?: Color;
  };
}

export interface FeedbackHideOptions {
}

export interface FeedbackApi {
  show(options: FeedbackShowOptions): Promise<any>;
  hide(options?: FeedbackHideOptions): Promise<any>;

  // convenience funtions
  success(options: FeedbackShowOptions): Promise<any>;
  warning(options: FeedbackShowOptions): Promise<any>;
  error(options: FeedbackShowOptions): Promise<any>;
  info(options: FeedbackShowOptions): Promise<any>;
}

export abstract class FeedbackCommon implements FeedbackApi {
  abstract show(options: FeedbackShowOptions): Promise<any>;

  abstract hide(options?: FeedbackHideOptions): Promise<any>;

  success(options: FeedbackShowOptions): Promise<any> {
    options.type = FeedbackType.Success;
    return this.show(options);
  }

  warning(options: FeedbackShowOptions): Promise<any> {
    options.type = FeedbackType.Warning;
    return this.show(options);
  }

  error(options: FeedbackShowOptions): Promise<any> {
    options.type = FeedbackType.Error;
    return this.show(options);
  }

  info(options: FeedbackShowOptions): Promise<any> {
    options.type = FeedbackType.Info;
    return this.show(options);
  }
}
