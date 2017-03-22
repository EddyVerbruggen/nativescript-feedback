import { Color } from "color";

export declare const enum FeedbackPosition {
  Top = 1,
  Bottom = 2
}

export declare const enum FeedbackType {
  Success = 1,
  Error = 2,
  Warning = 3,
  Info = 4,
  Custom = 5
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
