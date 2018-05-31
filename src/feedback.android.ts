import {
  FeedbackCommon,
  FeedbackShowOptions,
  FeedbackHideOptions,
  FeedbackType,
  FeedbackPosition
} from "./feedback.common";
import * as application from "tns-core-modules/application";
import * as utils from "tns-core-modules/utils/utils";
import { Color } from "tns-core-modules/color";

declare let com: any;

// Export the enums for devs not using TS
exports.FeedbackPosition = FeedbackPosition;
exports.FeedbackType = FeedbackType;

export class Feedback extends FeedbackCommon {

  private lastAlert: any = null;

  show(options: FeedbackShowOptions): Promise < any > {
    return new Promise((resolve, reject) => {
      this.lastAlert = null;
      let alerter = com.tapadoo.alerter.Alerter.create(application.android.foregroundActivity)
        .setTitle(options.title)
        .setText(options.message)
        .setDuration(options.duration ? options.duration : 4000);

      if (options.icon) {
        let resourceId: number = Feedback.getIconResourceId(options.icon);
        if (resourceId === 0) {
          console.log(`icon '${options.icon}' resource not found`);
        } else {
          alerter.setIcon(resourceId);
        }
      } else {
        let resourcename = Feedback.getIconName(options.type);
        if (resourcename !== null) {
          alerter.setIcon(Feedback.getIconResourceId(resourcename));
        } else {
          alerter.showIcon(false);
        }
      }

      alerter.setOnClickListener(
        new android.view.View.OnClickListener({
          onClick: (view => {
            this.lastAlert.hide();
            if (options.onTap) {
              options.onTap();
            }
          })
        })
      );

      this.lastAlert = alerter.show();

      if (options.backgroundColor) {
        this.lastAlert.setAlertBackgroundColor(options.backgroundColor.android);
      } else {
        this.lastAlert.setAlertBackgroundColor(Feedback.getBackgroundColor(options.type).android);
      }

      if (options.titleColor) {
        let titleView = this.lastAlert.getTitle(); // android.widget.TextView
        titleView.setTextColor(options.titleColor.android);
      }

      if (options.messageColor) {
        let messageView = this.lastAlert.getText(); // android.widget.TextView
        messageView.setTextColor(options.messageColor.android);
      }

      if (options.android && options.android.iconColor) {
        let iconView = this.lastAlert.getIcon(); // android.widget.ImageView
        iconView.setColorFilter(options.android.iconColor.android);
      }

      if (options.font) {
        const typeface = android.graphics.Typeface.createFromAsset(Feedback.getAssets(), `${options.font}.ttf`);
        this.lastAlert.setTitleTypeface(typeface);
        this.lastAlert.setTextTypeface(typeface);
      }

      resolve();
    });
  }

  private static getBackgroundColor(type ? : FeedbackType): Color {
    if (type === undefined || type === null || type as FeedbackType === FeedbackType.Custom) {
      return new Color("#73b7e8");
    } else if (type as FeedbackType === FeedbackType.Warning) {
      return new Color("#f18b34");
    } else if (type as FeedbackType === FeedbackType.Error) {
      return new Color("#ee664c");
    } else if (type as FeedbackType === FeedbackType.Info) {
      return new Color("#516a78");
    } else {
      return new Color("#51ae8c");
    }
  }

  private static getIconResourceId(resourcename: string): number {
    let res = utils.ad.getApplicationContext().getResources();
    return res.getIdentifier(resourcename, "drawable", utils.ad.getApplication().getPackageName());
  }

  private static getAssets() {
    let res = utils.ad.getApplicationContext().getResources();
    return res.getAssets();
  }

  private static getIconName(type ? : FeedbackType): string {
    if (type === undefined || type === null || type as FeedbackType === FeedbackType.Custom) {
      return null;
    } else if (type as FeedbackType === FeedbackType.Warning) {
      return "warningicon";
    } else if (type as FeedbackType === FeedbackType.Error) {
      return "erroricon";
    } else if (type as FeedbackType === FeedbackType.Info) {
      return "infoicon";
    } else {
      return "successicon";
    }
  }

  hide(options ? : FeedbackHideOptions): Promise < any > {
    return new Promise((resolve, reject) => {
      if (this.lastAlert !== null) {
        this.lastAlert.hide();
        this.lastAlert = null;
      }
    });
  }
}