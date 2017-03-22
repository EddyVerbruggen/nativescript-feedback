import { FeedbackCommon, FeedbackShowOptions, FeedbackHideOptions } from "./feedback.common";
export declare class Feedback extends FeedbackCommon {
    show(options: FeedbackShowOptions): Promise<any>;
    hide(options?: FeedbackHideOptions): Promise<any>;
    private static getType(type?);
    private static getPosition(position?);
}
