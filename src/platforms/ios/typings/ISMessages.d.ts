declare const enum ISAlertPosition {

  Top = 0,

  Bottom = 1
}

declare const enum ISAlertType {

  Success = 0,

  Error = 1,

  Warning = 2,

  Info = 3,

  Custom = 4
}

declare class ISMessages extends UIViewController {

  static alloc(): ISMessages; // inherited from NSObject

  static cardAlertWithTitleMessageIconImageDurationHideOnSwipeHideOnTapAlertTypeAlertPosition(title: string, message: string, iconImage: UIImage, duration: number, hideOnSwipe: boolean, hideOnTap: boolean, type: ISAlertType, position: ISAlertPosition): ISMessages;

  static hideAlertAnimated(animated: boolean): void;

  static new(): ISMessages; // inherited from NSObject

  static showCardAlertWithTitleMessageDurationHideOnSwipeHideOnTapAlertTypeAlertPositionDidHide(title: string, message: string, duration: number, hideOnSwipe: boolean, hideOnTap: boolean, type: ISAlertType, position: ISAlertPosition, didHide: (p1: boolean) => void): ISMessages;

  alertViewBackgroundColor: UIColor;

  messageLabelFont: UIFont;

  messageLabelTextColor: UIColor;

  titleLabelFont: UIFont;

  titleLabelTextColor: UIColor;

  showDidBeginDidHide(handler: () => void, didBegin: (animating: boolean) => void, didHide: (p1: boolean) => void): void;
}

declare var ISMessagesVersionNumber: number;

declare var ISMessagesVersionString: interop.Reference<number>;
