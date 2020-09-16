<template>
  <Page>
    <ActionBar title="Feedback Plugin demo"></ActionBar>

    <StackLayout>
      <Label class="message" text="Tap a button below.." textWrap="true"></Label>
      <Button @tap="showFeedbackMin" class="btn" text="Show feedback (minimal)"></Button>
      <Button @tap="showFeedbackMax" class="btn" text="Show feedback (many options)"></Button>
      <Button @tap="showFeedbackError" class="btn" text="Show feedback (error)"></Button>
    </StackLayout>
  </Page>
</template>

<script>
  import {Feedback, FeedbackType, FeedbackPosition} from "nativescript-feedback";
  import {Color} from "@nativescript/core";

  const feedback = new Feedback();

  export default {
    methods: {
      showFeedbackMin() {
        feedback.show({
          message: "Easiest thing ever, right?"
        });
      },

      showFeedbackMax() {
        feedback.show({
          title: "Thumbs up!",
          titleColor: new Color("#222222"),
          position: FeedbackPosition.Bottom,
          type: FeedbackType.Custom, // this is the default type, by the way
          message: "Custom colors and icon. Loaded from the App_Resources folder.",
          messageColor: new Color("#333333"),
          duration: 3000,
          backgroundColor: new Color("yellowgreen"),
          icon: "customicon", // in App_Resources/platform folders
          android: {
            iconColor: new Color("#222222") // optional, leave out if you don't need it
          },
          onTap: () => console.log("showFeedbackMax tapped"),
          onShow: animating => console.log(animating ? "showFeedbackMax animating" : "showFeedbackMax shown"),
          onHide: () => console.log("showFeedbackMax hidden")
        });
      },

      showFeedbackError() {
        feedback.error({
          title: "Thumbs down 👎",
          onTap: () => console.log("showFeedbackError tapped")
        });
      },
    }
  }
</script>

<style scoped>
  ActionBar {
    background-color: #53ba82;
    color: #ffffff;
  }

  .message {
    font-size: 14;
    margin: 16;
    color: #53ba82;
  }

  Button.btn {
    font-size: 14;
    border-radius: 3;
    border-width: 2;
    border-color: #63d4a5;
    color: #63d4a5;
    padding: 12;
    margin: 16;
  }
</style>
