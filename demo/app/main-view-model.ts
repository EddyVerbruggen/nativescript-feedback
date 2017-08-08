import { Observable } from "data/observable";
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import { Color } from "color";

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
      // type: FeedbackType.Success, // no need to specify when using 'success' instead of 'show'
      onTap: () => { console.log("showSuccess tapped"); }
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
      onTap: () => { console.log("showSuccessAltColor tapped"); }
    });
  }

  public showInfo(): void {
    this.feedback.show({
      title: "Some info for you",
      message: "This is the default Info style.",
      duration: 2000,
      type: FeedbackType.Info,
      onTap: () => { console.log("showInfo tapped"); }
    });
  }

  public showWarning(): void {
    this.feedback.show({
      // title: "The warning title",
      message: "This one doesn't have a title, but a very long message so this baby will wrap. Showing off multi-line feedback. Woohoo!",
      duration: 4000,
      position: FeedbackPosition.Top,
      type: FeedbackType.Warning,
      onTap: () => { console.log("showWarning tapped"); }
    });
  }

  public showNoIcon(): void {
    this.feedback.show({
      title: "Title only, not even an icon..",
      duration: 3000,
      // type: FeedbackType.Custom,
      onTap: () => { console.log("showNoIcon tapped"); }
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
      onTap: () => { console.log("showCustomIcon tapped"); }
    });
  }

  public showAnotherCustomIcon(): void {
    this.feedback.show({
      title: "Dude!",
      titleColor: new Color("#222222"),
      message: "Custom colors and icon - loaded from the App_Resources folder.",
      messageColor: new Color("#333333"),
      duration: 3000,
      backgroundColor: new Color("yellowgreen"),
      icon: "issue7icon", // in App_Resources/platform folders
      onTap: () => { console.log("showAnotherCustomIcon tapped"); }
    });
  }

  public showError(): void {
    this.feedback.show({
      title: "The error title",
      message: "Not too long a text here. But it could be..",
      duration: 1000,
      type: FeedbackType.Error,
      onTap: () => { console.log("showError tapped"); }
    });
  }

  public showErrorBottom(): void {
    this.feedback.show({
      title: "The title",
      message: "A very long message so this baby will wrap. Showing off multi-line feedback. Woohoo!",
      duration: 5000,
      position: FeedbackPosition.Bottom,
      type: FeedbackType.Error,
      onTap: () => { console.log("showErrorBottom tapped"); }
    });
  }

  public hide(): void {
    this.feedback.hide();
  }
}