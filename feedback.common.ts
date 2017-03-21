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
  title?: string;
  titleColor?: Color;
  message?: string;
  messageColor?: Color;
  /**
   * In milliseconds.
   * Default 4000.
   */
  duration?: number;
  type?: FeedbackType;
  position?: FeedbackPosition;
  backgroundColor?: Color;
  /**
   * A resource like 'customimage' which refers to:
   * - iOS: App_Resources/customimage.png (and customimage@2x.png / customimage@3x.png)
   * - Android: App_Resources/drawable-hdpi/customimage.png (and other folders)
   */
  icon?: string;
  onTap?: Function;
}

export interface FeedbackHideOptions {

}

export interface FeedbackApi {
  show(options: FeedbackShowOptions): Promise<any>;
  hide(options?: FeedbackHideOptions): Promise<any>;

  // TODO convenience functions like this?
  // success(options: FeedbackShowOptions): Promise<any>;
}