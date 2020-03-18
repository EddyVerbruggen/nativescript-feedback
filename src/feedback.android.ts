import { FeedbackCommon, FeedbackShowOptions, FeedbackHideOptions, FeedbackType, FeedbackPosition } from "./feedback.common";
import * as application from "tns-core-modules/application";
import * as utils from "tns-core-modules/utils/utils";
import { Color } from "tns-core-modules/color";

declare let com, android: any;

export { FeedbackType };
export { FeedbackPosition };

export class Feedback extends FeedbackCommon {

  private lastAlert: any = null;

  show(options: FeedbackShowOptions): Promise<void> {
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

      if (options.android && options.android.iconPulseEnabled !== undefined) {
        alerter.enableIconPulse(options.android.iconPulseEnabled);
      }

      if (options.titleFont) {
        const assetManger = utils.ad.getApplicationContext().getAssets();
        const fontPath = `app/fonts/${options.titleFont}`;
        const typeface = android.graphics.Typeface.createFromAsset(assetManger, fontPath);
        alerter.setTitleTypeface(typeface);
      }

      if (options.messageFont) {
        const assetManger = utils.ad.getApplicationContext().getAssets();
        const fontPath = `app/fonts/${options.messageFont}`;
        const typeface = android.graphics.Typeface.createFromAsset(assetManger, fontPath);
        alerter.setTextTypeface(typeface);
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

      if (options.onShow) {
        alerter.setOnShowListener(
          new com.tapadoo.alerter.OnShowAlertListener({
            onShow: () => options.onShow(),
          })
        );
      }

      if (options.onHide) {
        alerter.setOnHideListener(
          new com.tapadoo.alerter.OnHideAlertListener({
            onHide: () => options.onHide(),
          })
        );
      }

      this.lastAlert = alerter.show();
      if (options.android && options.android.addToView) {
        const parent = this.lastAlert.getParent();
        parent.removeView(this.lastAlert);
        options.android.addToView.addView(this.lastAlert);
      }

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

      const titleSize = options.titleSize || 16;
      const messageSize = options.messageSize || 13;

      this.lastAlert.getTitle().setTextSize(titleSize);
      this.lastAlert.getText().setTextSize(messageSize);

      if (options.android && options.android.iconColor) {
        let iconView = this.lastAlert.getIcon(); // android.widget.ImageView
        iconView.setColorFilter(options.android.iconColor.android);
      }

      resolve();
    });
  }

  private static getBackgroundColor(type?: FeedbackType): Color {
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

  private static getIconName(type?: FeedbackType): string {
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

  hide(options?: FeedbackHideOptions): Promise<void> {
    return new Promise((resolve) => {
      if (this.lastAlert !== null) {
        this.lastAlert.hide();
        this.lastAlert = null;
      }

      resolve();
    });
  }
}
