import {
  FeedbackCommon,
  FeedbackShowOptions,
  FeedbackHideOptions,
  FeedbackPosition,
  FeedbackType
} from "./feedback.common";

export class Feedback extends FeedbackCommon {

  show(options: FeedbackShowOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      let icon: UIImage = options.icon ? UIImage.imageNamed(options.icon) : null;
      let hideOnSwipe: boolean = true;
      let hideOnTap: boolean = true;

      let message: ISMessages = ISMessages.cardAlertWithTitleMessageIconImageDurationHideOnSwipeHideOnTapAlertTypeAlertPosition(
          options.title,
          options.message,
          icon,
          options.duration ? options.duration / 1000 : 4.0,
          hideOnSwipe,
          hideOnTap,
          Feedback.getType(options.type),
          Feedback.getPosition(options.position));

      if (options.backgroundColor) {
        message.alertViewBackgroundColor = options.backgroundColor.ios;
      }

      if (options.titleColor) {
        message.titleLabelTextColor = options.titleColor.ios;
      }
      message.titleLabelFont = UIFont.boldSystemFontOfSize(15.0);

      if (options.messageColor) {
        message.messageLabelTextColor = options.messageColor.ios;
      }
      message.messageLabelFont = UIFont.systemFontOfSize(13.0);

      message.showDidHide(() => {
        if (options.onTap) {
          options.onTap();
        }
      }, (hidden: boolean) => {
        // nothing to do on hide
      });

      resolve();
    });
  }

  hide(options?: FeedbackHideOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      ISMessages.hideAlertAnimated(true);
      resolve();
    });
  }

  private static getType(type?: FeedbackType) {
    if (!type || type as FeedbackType === FeedbackType.Custom) {
      return ISAlertType.Custom;
    } else if (type as FeedbackType === FeedbackType.Warning) {
      return ISAlertType.Warning;
    } else if (type as FeedbackType === FeedbackType.Error) {
      return ISAlertType.Error;
    } else if (type as FeedbackType === FeedbackType.Info) {
      return ISAlertType.Info;
    } else {
      return ISAlertType.Success;
    }
  }

  private static getPosition(position?: FeedbackPosition) {
    if (!position || position as FeedbackPosition === FeedbackPosition.Top) {
      return ISAlertPosition.Top;
    } else {
      return ISAlertPosition.Bottom;
    }
  }
}