import { FeedbackApi, FeedbackShowOptions, FeedbackHideOptions } from "./feedback.common";
export declare class Feedback implements FeedbackApi {
    show(options: FeedbackShowOptions): Promise<any>;
    hide(options?: FeedbackHideOptions): Promise<any>;
    private static getType(type?);
    private static getPosition(position?);
}
