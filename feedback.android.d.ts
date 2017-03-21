import { FeedbackApi, FeedbackShowOptions, FeedbackHideOptions } from "./feedback.common";
export declare class Feedback implements FeedbackApi {
    private lastAlert;
    show(options: FeedbackShowOptions): Promise<any>;
    private static getBackgroundColor(type?);
    private static getIconResourceId(resourcename);
    private static getIconName(type?);
    hide(options?: FeedbackHideOptions): Promise<any>;
}
