import { Feedback, FeedbackPosition, FeedbackType } from "nativescript-feedback";
import { Color, isIOS, Observable } from "@nativescript/core";

export class HelloWorldModel extends Observable {
  private feedback: Feedback;

  constructor() {
    super();
    this.feedback = new Feedback();
  }

  public showSuccess(): void {
    this.feedback.success({
      title: "Successfully shown myself!",
      message: "I'm configured to hide after 2.5 seconds.",
      duration: 2500,
      onTap: () => console.log("showSuccess tapped")
    });
  }

  public showSuccessAltColors(): void {
    this.feedback.show({
      title: "Custom colors :)",
      titleColor: new Color("black"),
      message: "Custom text colors and background color.",
      messageColor: new Color("#516a78"),
      duration: 2500,
      type: FeedbackType.Success,
      backgroundColor: new Color("lightskyblue"),
      onTap: () => console.log("showSuccessAltColor tapped")
    });
  }

  public showInfo(): void {
    this.feedback.show({
      title: "Some info for you",
      message: "This is the default Info style.",
      duration: 2000,
      type: FeedbackType.Info,
      onTap: () => console.log("showInfo tapped"),
      onShow: (animating?: boolean) => console.log(`showInfo ${animating ? 'animating' : 'shown'}`),
      onHide: () => console.log("showInfo hidden")
    });
  }

  public showWarning(): void {
    this.feedback.show({
      // title: "The warning title",
      message: "This one doesn't have a title, but a very long message so this baby will wrap. Showing off multi-line feedback. Woohoo!",
      duration: 4000,
      position: FeedbackPosition.Top,
      type: FeedbackType.Warning,
      onTap: () => console.log("showWarning tapped")
    });
  }

  public showNoIcon(): void {
    this.feedback.show({
      title: "Title only, not even an icon..",
      duration: 3000,
      // type: FeedbackType.Custom,
      onTap: () => console.log("showNoIcon tapped")
    });
  }

  public showCustomIcon(): void {
    this.feedback.show({
      title: "Thumbs up!",
      titleColor: new Color("#222222"),
      message: "Custom colors and icon. Loaded from the App_Resources folder.",
      messageColor: new Color("#333333"),
      duration: 3000,
      backgroundColor: new Color("yellowgreen"),
      icon: "customicon", // in App_Resources/platform folders
      onTap: () => console.log("showCustomIcon tapped")
    });
  }

  public showBlackCustomIcon(): void {
    console.log("showBlackCustomIcon");
    this.feedback.show({
      title: "Dude!",
      titleColor: new Color("#222222"),
      message: "Custom colors and icon - loaded from the App_Resources folder.",
      messageColor: new Color("#333333"),
      duration: 3000,
      backgroundColor: new Color("yellowgreen"),
      icon: "issue7icon", // in App_Resources/platform folders
      android: {
        iconColor: new Color("black"),
        iconPulseEnabled: false
      },
      onTap: () => console.log("showAnotherCustomIcon tapped")
    });
  }

  public showError(): void {
    this.feedback.show({
      title: "The error title",
      message: "Not too long a text here. But it could be..",
      duration: 1000,
      type: FeedbackType.Error,
      onTap: () => console.log("showError tapped")
    });
  }

  public showErrorBottom(): void {
    this.feedback.show({
      title: "The title",
      titleSize: 18.0,
      message: "A very long message so this baby will wrap. Showing off multi-line feedback. Woohoo!",
      messageSize: 14.0,
      duration: 5000,
      position: FeedbackPosition.Bottom,
      type: FeedbackType.Error,
      onTap: () => console.log("showErrorBottom tapped")
    });
  }

  public showCustomFont(): void {
    this.feedback.success({
      title: "With custom font",
      titleSize: 19,
      message: "I'm configured to show with a custom font.",
      messageSize: 14,
      duration: 2500,
      titleFont: isIOS ? "Indie Flower" : "IndieFlower.ttf",
      messageFont: isIOS ? "Indie Flower" : "IndieFlower.ttf",
      onTap: () => console.log("customFont tapped")
    });
  }

  public showCustomFont2(): void {
    this.feedback.success({
      title: "With custom font",
      titleSize: 17,
      messageSize: 14,
      message: "I'm configured to show with a custom font. With a bold title even.",
      duration: 3000,
      titleFont: isIOS ? "SourceSansPro-Bold" : "SourceSansPro-Bold.otf",
      messageFont: isIOS ? "Source Sans Pro" : "SourceSansPro.otf",
      onTap: () => console.log("customFont2 tapped")
    });
  }

  public hide(): void {
    this.feedback.hide();
  }
}
